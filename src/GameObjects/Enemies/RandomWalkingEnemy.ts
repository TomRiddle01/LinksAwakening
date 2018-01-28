import {GameState} from "../../GameState";
import {Sprites} from "../../Sprites/Sprites";
import {GameObject} from "../GameObjects";
import {Direction} from "../Misc/Direction";
import {DirectionX} from "../Misc/DirectionX";
import {DirectionY} from "../Misc/DirectionY";
import {Enemy} from "./Enemy";

export class RandomWalkingEnemy extends Enemy {

    public originX = 0;
    public originY = 0;
    public focusX: number;
    public focusY: number;
    public radius = 3;
    public switchDirProbability = 0.10;

    constructor(posX: number, posY: number) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.originX = posX;
        this.originY = posY;
    }

    public focusRandomPoint() {
        this.focusX = this.originX + Math.cos(Math.random() * 2 * Math.PI) * this.radius;
        this.focusY = this.originY + Math.sin(Math.random() * 2 * Math.PI) * this.radius;
    }
    public maybeFocusRandomPoint(delta: number, probability: number) {
        if (Math.random() < probability * delta) {
            this.focusRandomPoint();
        }
    }

    public tick(delta: number, gameState: GameState) {
        if (this.focusX === undefined || this.focusY === undefined) {
            this.focusRandomPoint();
        }
        this.maybeFocusRandomPoint(delta, this.switchDirProbability);

        let x = this.focusX - this.posX;
        let y = this.focusY - this.posY;
        const distance = Math.sqrt(x * x + y * y);
        x /= distance;
        y /= distance;

        this.posX += x * this.speed * delta;
        this.posY += y * this.speed * delta;
        if (Math.abs(this.posX - this.focusX) < 0.1 &&
            Math.abs(this.posY - this.focusY) < 0.1) {
            this.focusRandomPoint();

        }
        if (x > 0) { this.directionX = DirectionX.RIGHT; }
        if (x < 0) { this.directionX = DirectionX.LEFT; }
        if (y > 0) { this.directionY = DirectionY.UP; }
        if (y < 0) { this.directionY = DirectionY.DOWN; }
        return;
    }
}
