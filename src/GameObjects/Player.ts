import {GameObject} from "./GameObjects";

export class Player extends GameObject {
    public buttonUp = false;
    public buttonDown = false;
    public buttonLeft = false;
    public buttonRight = false;
    public speed = 10;

    public tick(delta: number) {
        if (this.buttonUp) {
            this.y += this.speed * delta;
        }
        if (this.buttonDown) {
            this.y -= this.speed * delta;
        }
        if (this.buttonRight) {
            this.x += this.speed * delta;
        }
        if (this.buttonLeft) {
            this.x -= this.speed * delta;
        }

    }
}
