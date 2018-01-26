import {Enemy} from "./GameObjects/Enemy";
import {Player} from "./GameObjects/Player";
import {Map} from "./Maps/Map";
import {MapInstance} from "./GameObjects/MapInstance";

export class GameState {
    public player: Player;
    public map: MapInstance;
}
