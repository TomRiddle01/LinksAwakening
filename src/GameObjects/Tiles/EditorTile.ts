import {Sprite} from "../../Sprites/Sprite";
import {GameObject} from "../GameObjects";
import {StaticTile} from "./StaticTile";

export class EditorTile extends GameObject {

    constructor(sprite: Sprite, posX: number, posY: number) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.playerCollision = false;
        this.setSprite(sprite);
    }
}
