import {Sprites} from "../../Sprites/Sprites";
import {GameObject} from "../GameObjects";
import {DamageHitBox} from "../Misc/DamageHitBox";
import {StaticTile} from "./StaticTile";

export class Grass extends StaticTile {

    private destroyed = false;

    constructor(posX: number, posY: number) {
        super(Sprites.grass, posX, posY);
    }

    public collisionWith(object: GameObject) {
        if (!this.destroyed && object instanceof DamageHitBox) {
            this.setSprite(Sprites.leaves);
            this.die(this.sprite.getDuration());
            this.npcCollision = false;
            this.destroyed = true;
        }
    }
}
