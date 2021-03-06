import {GameState} from "../GameState";
import {Sprite} from "../Sprites/Sprite";
import {Sprites} from "../Sprites/Sprites";
import {DamageHitBox} from "./Misc/DamageHitBox";

export class GameObject {
    public posX: number = 3;
    public posY: number = 3;
    public sprite: Sprite;
    public previousSprite: Sprite = undefined;
    public spriteLifetime = 0;
    public moving = false;
    public speed = 5;
    public gameSizeX = 1;
    public gameSizeY = 1;
    public npcCollision = false;
    public visible: boolean = true;

    public disappearsAfter: number;
    public lifetime = 0;

    public pushing = false;

    public setSprite(sprite: Sprite) {
        // you need to set previousSprite by yourself at the end of
        // your tick for this to work as expected
        if (this.previousSprite !== sprite) {
            this.sprite = sprite;
            this.spriteLifetime = 0;
        }
    }

    public centerX() {
        return this.posX + this.gameSizeX / 2;
    }
    public centerY() {
        return this.posY + this.gameSizeY / 2;
    }

    public tileX() {
        return Math.floor(this.centerX());
    }
    public tileY() {
        return Math.floor(this.centerY());
    }

    public samePos(other: GameObject): boolean {
        return  this.tileX() === other.tileX() && this.tileY() === other.tileY();
    }

    public isTileDead(): boolean {
        if (this.disappearsAfter !== undefined) {
            return this.lifetime >= this.disappearsAfter;
        }
        return false;
    }

    public tick(delta: number, gameState: GameState) {
        this.lifetime += delta;
    }

    public collisionWith(obj: GameObject) {

        return;
    }
    public die(seconds: number) {
        this.disappearsAfter = this.lifetime + seconds;
    }
}
