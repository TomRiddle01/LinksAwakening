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

        this.state.map.staticTiles.forEach((tile) => {
            tile.tick(delta, this.state);
        });
        this.state.map.staticTiles = this.state.map.staticTiles.filter((tile) => !tile.isTileDead());

        this.state.map.dynamicObjects.forEach((tile) => {
            tile.tick(delta, this.state);
        });
        this.state.map.dynamicObjects = this.state.map.dynamicObjects.filter((tile) => !tile.isTileDead());

        // collision detection
        this.handlePlayerCollisions(this.state.player, this.state.map.staticTiles);
        this.handleCollisions(this.state.map.dynamicObjects, this.state.map.staticTiles);

        return this.state;
    }

    public handleCollisions(objects: GameObject[], objects2: GameObject[]) {
        objects.forEach((object) => {
            objects2.forEach((object2) => {
                if (this.collide(object, object2)) {
                    object.collisionWith(object2);
                    object2.collisionWith(object);
                }
            });
        });

    }

    public handlePlayerCollisions(player: Player, objects: GameObject[]) {
        player.pushing = false;
        objects.forEach((object) => {

            if (object.playerCollision && this.collide(player, object)) {

                const distX1 = object.posX - (player.posX + player.gameSizeX);
                const distX2 = (object.posX + object.gameSizeX) - player.posX;
                const distY1 = object.posY - (player.posY + player.gameSizeY);
                const distY2 = (object.posY + object.gameSizeY) - player.posY;

                const minX = Math.min(Math.abs(distX1), Math.abs(distX2));
                const minY = Math.min(Math.abs(distY1), Math.abs(distY2));
                if (minX <= minY) {
                    player.posX += Math.abs(distX1) < Math.abs(distX2) ? distX1 : distX2;
                } else {
                    player.posY += Math.abs(distY1) < Math.abs(distY2) ? distY1 : distY2;
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
                    case 79: { this.state.player.buttonO = e.type === "keydown"; break; }
                    case 80: { this.state.player.buttonP = e.type === "keydown"; break; }
                }
            }
        }
    }

    private collide(object: GameObject, object2: GameObject): boolean {

        if (object.posX + object.gameSizeX > object2.posX &&
            object.posX < object2.posX + object2.gameSizeX &&
            object.posY + object.gameSizeY > object2.posY &&
            object.posY < object2.posY + object2.gameSizeY) {
            return true;
        } else { return false; }
    }
}
