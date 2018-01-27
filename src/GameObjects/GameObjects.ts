import {Sprite} from "../Sprites/Sprite";

export class GameObject {
    public posX: number = 3;
    public posY: number = 3;
    public sprite: Sprite;
    public spriteLifetime = 0;
    public moving = false;
    public movingSpriteSpeedFactor = 2;
    public speed = 5;
    public gameSizeX = 1;
    public gameSizeY = 1;
    public playerCollision = false;

    public setSprite(sprite: Sprite) {
        if (this.sprite !== sprite) {
            this.sprite = sprite;
        }
    }

    public tileX(){
        return Math.floor(this.posX);
    }
    public tileY(){
        return Math.floor(this.posY);
    }

    public samePos(other: GameObject): boolean {
        return  this.tileX() === other.tileX() && this.tileY() === other.tileY();
    }
}
