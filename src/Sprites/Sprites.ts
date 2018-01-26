import {Sprite} from "./Sprite";
import {SpriteFrame} from "./SpriteFrame";

export class Sprites {

    public static greenLink: HTMLImageElement = Sprites.image("img/sprites/green_link.png");
    public static overworld: HTMLImageElement = Sprites.image("img/sprites/overworld.png");

    public static linkLeft = new Sprite(Sprites.greenLink, 3, [
        new SpriteFrame(0, 0, 15, 16),
        new SpriteFrame(15, 0, 15, 16),
    ]);
    public static linkDown = new Sprite(Sprites.greenLink, 3, [
        new SpriteFrame(30, 0, 15, 16),
        new SpriteFrame(45, 0, 15, 16),
    ]);
    public static linkUp = new Sprite(Sprites.greenLink, 3, [
        new SpriteFrame(59, 0, 15, 16),
        new SpriteFrame(74, 0, 15, 16),
    ]);
    public static linkRight = new Sprite(Sprites.greenLink, 3, [
        new SpriteFrame(88, 0, 15, 16),
        new SpriteFrame(103, 0, 15, 16),
    ]);


    public static bush = new Sprite(Sprites.overworld, 1, [new SpriteFrame(222, 171, 16, 16)]);

    private static image(imagePath: string): HTMLImageElement {
        const image = new Image();
        image.src = imagePath;
        return image;
    }

}
