import {SpriteFrame} from "./SpriteFrame";

export class Sprite {
    constructor(public image: HTMLCanvasElement,
                public speed: number, public frames: SpriteFrame[], public loop = true) {

    }

    public getDuration(): number {
        return this.frames.length / this.speed;
    }
}
