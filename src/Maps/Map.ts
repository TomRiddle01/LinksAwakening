import {Enemy} from "../GameObjects/Enemies/Enemy";
import {Tile} from "../GameObjects/Tiles/Tile";

export class Map {

    constructor(public image: HTMLImageElement,
                public tileWidthX: number, public tileWidthY: number,
                public sizeX: number, public sizeY: number,
                public tiles: Array<() => Tile> = [],
                public enemies: Array<() => Enemy> = []) {}

}
