import {Sprite} from "../Sprites/Sprite";
import {DamageHitBox} from "./DamageHitBox";
import {GameObject} from "./GameObjects";

export class StaticTile extends GameObject {

    constructor(sprite: Sprite, posX: number, posY: number) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.playerCollision = true;
        this.setSprite(sprite);
    }

}
