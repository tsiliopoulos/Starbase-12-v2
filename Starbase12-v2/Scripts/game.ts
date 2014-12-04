﻿/// <reference path="config/config.ts" />
/// <reference path="config/keys.ts" />
/// <reference path="config/layer.ts" />
/// <reference path="config/controls.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="managers/gametile.ts" />
/// <reference path="utility/showlocation.ts" />
/// <reference path="utility/drawdebugrect.ts" />
/// <reference path="utility/distance.ts" />
/// <reference path="utility/getarcstring.ts" />
/// <reference path="utility/textcolour.ts" />
/// <reference path="utility/quadrant.ts" />
/// <reference path="utility/oppositeangle.ts" />
/// <reference path="interfaces/iobject.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/hud.ts" />
/// <reference path="objects/crosshair.ts" />
/// <reference path="objects/explosion.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/shield.ts" />
/// <reference path="objects/player.ts" />
/// <reference path="objects/disruptor.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/starbase.ts" />
/// <reference path="objects/phasertracer.ts" />
/// <reference path="objects/phaser.ts" />
/// <reference path="objects/photon.ts" />
/// <reference path="managers/klingon.ts" />
/// <reference path="managers/particleexplosion.ts" />
/// <reference path="managers/beamweapon.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />

var stage: createjs.Stage;
var canvas;
var stats: Stats;

// Filters
var colorFilter: createjs.ColorFilter = new createjs.ColorFilter(1, 1, 0);

// Game Objects
var player: objects.Player;
var starbase: objects.Starbase;
var background: createjs.Bitmap;
var hud: objects.Hud;
var crosshair: objects.Crosshair;

// Game Arrays
var emitters: createjs.Container[] = [];
var explosions: objects.Explosion[] = [];
var gameTiles: createjs.Point[] = [];
var enemies: objects.Enemy[] = [];

// Game Managers
var gameTile: managers.GameTile;
var beamWeapon: managers.BeamWeapon;
var collision: managers.Collision;
var particleExplosion: managers.ParticleExplosion;
var klingon: managers.Klingon;

// Game Container
var game: createjs.Container;

// Game State Variables
var currentState: number;
var currentStateFunction;
var gamePlaying: boolean = false;
var startButton: objects.Button;

// Preload Assets
function preload(): void {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);

    canvas = config.ARCADE_CANVAS;

    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);

    createjs.Ticker.setFPS(config.FPS);
    createjs.Ticker.addEventListener("tick", gameLoop);

    // Show the Start Screen
    showStartScreen();
}

// Initialize Game
function init(): void {
    // Add Start Button after Loader is complete
    startButton = new objects.Button(config.MIDDLE_X, 360, "startButton");
    game.addChild(startButton);

    // Don't Start the game until startButton is pressed
    startButton.on("click", function (e) {

        stage.removeChild(game);
        //soundtrack.stop();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = config.MENU_STATE;

        gamePlaying = true;
        changeState(currentState);
    });
}

// Main Game Loop
function gameLoop(event) {
    // Start counting for FPS stats
    this.stats.begin();

    if (gamePlaying == true) {
        currentStateFunction();
    }
    
    stage.update(event);

    // Stop counting Stats
    return this.stats.end();
}

// Setup Game Stats using Stats.js
function setupStats() {
    stats = new Stats();
    stats.setMode(0)
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}

// Main Game Function
function showStartScreen(): void {
    var screenFont: string = "100px startrek";
    setupStats();

    // the Main object container
    game = new createjs.Container();

    // Add Mail Pilot Label
    var TitleLabel = new createjs.Text("Starbase 12", screenFont, config.FONT_COLOUR);
    TitleLabel.regX = TitleLabel.getBounds().width * 0.5;
    TitleLabel.regY = TitleLabel.getBounds().height * 0.5;
    TitleLabel.x = config.MIDDLE_X;
    TitleLabel.y = 120;
    game.addChild(TitleLabel);

    stage.addChild(game);
}

function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case config.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.MenuState;
            states.Menu();
            break;

        case config.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.PlayState;
            states.Play();
            break;

        case config.GAME_OVER_STATE:
            // instantiate game over screen
            currentStateFunction = states.GameOverState;
            states.GameOver();
            break;

        case config.INSTRUCTION_STATE:
            /*currentStateFunction = states.InstructionState;
            // instantiate game over screen
            states.Instructions();*/
            break;
    }
}