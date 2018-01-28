import {Enemy} from "./GameObjects/Enemies/Enemy";
import {MapInstance} from "./Maps/MapInstance";
import {Player} from "./GameObjects/Player/Player";
import {Map} from "./Maps/Map";

export class GameState {
    public player: Player;
    public map: MapInstance;
}
