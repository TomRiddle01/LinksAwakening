import {Game} from "./Game";
import {GameObject} from "./GameObjects/GameObjects";

export class GameView {

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private lastFrame: number = Date.now();
    private frameDurationLimit = 0.5;

    constructor(public game: Game) {
        const CANVAS_WIDTH = 480;
        const CANVAS_HEIGHT = 320;

        this.canvas = document.getElementById("game") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");

    }

    public mainLoop() {
        const delta = Math.min((Date.now() - this.lastFrame) / 1000, this.frameDurationLimit);

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
        this.renderObject(delta, gameState.player);

        this.lastFrame = Date.now();
        window.requestAnimationFrame(() => this.mainLoop());
    }

    public renderObject(delta: number, gameObject: GameObject) {
        if (gameObject.sprite) {
            this.ctx.moveTo(gameObject.posX, gameObject.posY);

            // frame animation
            const movementSpeed = gameObject.moving ? gameObject.movingSpriteSpeedFactor : 1;
            gameObject.spriteLifetime += delta * gameObject.sprite.speed * movementSpeed;
            const frameKey = Math.floor(gameObject.spriteLifetime % gameObject.sprite.frames.length);
            const frame = gameObject.sprite.frames[frameKey];

            // world
            const scale = 2;

            // translate to screen
            const x = gameObject.posX;
            const y = gameObject.posY;
            const sY = frame.sizeX * scale;
            const sX = frame.sizeY * scale;
            this.ctx.drawImage(gameObject.sprite.image,
                frame.posX, frame.posY, frame.sizeX, frame.sizeY,
                x, y, sX, sY);
        }

    }

}
