import {Sprites} from "../Sprites/Sprites";
import {DamageHitBox} from "./DamageHitBox";
import {GameObject} from "./GameObjects";
import {StaticTile} from "./StaticTile";

export class Grass extends StaticTile {

    constructor(posX: number, posY: number) {
        super(Sprites.grass, posX, posY);
    }

    public collisionWith(object: GameObject) {
        if (object instanceof DamageHitBox) {
           this.disappearsAfter = 0.2;
           this.playerCollision = false;
        }
        return;
    }
}
