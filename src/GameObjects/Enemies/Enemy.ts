import {GameObject} from "../GameObjects";
import {Direction} from "../Misc/Direction";
import {DirectionX} from "../Misc/DirectionX";
import {DirectionY} from "../Misc/DirectionY";

export class Enemy extends GameObject {

    public directionX = DirectionX.RIGHT;
    public directionY = DirectionY.DOWN;
}
