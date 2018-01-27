import {Enemy} from "./GameObjects/Enemy";
import {MapInstance} from "./GameObjects/MapInstance";
import {Player} from "./GameObjects/Player";
import {Map} from "./Maps/Map";

export class GameState {
    public player: Player;
    public map: MapInstance;
}
