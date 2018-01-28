import {Map} from "./Map";
import {Enemy} from "../GameObjects/Enemies/Enemy";
import {GameObject} from "../GameObjects/GameObjects";
import {Tile} from "../GameObjects/Tiles/Tile";

export class MapInstance  {

    public enemies: Enemy[];
    public staticTiles: Tile[] = [];
    public dynamicObjects: GameObject[] = [];

    constructor(public map: Map) {
        map.tiles.forEach((tilemaker) => this.staticTiles.push(tilemaker()));
    }

}
