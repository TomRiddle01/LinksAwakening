import {Sprites} from "../Sprites/Sprites";
import {Direction} from "./Direction";
import {GameObject} from "./GameObjects";

export class Player extends GameObject {
    public buttonUp = false;
    public buttonDown = false;
    public buttonLeft = false;
    public buttonRight = false;
    public direction = Direction.DOWN;

    public tick(delta: number) {
        this.moving = false;
        if (this.buttonUp) {
            this.posY -= this.speed * delta;
            this.direction = Direction.UP;
            this.setSprite(Sprites.linkUp);
            this.moving = true;
        }
        if (this.buttonDown) {
            this.posY += this.speed * delta;
            this.direction = Direction.DOWN;
            this.setSprite(Sprites.linkDown);
            this.moving = true;
        }
        if (this.buttonRight) {
            this.posX += this.speed * delta;
            this.direction = Direction.RIGHT;
            this.setSprite(Sprites.linkRight);
            this.moving = true;
        }
        if (this.buttonLeft) {
            this.posX -= this.speed * delta;
            this.direction = Direction.LEFT;
            this.setSprite(Sprites.linkLeft);
            this.moving = true;
        }

        switch (this.direction) {
            case Direction.LEFT: this.setSprite(Sprites.linkLeft); break;
            case Direction.RIGHT: this.setSprite(Sprites.linkRight); break;
            case Direction.UP: this.setSprite(Sprites.linkUp); break;
            case Direction.DOWN: this.setSprite(Sprites.linkDown); break;
        }
    }
}
