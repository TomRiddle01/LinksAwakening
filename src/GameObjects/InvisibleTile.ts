import {Sprite} from "../Sprites/Sprite";
import {GameObject} from "./GameObjects";
import {Sprites} from "../Sprites/Sprites";

export class InvisibleTile extends GameObject {

    constructor(posX: number, posY: number) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.playerCollision = true;
        this.visible = false;
        this.setSprite(Sprites.invisible);
    }
}
