// Play State
var states;
(function (states) {
    // Main Game Loop
    function PlayState(event) {
        // Update Starbase
        starbase.update();
        starbase.integrityLabel.updateCache();
        starbase.updateCache();
        // Update Player
        player.update();
        player.integrityLabel.updateCache();
        player.updateCache();
        // Update Managers
        klingon.update();
        beamWeapon.update();
        particleExplosion.update();
        collision.update();
        // Update Crosshair
        crosshair.update();
        //crosshair.updateCache();
        // Update HUD
        hud.update();
    }
    states.PlayState = PlayState;
    // Main Game Function
    function Play() {
        // Turn off Mouse Over
        stage.enableMouseOver(0);
        gameTile = new managers.GameTile();
        gameTile.init();
        // the Main object container
        game = new createjs.Container();
        // Play battle music
        battleSound = createjs.Sound.play("battleMusic", createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        //stage.cursor = "none";
        background = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
        game.addChildAt(background, layer.BACKGROUND);
        background.cache(0, 0, config.WIDTH, config.HEIGHT);
        hud = new objects.Hud();
        game.addChildAt(hud, layer.HUD);
        // Create the starbase
        starbase = new objects.Starbase();
        game.addChild(starbase);
        game.addChild(starbase.integrityLabel);
        starbase.integrityLabel.shadow = new createjs.Shadow('#FFF', 2, 2, 8);
        starbase.integrityLabel.filters = [colorFilter];
        starbase.integrityLabel.cache(0, 0, starbase.integrityLabel.getBounds().width, starbase.integrityLabel.getBounds().height);
        starbase.cache(0, 0, starbase.width, starbase.height);
        gameTile.getLocation(starbase);
        // Create player
        player = new objects.Player();
        game.addChild(player);
        game.addChild(player.integrityLabel);
        player.integrityLabel.shadow = new createjs.Shadow('#FFF', 2, 2, 8);
        player.integrityLabel.filters = [colorFilter];
        player.integrityLabel.cache(0, 0, player.integrityLabel.getBounds().width, player.integrityLabel.getBounds().height);
        player.cache(0, 0, player.width, player.height);
        gameTile.getLocation(player);
        // Instantiate Enemy Manager and Create enemies
        klingon = new managers.Klingon();
        klingon.spawn();
        // Create the Crosshair
        crosshair = new objects.Crosshair();
        game.addChild(crosshair);
        //crosshair.cache(stage.mouseX, stage.mouseY, crosshair.width, crosshair.height);
        // Instantiate the Beamweapon Manager
        beamWeapon = new managers.BeamWeapon();
        // Manage Explosions
        particleExplosion = new managers.ParticleExplosion();
        // Manage Collisions
        collision = new managers.Collision();
        stage.addChild(game);
    }
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map