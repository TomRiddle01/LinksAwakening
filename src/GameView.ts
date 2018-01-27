import {Game} from "./Game";
import {GameObject} from "./GameObjects/GameObjects";
import {Map} from "./Maps/Map";
import {Sprites} from "./Sprites/Sprites";

export class GameView {

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private bgcanvas: HTMLCanvasElement;
    private bgctx: CanvasRenderingContext2D;
    private lastFrame: number = Date.now() - 0.001;
    private frameDurationLimit = 2;
    private fps = 60;

    constructor(public game: Game) {
        const CANVAS_WIDTH = 480;
        const CANVAS_HEIGHT = 320;

        this.canvas = document.getElementById("game2") as HTMLCanvasElement;
        this.bgcanvas = document.getElementById("game1") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.bgctx = this.bgcanvas.getContext("2d");


    }

    public mainLoop() {
        const delta = Math.min((Date.now() - this.lastFrame) / 1000, this.frameDurationLimit);
        this.lastFrame = Date.now();

        // reset window

        this.bgctx.canvas.width  = window.innerWidth - 20;
        this.bgctx.canvas.height = window.innerHeight - 20 ;
        this.ctx.canvas.width  = window.innerWidth - 20;
        this.ctx.canvas.height = window.innerHeight - 20 ;

        // debug infos
        this.ctx.fillStyle = "black";
        this.ctx.font = "bold 16px Arial";

        this.fps += ((1 / delta) - this.fps) * 0.01;
        const fps = Math.floor(this.fps);
        this.ctx.fillText(`${fps} fps`, 5, 15);

        const gameState = this.game.tick(delta);

        // render stuff from gameState
        this.ctx.save();
        this.bgctx.save();

        const gScaleX = Math.min(this.canvas.width / gameState.map.map.image.width,
            this.canvas.height / gameState.map.map.image.height) * 0.5;
        const gScaleY = gScaleX;

        // translate to top-left of map
        const x = this.canvas.width / 2 - gameState.map.map.image.width * gScaleX / 2 ;
        const y = this.canvas.height / 2 - gameState.map.map.image.height * gScaleY / 2 ;
        this.bgctx.translate(x, y);
        this.bgctx.transform(gScaleX, 0, 0, gScaleY, 0, 0);
        this.ctx.translate(x, y);
        this.ctx.transform(gScaleX, 0, 0, gScaleY, 0, 0);
        this.renderMap(delta, gameState.map.map);
        this.renderObject(delta, gameState.map.map, gameState.player);

        gameState.map.tiles.forEach((tile) => {
            this.renderObject(delta, gameState.map.map, tile);
        });

        this.ctx.restore();
        this.bgctx.restore();

        // weaker alternative but without memory leak: setTimeout(() => {this.mainLoop();}, 1);

        window.requestAnimationFrame(() => this.mainLoop());
    }

    public renderMap(delta: number, map: Map) {

        const x = 0 ;
        const y = 0;

        this.bgctx.drawImage(map.image,
            0, 0, map.image.width, map.image.height,
            x, y, map.image.width, map.image.height);
    }

    public renderObject(delta: number, map: Map, gameObject: GameObject) {

        if (gameObject.sprite && gameObject.visible) {
            //this.ctx.moveTo(gameObject.posX, gameObject.posY);

            // frame animation
            const movementSpeed = gameObject.moving ? gameObject.movingSpriteSpeedFactor : 1;
            gameObject.spriteLifetime += delta * gameObject.sprite.speed * movementSpeed;
            const frameKey = Math.floor(gameObject.spriteLifetime % gameObject.sprite.frames.length);
            const frame = gameObject.sprite.frames[frameKey];

            // translate to screen
            const x = gameObject.posX * map.tileWidthX;
            const y = gameObject.posY * map.tileWidthY;
            const sY = gameObject.gameSizeX * map.tileWidthX;
            const sX = gameObject.gameSizeY * map.tileWidthY;
            this.ctx.drawImage(gameObject.sprite.image,
                Math.floor(frame.posX), Math.floor(frame.posY), Math.floor(frame.sizeX), Math.floor(frame.sizeY),
                Math.floor(x), Math.floor(y), Math.floor(sX), Math.floor(sY));
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
