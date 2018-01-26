import {Game} from "./Game";
import {GameObject} from "./GameObjects/GameObjects";

export class GameView {

    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public lastFrame: number;

    constructor(public game: Game) {
        const CANVAS_WIDTH = 480;
        const CANVAS_HEIGHT = 320;

        this.canvas = document.getElementById("game") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");

    }

    public mainLoop() {
        const delta = (Date.now() - this.lastFrame) / 1000;

        // reset window
        this.ctx.canvas.width  = window.innerWidth - 20;
        this.ctx.canvas.height = window.innerHeight - 20 ;
        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "gray";
        this.ctx.fill();

        // debug infos
        this.ctx.fillStyle = "black";
        this.ctx.font = "bold 16px Arial";

        const fps = Math.floor(1 / delta);
        this.ctx.fillText(`${fps} fps`, 5, 15);

        const gameState = this.game.tick(delta);

        // render stuff from gameState

        this.lastFrame = Date.now();
        window.requestAnimationFrame(() => this.mainLoop());
    }

    public renderObject(gameObject: GameObject) {
        this.ctx.beginPath();

    }

}
