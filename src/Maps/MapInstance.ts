import {Enemy} from "../GameObjects/Enemies/Enemy";
import {GameObject} from "../GameObjects/GameObjects";
import {Tile} from "../GameObjects/Tiles/Tile";
import {Map} from "./Map";

export class MapInstance  {

    public staticTiles: Tile[] = [];
    public dynamicObjects: GameObject[] = [];
    public enemies: Enemy[] = [];

    constructor(public map: Map) {
        map.tiles.forEach((tilemaker) => this.staticTiles.push(tilemaker()));
        map.enemies.forEach((tilemaker) => this.enemies.push(tilemaker()));
    }

}
