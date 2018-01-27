import {SpriteFrame} from "./SpriteFrame";

export class Sprite {
    constructor(public image: HTMLCanvasElement,
                public speed: number, public frames: SpriteFrame[]) {}
}
