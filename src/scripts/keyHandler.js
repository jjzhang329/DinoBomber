

export default class KeyHandler {
    constructor(player){
        this.player = player;
        this.keys = [];
        
        window.addEventListener("keydown", (e)=>{
            this.keys[e.code] = true;
            this.player.moving = true;
        })
        window.addEventListener("keyup", (e) => {
            delete this.keys[e.code];
            this.player.moving = false;
      
        })

      
    }
}