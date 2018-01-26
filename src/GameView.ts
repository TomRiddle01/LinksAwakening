import {Game} from "./Game";
import {GameObject} from "./GameObjects";

export class GameView {

    canvas : HTMLCanvasElement;
    ctx : CanvasRenderingContext2D;
    lastFrame : number;

    constructor(public game: Game){
        let CANVAS_WIDTH = 480;
        let CANVAS_HEIGHT = 320;

        this.canvas = <HTMLCanvasElement> document.getElementById("game");
        console.log(this.canvas);
        this.ctx = this.canvas.getContext("2d");

    }

    mainLoop(){
        let delta = (Date.now() - this.lastFrame)/1000;

        // reset window
        this.ctx.canvas.width  = window.innerWidth - 20;
        this.ctx.canvas.height = window.innerHeight -20 ;
        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "gray";
        this.ctx.fill();

        // debug infos
        this.ctx.fillStyle = "black";
        this.ctx.font = "bold 16px Arial";

        let fps = Math.floor(1/delta);
        this.ctx.fillText(`${fps} fps`, 5,15);

        let gameState = this.game.tick(delta);

        // render stuff from gameState


        this.lastFrame = Date.now();
        window.requestAnimationFrame(()=>this.mainLoop());
    }

    renderObject(gameObject:GameObject) {
        this.ctx.beginPath()

    }

}
