import {Sprite} from "./Sprite";
import {SpriteFrame} from "./SpriteFrame";

export class Sprites {

    public static greenLink = Sprites.image("img/sprites/green_link.png");
    public static overworld = Sprites.image("img/sprites/overworld.png");
    public static leavesMap = Sprites.image("img/sprites/leaves.png");

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
    public static linkPushingLeft = new Sprite(Sprites.greenLink, 3, [
        new SpriteFrame(15, 21, 16, 16),
        new SpriteFrame(31, 21, 16, 16),
    ]);
    public static linkPushingDown = new Sprite(Sprites.greenLink, 3, [
        new SpriteFrame(50, 21, 15, 16),
        new SpriteFrame(65, 21, 15, 16),
    ]);
    public static linkPushingUp = new Sprite(Sprites.greenLink, 3, [
        new SpriteFrame(82, 21, 15, 16),
        new SpriteFrame(99, 21, 15, 16),
    ]);
    public static linkPushingRight = new Sprite(Sprites.greenLink, 3, [
        new SpriteFrame(116, 21, 15, 16),
        new SpriteFrame(132, 21, 15, 16),
    ]);

    public static linkSwordAttackLeft = new Sprite(Sprites.greenLink, 18, [
        new SpriteFrame(191, 100, 16, 32, 0, -1, 1, 2),
        new SpriteFrame(155, 100, 32, 32, -1, -1,  2, 2),
        new SpriteFrame(125, 116, 32, 16, -1, 0,  2, 1),
    ], false);
    public static linkSwordAttackUp = new Sprite(Sprites.greenLink, 18, [
        new SpriteFrame(177, 139, 32, 32, 0, -1, 2, 2),
        new SpriteFrame(146, 139, 32, 32, 0, -1,  2, 2),
        new SpriteFrame(124, 139, 16, 32, 0, -1,  1, 2),
    ], false);
    public static linkSwordAttackDown = new Sprite(Sprites.greenLink, 18, [
        new SpriteFrame(26, 139, 32, 16, -1, 0,  2, 1),
        new SpriteFrame(64, 139, 32, 32, -1, 0,  2, 2),
        new SpriteFrame(97, 139, 16, 32, 0, 0, 1, 2),
    ], false);
    public static linkSwordAttackRight = new Sprite(Sprites.greenLink, 18, [
        new SpriteFrame(36, 100, 16, 32, 0, -1,  1, 2),
        new SpriteFrame(57, 100, 32, 32, 0, -1,  2, 2),
        new SpriteFrame(88, 116,  32, 16, 0,  0,  2, 1),
    ], false);

    public static placeholder = new Sprite(Sprites.overworld, 1, [new SpriteFrame(307, 103, 16, 16)]);
    public static invisible = new Sprite(Sprites.overworld, 1, [new SpriteFrame(223, 222, 16, 16)]);
    public static grass = new Sprite(Sprites.overworld, 1, [new SpriteFrame(222, 171, 16, 16)]);

    public static leaves = new Sprite(Sprites.leavesMap, 12, [
        new SpriteFrame(0, 0,   32, 32, -0.5, -0.5, 2, 2),
        new SpriteFrame(32, 0,  32, 32, -0.5, -0.5, 2, 2),
        new SpriteFrame(64, 0,  32, 32, -0.5, -0.5, 2, 2),
        new SpriteFrame(96, 0,  32, 32, -0.5, -0.5, 2, 2),
        new SpriteFrame(128, 0,  32, 32, -0.5, -0.5, 2, 2),
        new SpriteFrame(160, 0,  32, 32, -0.5, -0.5, 2, 2),
        new SpriteFrame(192, 0,  32, 32, -0.5, -0.5, 2, 2),
    ], false);

    private static image(imagePath: string): HTMLCanvasElement {
        const tmpCanvas = document.createElement("canvas");
        const tmpCtx = tmpCanvas.getContext("2d");
        const img = document.createElement("img");

        img.onload = () => {
            tmpCanvas.width = img.width;
            tmpCanvas.height = img.height;
            tmpCtx.drawImage(img, 0, 0, img.width, img.height);
        };
        img.src = imagePath;
        return tmpCanvas;
    }

}
