import {GameObject} from "./GameObjects/GameObjects";
import {MapInstance} from "./GameObjects/MapInstance";
import {Player} from "./GameObjects/Player";
import {GameState} from "./GameState";
import {Maps} from "./Maps/Maps";
import {Sprite} from "./Sprites/Sprite";
import {Sprites} from "./Sprites/Sprites";

export class Game {

    private eventQueue: Event[] = [];
    constructor(private state: GameState) {
        this.setEventListener();
    }

    public setEventListener() {
        ["keydown", "keyup"].forEach((eventName) => {
            window.addEventListener(eventName, (e) => {
                if (e instanceof Event) {
                    this.eventQueue.push(e);
                }
            });
        });
    }

    public tick(delta: number) {
        // create player if none exists

        if (this.state.map === undefined) {
            this.state.map = new MapInstance(Maps.city);
        }

        if (this.state.player === undefined) {
            this.state.player = new Player();
            this.state.player.posX = 18;
            this.state.player.posY = 15;
        }

        this.handleEvents();

        // ticks
        this.state.player.tick(delta, this.state);

        // collision detection
        this.handleCollisions(this.state.player, this.state.map.tiles);

        return this.state;
    }

    public handleCollisions(player: Player, objects: GameObject[]) {
        player.pushing = false;

        objects.forEach((object) => {

            if (object.playerCollision &&
                player.posX + player.gameSizeX > object.posX &&
                player.posX < object.posX + object.gameSizeX &&
                player.posY + player.gameSizeY > object.posY &&
                player.posY < object.posY + object.gameSizeY) {

                const distX1 = object.posX - (player.posX + player.gameSizeX);
                const distX2 = (object.posX + object.gameSizeX) - player.posX;
                const distY1 = object.posY - (player.posY + player.gameSizeY);
                const distY2 = (object.posY + object.gameSizeY) - player.posY;

                const minX = Math.min(Math.abs(distX1), Math.abs(distX2));
                const minY = Math.min(Math.abs(distY1), Math.abs(distY2));
                if (minX < minY) {
                    if (Math.abs(distX1) < Math.abs(distX2)) {
                        player.posX += distX1;
                    } else {
                        player.posX += distX2;
                    }
                } else {
                    if (Math.abs(distY1) < Math.abs(distY2)) {
                        player.posY += distY1;
                    } else {
                        player.posY += distY2;
                    }
                }

                player.pushing = true;
            }
        });
    }

    public handleEvents() {
        while (this.eventQueue.length > 0) {
            const e = this.eventQueue.shift();

            if (e instanceof KeyboardEvent) {
                switch (e.keyCode) {
                    case 38: { this.state.player.buttonUp = e.type === "keydown"; break; }
                    case 40: { this.state.player.buttonDown = e.type === "keydown"; break; }
                    case 37: { this.state.player.buttonLeft = e.type === "keydown"; break; }
                    case 39: { this.state.player.buttonRight = e.type === "keydown"; break; }
                    case 32: { this.state.player.space = e.type === "keydown"; break; }
                    case 80: { this.state.player.buttonP = e.type === "keydown"; break; }
                }
            }
        }
    }
}
