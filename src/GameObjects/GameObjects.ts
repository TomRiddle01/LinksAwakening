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

    public setSprite(sprite: Sprite) {
        if (this.sprite !== sprite) {
            this.sprite = sprite;
        }
    }
}
