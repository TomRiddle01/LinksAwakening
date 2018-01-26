import {GameState} from "./GameState";
import {Game} from "./Game";
import {GameView} from "./GameView";

window.onload = function(){
    console.log('staring');
    let gameState = new GameState();
    let game = new Game(gameState);
    let gameView = new GameView(game);
    gameView.mainLoop();
    document.write('hello2')
};