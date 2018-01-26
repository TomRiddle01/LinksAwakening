import {Game} from "./Game";
import {GameObject} from "./GameObjects/GameObjects";
import {Map} from "./Maps/Map";

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
        this.ctx.save();

        const gScaleX = Math.min(this.canvas.width / gameState.map.map.image.width,
            this.canvas.height / gameState.map.map.image.height) * 0.7;
        const gScaleY = gScaleX;

        // translate to top-left of map
        const x = this.canvas.width / 2 - gameState.map.map.image.width * gScaleX / 2 ;
        const y = this.canvas.height / 2 - gameState.map.map.image.height * gScaleY / 2 ;
        this.ctx.translate(x, y);
        this.ctx.transform(gScaleX, 0, 0, gScaleY, 0, 0);
        this.renderMap(delta, gameState.map.map);
        this.renderObject(delta, gameState.map.map, gameState.player);

        gameState.map.tiles.forEach((tile) => {
            this.renderObject(delta, gameState.map.map, tile);
        });

        this.ctx.restore();

        this.lastFrame = Date.now();
        window.requestAnimationFrame(() => this.mainLoop());
    }

    public renderMap(delta: number, map: Map) {

        const x = 0 ;
        const y = 0;

        this.ctx.drawImage(map.image,
            0, 0, map.image.width, map.image.height,
            x, y, map.image.width, map.image.height);
    }

    public renderObject(delta: number, map: Map, gameObject: GameObject) {

        if (gameObject.sprite) {
            this.ctx.moveTo(gameObject.posX, gameObject.posY);

            // frame animation
            const movementSpeed = gameObject.moving ? gameObject.movingSpriteSpeedFactor : 1;
            gameObject.spriteLifetime += delta * gameObject.sprite.speed * movementSpeed;
            const frameKey = Math.floor(gameObject.spriteLifetime % gameObject.sprite.frames.length);
            const frame = gameObject.sprite.frames[frameKey];

            // translate to screen
            const x = gameObject.posX * map.tileWidthX;
            const y = gameObject.posY * map.tileWidthY;
            const sY = gameObject.sprite.gameSizeX * map.tileWidthX;
            const sX = gameObject.sprite.gameSizeY * map.tileWidthY;
            this.ctx.drawImage(gameObject.sprite.image,
                frame.posX, frame.posY, frame.sizeX, frame.sizeY,
                x, y, sX, sY);
        }

    }

    public debugText(text: string, x: number, y: number) {
        this.ctx.save();

        this.ctx.fillStyle = "black";
        this.ctx.font = "bold 16px Arial";
        this.ctx.fillText(text, x, y);

        this.ctx.restore();
    }
}
