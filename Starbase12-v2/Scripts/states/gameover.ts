module states {
    export function GameOverState() {

    }

    // Restart Game when Try Again Button is clicked
    export function playAgainClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = config.PLAY_STATE;
        changeState(currentState);
    }
    

    // Read High Score from File
    /*export function readHighScore() {
        var xhr: XMLHttpRequest = new XMLHttpRequest();

        xhr.open("post", "Scripts/scores.txt", false);
        xhr.send(null);
        scoreboard.highScore = parseInt(xhr.responseText);
    }*/
    

    // Write High Score to File via PHP
    /*export function writeHighScore() {
        var hiScore = new FormData();

        hiScore.append("data", scoreboard.score.toString());
        scoreboard.highScore = scoreboard.score;
        var xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("post", "Scripts/writeScore.php", true);
        xhr.send(hiScore);
    }*/
    

    // Game Over Scene
    export function GameOver() {
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;
        var highScoreLabel: objects.Label;
        var highScore: objects.Label;
        var highScoreString: string = "";
        var playAgainButton: objects.Button;

        // Enable Mouse Events
        stage.enableMouseOver(20);

        // Declare new Game Container
        game = new createjs.Container();


        // Show Cursor
        //stage.cursor = "default";

        // Check if player beat high score
        //readHighScore();

        /*if (scoreboard.score > scoreboard.highScore) {
            writeHighScore();
        }
        highScoreString = hud.highScore.toString();*/
        
        // Display Game Over
        gameOverLabel = new objects.Label(config.MIDDLE_X, 100, "Game Over");
        gameOverLabel.fontSize(70);
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(config.MIDDLE_X, 180, "Your Score");
        finalScoreLabel.fontSize(60);
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(config.MIDDLE_X, 280, Math.floor(hud.score).toString());
        finalScore.fontSize(60);
        game.addChild(finalScore);

        /* // Display High Score Label
        highScoreLabel = new objects.Label(config.MIDDLE_X, 240, "High Score");
        highScoreLabel.fontSize(40);
        game.addChild(highScoreLabel);

        // Display High Score
        highScore = new objects.Label(config.MIDDLE_X, 300, highScoreString);
        highScore.fontSize(40);
        game.addChild(highScore);*/
       

        // Display Try Again Button
        playAgainButton = new objects.Button(config.MIDDLE_X, 360, "playAgainButton");
        game.addChild(playAgainButton);
        playAgainButton.addEventListener("click", playAgainClicked);
        

        stage.addChild(game);

    }
}