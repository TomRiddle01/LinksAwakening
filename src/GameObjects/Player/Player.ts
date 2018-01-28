import {GameState} from "../../GameState";
import {Sprites} from "../../Sprites/Sprites";
import {AttackAnimation} from "./AttackAnimation";
import {DamageHitBox} from "../Misc/DamageHitBox";
import {Direction} from "../Misc/Direction";
import {EditorTile} from "../Tiles/EditorTile";
import {GameObject} from "../GameObjects";

export class Player extends GameObject {
    public buttonUp = false;
    public buttonDown = false;
    public buttonLeft = false;
    public buttonRight = false;
    public space = false;
    public direction = Direction.DOWN;
    public pushing = false;
    public buttonP: boolean;
    public buttonO: boolean;
    public attacking: AttackAnimation;
    public walking: boolean;

    public tick(delta: number, gameState: GameState) {
        this.moving = false;

        this.walking = false;
        if (!this.attacking) {
            if (this.buttonUp) {
                this.posY -= this.speed * delta;
                this.moving = true;
                this.walking = true;
                if (!this.pushing) { this.direction = Direction.UP; }
            }
            if (this.buttonDown) {
                this.posY += this.speed * delta;
                this.moving = true;
                this.walking = true;
                if (!this.pushing) { this.direction = Direction.DOWN; }
            }
            if (this.buttonRight) {
                this.posX += this.speed * delta;
                this.moving = true;
                this.walking = true;
                if (!this.pushing) { this.direction = Direction.RIGHT; }
            }
            if (this.buttonLeft) {
                this.posX -= this.speed * delta;
                this.moving = true;
                this.walking = true;
                if (!this.pushing) { this.direction = Direction.LEFT; }
            }
        }

        if (this.space && !this.attacking) {
            let box: DamageHitBox;

            switch (this.direction) {
                case Direction.LEFT:
                    box = new DamageHitBox(this.tileX() - 1, this.tileY());
                    break;
                case Direction.RIGHT:
                    box = new DamageHitBox(this.tileX() + 1, this.tileY());
                    break;
                case Direction.UP:
                    box = new DamageHitBox(this.tileX(), this.tileY() - 1);
                    break;
                case Direction.DOWN:
                    box = new DamageHitBox(this.tileX(), this.tileY() + 1);
                    break;
            }
            this.attacking = new AttackAnimation(this);
            this.attacking.restart();

            box.die(this.attacking.sprite.getDuration());
            console.log(box.tileX(), box.tileY());
            gameState.map.dynamicObjects.push(box);

        }

        if (this.attacking !== undefined) {
            this.attacking.tick(delta);
            if (this.attacking.hasAnimationStopped()) {
                this.attacking = undefined;
            }
        }

        if (this.attacking === undefined) {
            if (this.pushing) {
                switch (this.direction) {
                    case Direction.LEFT:
                        this.setSprite(Sprites.linkPushingLeft);
                        break;
                    case Direction.RIGHT:
                        this.setSprite(Sprites.linkPushingRight);
                        break;
                    case Direction.UP:
                        this.setSprite(Sprites.linkPushingUp);
                        break;
                    case Direction.DOWN:
                        this.setSprite(Sprites.linkPushingDown);
                        break;
                }
            } else if (this.walking) {
                switch (this.direction) {
                    case Direction.LEFT:
                        this.setSprite(Sprites.linkWalkingLeft);
                        break;
                    case Direction.RIGHT:
                        this.setSprite(Sprites.linkWalkingRight);
                        break;
                    case Direction.UP:
                        this.setSprite(Sprites.linkWalkingUp);
                        break;
                    case Direction.DOWN:
                        this.setSprite(Sprites.linkWalkingDown);
                        break;
                }
            } else {
                switch (this.direction) {
                    case Direction.LEFT:
                        this.setSprite(Sprites.linkLeft);
                        break;
                    case Direction.RIGHT:
                        this.setSprite(Sprites.linkRight);
                        break;
                    case Direction.UP:
                        this.setSprite(Sprites.linkUp);
                        break;
                    case Direction.DOWN:
                        this.setSprite(Sprites.linkDown);
                        break;
                }
            }
        }
        // editor stuff

        if (this.buttonO) {
            if (!gameState.map.staticTiles.some((tile) => tile.samePos(this))) {
                gameState.map.staticTiles.push(new EditorTile(Sprites.placeholder, this.tileX(), this.tileY()));
            }
        }
        if (this.buttonP) {
            const output = document.getElementById("output");
            gameState.map.staticTiles.filter((tile) => tile instanceof EditorTile).forEach((tile) => {
                output.innerText += tile.tileX() + ", " + tile.tileY() + "\n";
            });
        }

        this.previousSprite = this.sprite;
    }
}
