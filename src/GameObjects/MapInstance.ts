import {Map} from "../Maps/Map";
import {Enemy} from "./Enemy";
import {Tile} from "./Tile";

export class MapInstance  {

    public enemies: Enemy[];
    public tiles: Tile[] = [];

    constructor(public map: Map) {
        map.tiles.forEach((tilemaker) => this.tiles.push(tilemaker()));
    }

}
