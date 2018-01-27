import {Sprite} from "../Sprites/Sprite";
import {Sprites} from "../Sprites/Sprites";
import {Direction} from "./Direction";
import {Player} from "./Player";

export class AttackAnimation {

    public lifetime = 0;
    public sprite: Sprite;

    constructor(public player: Player) {
        switch (player.direction) {
            case Direction.LEFT:
                this.sprite = Sprites.linkSwordAttackLeft;
                break;
            case Direction.RIGHT:
                this.sprite = Sprites.linkSwordAttackRight;
                break;
            case Direction.UP:
                this.sprite = Sprites.linkSwordAttackUp;
                break;
            case Direction.DOWN:
                this.sprite = Sprites.linkSwordAttackDown;
                break;
        }
        player.setSprite(this.sprite);
    }

    public tick(delta: number) {
        this.lifetime += delta;
    }

    public hasAnimationStopped(): boolean {
        return this.sprite.getDuration() <= this.lifetime;
    }

    public restart() {
        this.lifetime = 0;
        this.player.spriteLifetime = 0;
    }
}
