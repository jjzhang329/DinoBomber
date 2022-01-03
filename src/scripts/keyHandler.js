

export default class KeyHandler {
    constructor(player){
        this.player = player;
        this.keys = [];
        window.addEventListener("keydown", (e)=>{
            this.keys[e.key] = true;
           
            this.player.moving = true;
        })
        window.addEventListener("keyup", (e) => {
            delete this.keys[e.key];
            this.player.moving = false;
      
        })
    }
}