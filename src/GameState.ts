import {Enemy} from "./GameObjects/Enemy";
import {Player} from "./GameObjects/Player";

export class GameState {
    public player: Player;
    public ingameObjects: [Enemy];
}
