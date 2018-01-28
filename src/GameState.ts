import {Enemy} from "./GameObjects/Enemies/Enemy";
import {Player} from "./GameObjects/Player/Player";
import {Map} from "./Maps/Map";
import {MapInstance} from "./Maps/MapInstance";

export class GameState {
    public player: Player;
    public map: MapInstance;
}
