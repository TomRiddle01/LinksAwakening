import {SpriteFrame} from "./SpriteFrame";

export class Sprite {
    constructor(public image: HTMLImageElement,
                public speed: number, public frames: SpriteFrame[],
                public gameSizeX = 1, public gameSizeY = 1) {}
}