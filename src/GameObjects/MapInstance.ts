import {Map} from "../Maps/Map";
import {Enemy} from "./Enemy";
import {GameObject} from "./GameObjects";
import {Tile} from "./Tile";

export class MapInstance  {

    public enemies: Enemy[];
    public staticTiles: Tile[] = [];
    public dynamicObjects: GameObject[] = [];

    constructor(public map: Map) {
        map.tiles.forEach((tilemaker) => this.staticTiles.push(tilemaker()));
    }

}
