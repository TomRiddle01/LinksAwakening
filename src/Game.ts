import {Enemy} from "./GameObjects/Enemies/Enemy";
import {GameObject} from "./GameObjects/GameObjects";
import {Player} from "./GameObjects/Player/Player";
import {GameState} from "./GameState";
import {MapInstance} from "./Maps/MapInstance";
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

        this.state.map.staticTiles.forEach((tile) => { tile.tick(delta, this.state); });
        this.state.map.staticTiles = this.state.map.staticTiles.filter((tile) => !tile.isTileDead());

        this.state.map.dynamicObjects.forEach((tile) => { tile.tick(delta, this.state); });
        this.state.map.dynamicObjects = this.state.map.dynamicObjects.filter((tile) => !tile.isTileDead());

        this.state.map.enemies.forEach((enemy) => { enemy.tick(delta, this.state); });
        this.state.map.enemies = this.state.map.enemies.filter((enemy) => !enemy.isTileDead());

        // collision detection
        this.handleCollisions([this.state.player], this.state.map.staticTiles);
        this.handleCollisions(this.state.map.dynamicObjects, this.state.map.staticTiles);
        this.handleCollisions(this.state.map.enemies, this.state.map.staticTiles);

        return this.state;
    }

    public handleCollisions(objects: GameObject[], objects2: GameObject[]) {

        objects.forEach((object) => {
            object.pushing = false;
            objects2.forEach((object2) => {
                if (this.collide(object, object2)) {
                    object.collisionWith(object2);
                    object2.collisionWith(object);
                    if (object2.npcCollision) {
                        this.pushbackFrom(object, object2);
                        object.pushing = true;
                    }
                }
            });
        });

    }

    public handlePlayerCollisions(player: Player, objects: GameObject[]) {
        objects.forEach((object) => {

            if (object.npcCollision && this.collide(player, object)) {
                this.pushbackFrom(player, object);
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

    private pushbackFrom(player: GameObject, object: GameObject) {
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
