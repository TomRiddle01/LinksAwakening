import {Map} from "./Map";

export class Maps {

    public static imgCocolinth: HTMLImageElement = Maps.image("img/cocolinth.png");
    public static imgCity: HTMLImageElement = Maps.image("img/city.png");

    public static cocolinth = new Map(Maps.imgCocolinth, 16, 16, 160, 128);
    public static city = new Map(Maps.imgCity, 16, 16, 32, 22);

    private static image(imagePath: string): HTMLImageElement {
        const image = new Image();
        image.src = imagePath;
        return image;
    }

}
