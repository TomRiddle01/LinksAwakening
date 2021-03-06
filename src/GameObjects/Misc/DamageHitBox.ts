import {Sprite} from "../../Sprites/Sprite";
import {Sprites} from "../../Sprites/Sprites";
import {GameObject} from "../GameObjects";

export class DamageHitBox extends GameObject {

    constructor(posX: number, posY: number) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.npcCollision = false;
        this.visible = false;
        this.setSprite(Sprites.invisible);
    }
}
