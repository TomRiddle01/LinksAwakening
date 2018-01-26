import {GameState} from "./GameState";
import {Player} from "./GameObjects";

export class Game {

    private eventQueue : Event[] = [];
    constructor(private state: GameState){
        this.setEventListener();
    }

    setEventListener(){
        ['keydown', 'keyup'].forEach(eventName => {
            window.addEventListener(eventName, e => {
                if(e instanceof Event){
                    this.eventQueue.push(e);
                }
            });
        });
    }

    tick(delta:number){
        // create player if none exists
        if(this.state.player == undefined){
            this.state.player = new Player();
        }
        this.handleEvents();

        this.state.player.tick(delta);

        return this.state
    }

    handleEvents(){
        while(this.eventQueue.length > 0){
            let e = this.eventQueue.shift();

            if(e instanceof KeyboardEvent){
                switch(e.keyCode){
                    case 38: { this.state.player.buttonUp = e.type == "keydown"; break; }
                    case 40: { this.state.player.buttonDown = e.type == "keydown"; break; }
                    case 37: { this.state.player.buttonLeft = e.type == "keydown"; break; }
                    case 39: { this.state.player.buttonRight = e.type == "keydown"; break; }
                }
                console.log(e.keyCode);
            }
        }
    }
}
