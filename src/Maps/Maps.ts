import {Grass} from "../GameObjects/Grass";
import {InvisibleTile} from "../GameObjects/InvisibleTile";
import {StaticTile} from "../GameObjects/StaticTile";
import {Tile} from "../GameObjects/Tile";
import {Sprite} from "../Sprites/Sprite";
import {Sprites} from "../Sprites/Sprites";
import {Map} from "./Map";

export class Maps {

    public static imgCocolinth: HTMLImageElement = Maps.image("img/cocolinth.png");
    public static imgCity: HTMLImageElement = Maps.image("img/city.png");

    public static cocolinth = new Map(Maps.imgCocolinth, 16, 16, 160, 128, []);

    public static city = new Map(Maps.imgCity, 16, 16, 32, 22, [

        () => new Grass(23, 8),
        () => new Grass(23, 9),
        () => new Grass(23, 10),
        () => new Grass(23, 11),
        () => new Grass(23, 12),

        () => new Grass(24, 8),
        () => new Grass(24, 9),
        () => new Grass(24, 10),
        () => new Grass(24, 11),
        () => new Grass(24, 12),

        () => new Grass(25, 8),
        () => new Grass(25, 9),
        () => new Grass(25, 10),
        () => new Grass(25, 11),
        () => new Grass(25, 12),

        () => new Grass(26, 8),
        () => new Grass(26, 9),
        () => new Grass(26, 10),
        () => new Grass(26, 11),
        () => new Grass(26, 12),

        () => new Grass(27, 8),
        () => new Grass(27, 9),
        () => new Grass(27, 10),
        () => new Grass(27, 11),
        () => new Grass(27, 12),

        () => new Grass(28, 8),
        () => new Grass(28, 9),
        () => new Grass(28, 10),
        () => new Grass(28, 11),
        () => new Grass(28, 12),

        () => new InvisibleTile(0, 6   ),
        () => new InvisibleTile(5, 10   ),
        () => new InvisibleTile(0, 5   ),
        () => new InvisibleTile(0, 4   ),
        () => new InvisibleTile(0, 3   ),
        () => new InvisibleTile(0, 2   ),
        () => new InvisibleTile(0, 1   ),
        () => new InvisibleTile(0, 0   ),
        () => new InvisibleTile(1, 0   ),
        () => new InvisibleTile(1, 1   ),
        () => new InvisibleTile(1, 2   ),
        () => new InvisibleTile(1, 3   ),
        () => new InvisibleTile(1, 4   ),
        () => new InvisibleTile(1, 5   ),
        () => new InvisibleTile(1, 6   ),
        () => new InvisibleTile(2, 6   ),
        () => new InvisibleTile(3, 6   ),
        () => new InvisibleTile(4, 6   ),
        () => new InvisibleTile(4, 5   ),
        () => new InvisibleTile(3, 5   ),
        () => new InvisibleTile(2, 5   ),
        () => new InvisibleTile(3, 7   ),
        () => new InvisibleTile(3, 8   ),
        () => new InvisibleTile(3, 9   ),
        () => new InvisibleTile(4, 9   ),
        () => new InvisibleTile(5, 9   ),
        () => new InvisibleTile(6, 9   ),
        () => new InvisibleTile(6, 8   ),
        () => new InvisibleTile(5, 8   ),
        () => new InvisibleTile(4, 8   ),
        () => new InvisibleTile(4, 7   ),
        () => new InvisibleTile(5, 7   ),
        () => new InvisibleTile(6, 3   ),
        () => new InvisibleTile(7, 3   ),
        () => new InvisibleTile(7, 2   ),
        () => new InvisibleTile(6, 2   ),
        () => new InvisibleTile(4, 1   ),
        () => new InvisibleTile(4, 0   ),
        () => new InvisibleTile(3, 0   ),
        () => new InvisibleTile(3, 1   ),
        () => new InvisibleTile(10, 0  ),
        () => new InvisibleTile(10, 1  ),
        () => new InvisibleTile(10, 2  ),
        () => new InvisibleTile(10, 3  ),
        () => new InvisibleTile(10, 4  ),
        () => new InvisibleTile(10, 5  ),
        () => new InvisibleTile(10, 6  ),
        () => new InvisibleTile(9, 6   ),
        () => new InvisibleTile(8, 6   ),
        () => new InvisibleTile(8, 5   ),
        () => new InvisibleTile(9, 5   ),
        () => new InvisibleTile(9, 4   ),
        () => new InvisibleTile(11, 4  ),
        () => new InvisibleTile(11, 5  ),
        () => new InvisibleTile(11, 6  ),
        () => new InvisibleTile(11, 3  ),
        () => new InvisibleTile(11, 2  ),
        () => new InvisibleTile(11, 1  ),
        () => new InvisibleTile(11, 0  ),
        () => new InvisibleTile(16, 1  ),
        () => new InvisibleTile(16, 2  ),
        () => new InvisibleTile(23, 1  ),
        () => new InvisibleTile(23, 2  ),
        () => new InvisibleTile(23, 3  ),
        () => new InvisibleTile(24, 3  ),
        () => new InvisibleTile(25, 3  ),
        () => new InvisibleTile(26, 3  ),
        () => new InvisibleTile(27, 3  ),
        () => new InvisibleTile(27, 2  ),
        () => new InvisibleTile(27, 1  ),
        () => new InvisibleTile(26, 1  ),
        () => new InvisibleTile(25, 1  ),
        () => new InvisibleTile(24, 1  ),
        () => new InvisibleTile(24, 2  ),
        () => new InvisibleTile(25, 2  ),
        () => new InvisibleTile(26, 2  ),
        () => new InvisibleTile(26, 0  ),
        () => new InvisibleTile(25, 0  ),
        () => new InvisibleTile(24, 0  ),
        () => new InvisibleTile(30, 1  ),
        () => new InvisibleTile(30, 2  ),
        () => new InvisibleTile(30, 3  ),
        () => new InvisibleTile(30, 4  ),
        () => new InvisibleTile(30, 5  ),
        () => new InvisibleTile(30, 6  ),
        () => new InvisibleTile(30, 7  ),
        () => new InvisibleTile(30, 8  ),
        () => new InvisibleTile(30, 9  ),
        () => new InvisibleTile(30, 10 ),
        () => new InvisibleTile(30, 11 ),
        () => new InvisibleTile(30, 12 ),
        () => new InvisibleTile(30, 13 ),
        () => new InvisibleTile(30, 14 ),
        () => new InvisibleTile(30, 15 ),
        () => new InvisibleTile(29, 15 ),
        () => new InvisibleTile(29, 16 ),
        () => new InvisibleTile(29, 17 ),
        () => new InvisibleTile(29, 18 ),
        () => new InvisibleTile(29, 19 ),
        () => new InvisibleTile(29, 20 ),
        () => new InvisibleTile(29, 21 ),
        () => new InvisibleTile(30, 21 ),
        () => new InvisibleTile(30, 20 ),
        () => new InvisibleTile(30, 19 ),
        () => new InvisibleTile(30, 18 ),
        () => new InvisibleTile(30, 17 ),
        () => new InvisibleTile(30, 16 ),
        () => new InvisibleTile(31, 16 ),
        () => new InvisibleTile(31, 17 ),
        () => new InvisibleTile(31, 18 ),
        () => new InvisibleTile(31, 19 ),
        () => new InvisibleTile(31, 20 ),
        () => new InvisibleTile(31, 21 ),
        () => new InvisibleTile(31, 15 ),
        () => new InvisibleTile(31, 14 ),
        () => new InvisibleTile(31, 13 ),
        () => new InvisibleTile(31, 12 ),
        () => new InvisibleTile(31, 11 ),
        () => new InvisibleTile(31, 10 ),
        () => new InvisibleTile(31, 9  ),
        () => new InvisibleTile(31, 8  ),
        () => new InvisibleTile(31, 7  ),
        () => new InvisibleTile(31, 6  ),
        () => new InvisibleTile(31, 5  ),
        () => new InvisibleTile(31, 4  ),
        () => new InvisibleTile(31, 3  ),
        () => new InvisibleTile(31, 2  ),
        () => new InvisibleTile(31, 1  ),
        () => new InvisibleTile(28, 16 ),
        () => new InvisibleTile(28, 17 ),
        () => new InvisibleTile(28, 18 ),
        () => new InvisibleTile(28, 19 ),
        () => new InvisibleTile(28, 20 ),
        () => new InvisibleTile(27, 20 ),
        () => new InvisibleTile(28, 21 ),
        () => new InvisibleTile(27, 21 ),
        () => new InvisibleTile(26, 21 ),
        () => new InvisibleTile(25, 21 ),
        () => new InvisibleTile(25, 20 ),
        () => new InvisibleTile(26, 20 ),
        () => new InvisibleTile(24, 19 ),
        () => new InvisibleTile(24, 18 ),
        () => new InvisibleTile(24, 17 ),
        () => new InvisibleTile(24, 16 ),
        () => new InvisibleTile(25, 16 ),
        () => new InvisibleTile(25, 15 ),
        () => new InvisibleTile(26, 15 ),
        () => new InvisibleTile(27, 15 ),
        () => new InvisibleTile(27, 16 ),
        () => new InvisibleTile(26, 16 ),
        () => new InvisibleTile(26, 17 ),
        () => new InvisibleTile(25, 17 ),
        () => new InvisibleTile(25, 18 ),
        () => new InvisibleTile(26, 18 ),
        () => new InvisibleTile(27, 18 ),
        () => new InvisibleTile(27, 17 ),
        () => new InvisibleTile(24, 21 ),
        () => new InvisibleTile(23, 21 ),
        () => new InvisibleTile(22, 21 ),
        () => new InvisibleTile(21, 21 ),
        () => new InvisibleTile(20, 21 ),
        () => new InvisibleTile(19, 21 ),
        () => new InvisibleTile(18, 21 ),
        () => new InvisibleTile(17, 21 ),
        () => new InvisibleTile(16, 21 ),
        () => new InvisibleTile(15, 21 ),
        () => new InvisibleTile(14, 21 ),
        () => new InvisibleTile(13, 21 ),
        () => new InvisibleTile(12, 21 ),
        () => new InvisibleTile(11, 21 ),
        () => new InvisibleTile(10, 21 ),
        () => new InvisibleTile(9, 21  ),
        () => new InvisibleTile(8, 21  ),
        () => new InvisibleTile(7, 21  ),
        () => new InvisibleTile(6, 21  ),
        () => new InvisibleTile(5, 21  ),
        () => new InvisibleTile(4, 21  ),
        () => new InvisibleTile(3, 21  ),
        () => new InvisibleTile(2, 21  ),
        () => new InvisibleTile(1, 21  ),
        () => new InvisibleTile(0, 21  ),
        () => new InvisibleTile(0, 20  ),
        () => new InvisibleTile(1, 20  ),
        () => new InvisibleTile(2, 20  ),
        () => new InvisibleTile(0, 19  ),
        () => new InvisibleTile(1, 19  ),
        () => new InvisibleTile(1, 18  ),
        () => new InvisibleTile(1, 17  ),
        () => new InvisibleTile(1, 16  ),
        () => new InvisibleTile(1, 15  ),
        () => new InvisibleTile(1, 14  ),
        () => new InvisibleTile(1, 13  ),
        () => new InvisibleTile(0, 13  ),
        () => new InvisibleTile(0, 14  ),
        () => new InvisibleTile(0, 15  ),
        () => new InvisibleTile(0, 16  ),
        () => new InvisibleTile(0, 17  ),
        () => new InvisibleTile(0, 18  ),
        () => new InvisibleTile(2, 17  ),
        () => new InvisibleTile(2, 16  ),
        () => new InvisibleTile(3, 16  ),
        () => new InvisibleTile(4, 16  ),
        () => new InvisibleTile(5, 16  ),
        () => new InvisibleTile(6, 16  ),
        () => new InvisibleTile(7, 16  ),
        () => new InvisibleTile(8, 16  ),
        () => new InvisibleTile(8, 17  ),
        () => new InvisibleTile(8, 19  ),
        () => new InvisibleTile(6, 19  ),
        () => new InvisibleTile(5, 19  ),
        () => new InvisibleTile(4, 19  ),
        () => new InvisibleTile(4, 18  ),
        () => new InvisibleTile(5, 18  ),
        () => new InvisibleTile(5, 17  ),
        () => new InvisibleTile(6, 17  ),
        () => new InvisibleTile(6, 18  ),
        () => new InvisibleTile(4, 17  ),
        () => new InvisibleTile(15, 17 ),
        () => new InvisibleTile(16, 17 ),
        () => new InvisibleTile(17, 17 ),
        () => new InvisibleTile(17, 18 ),
        () => new InvisibleTile(16, 18 ),
        () => new InvisibleTile(15, 18 ),
        () => new InvisibleTile(15, 12 ),
        () => new InvisibleTile(14, 12 ),
        () => new InvisibleTile(13, 12 ),
        () => new InvisibleTile(13, 11 ),
        () => new InvisibleTile(13, 10 ),
        () => new InvisibleTile(13, 9  ),
        () => new InvisibleTile(13, 8  ),
        () => new InvisibleTile(13, 7  ),
        () => new InvisibleTile(14, 7  ),
        () => new InvisibleTile(15, 7  ),
        () => new InvisibleTile(16, 7  ),
        () => new InvisibleTile(17, 7  ),
        () => new InvisibleTile(18, 7  ),
        () => new InvisibleTile(19, 7  ),
        () => new InvisibleTile(19, 8  ),
        () => new InvisibleTile(18, 8  ),
        () => new InvisibleTile(18, 9  ),
        () => new InvisibleTile(19, 9  ),
        () => new InvisibleTile(19, 10 ),
        () => new InvisibleTile(19, 11 ),
        () => new InvisibleTile(19, 12 ),
        () => new InvisibleTile(18, 12 ),
        () => new InvisibleTile(17, 12 ),
        () => new InvisibleTile(17, 10 ),
        () => new InvisibleTile(17, 9 ),
        () => new InvisibleTile(16, 10 ),
        () => new InvisibleTile(15, 10 ),
        () => new InvisibleTile(15, 9  ),
        () => new InvisibleTile(16, 9  ),
        () => new InvisibleTile(7, 9  ),
    ]);

    private static image(imagePath: string): HTMLImageElement {
        const image = new Image();
        image.src = imagePath;
        return image;
    }

}
