import {Enemy} from "./GameObjects/Enemy";
import {Player} from "./GameObjects/Player";
import {Map} from "./Maps/Map";

export class GameState {
    public player: Player;
    public ingameObjects: [Enemy];
    public map: Map;
}
