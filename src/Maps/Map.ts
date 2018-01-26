import {Tile} from "../GameObjects/Tile";

export class Map {

    constructor(public image: HTMLImageElement,
                public tileWidthX: number, public tileWidthY: number,
                public sizeX: number, public sizeY: number,
                public tiles: Array<() => Tile>) {}

}
