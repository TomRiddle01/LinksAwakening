import {Sprite} from "../Sprites/Sprite";

export class GameObject {
    public posX: number = 30;
    public posY: number = 30;
    public sprite: Sprite;
    public spriteLifetime = 0;
    public moving = false;
    public movingSpriteSpeedFactor = 2;
    public speed = 100;

    public setSprite(sprite: Sprite) {
        if (this.sprite !== sprite) {
            this.sprite = sprite;
        }
    }
}
