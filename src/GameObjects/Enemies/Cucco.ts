import {GameState} from "../../GameState";
import {Sprites} from "../../Sprites/Sprites";
import {GameObject} from "../GameObjects";
import {DirectionX} from "../Misc/DirectionX";
import {RandomWalkingEnemy} from "./RandomWalkingEnemy";

export class Cucco extends RandomWalkingEnemy {

    constructor(posX: number, posY: number) {
        super(posX, posY);
        this.npcCollision = false;
        this.sprite = Sprites.cuccoLeft;
        this.speed = 1;
        this.radius = 10;
    }
    public tick(delta: number, gameState: GameState) {
        super.tick(delta, gameState);

        if (this.directionX === DirectionX.LEFT) {
            this.setSprite(Sprites.cuccoLeft);
        } else {
            this.setSprite(Sprites.cuccoRight);
        }
        this.previousSprite = this.sprite;

        if (this.pushing) {
            this.maybeFocusRandomPoint(delta, 0.65);
        }
    }
}
