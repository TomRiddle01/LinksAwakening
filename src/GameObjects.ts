export class GameObject {
    x: number = 0;
    y: number = 0;
    sprite: string;
}

export class Enemy extends GameObject{

}

export class Player extends GameObject {
    buttonUp = false;
    buttonDown = false;
    buttonLeft = false;
    buttonRight = false;
    speed = 10;

    tick(delta:number) {
        if(this.buttonUp)
            this.y += this.speed*delta;
        if(this.buttonDown)
            this.y -= this.speed*delta;
        if(this.buttonRight)
            this.x += this.speed*delta;
        if(this.buttonLeft)
            this.x -= this.speed*delta;

    }
}

