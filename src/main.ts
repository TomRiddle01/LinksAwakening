import {Game} from "./Game";
import {GameState} from "./GameState";
import {GameView} from "./GameView";

window.onload = () => {
    const gameState = new GameState();
    const game = new Game(gameState);
    const gameView = new GameView(game);
    gameView.mainLoop();
};
