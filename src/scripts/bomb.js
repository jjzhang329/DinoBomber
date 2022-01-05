const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
export default class Bomb{
    constructor(x, y, game){
        //x, y is the previous bomb location when space pressed
        this.x = x;
        this.y = y;
        this.game = game;
        this.width= 16;
        this.height= 18;
        this.sourceX= 0;
        this.sourceY= 162;
        this.src= 'src/assets/enemies.png';   
        this.timer =30;
        this.blast = {top:0, down:0, left:0, right:0,}
       
    }
   

    // dropBomb() {
    //     const bombSprite = new Image();
    //     bombSprite.addEventListener('load', () => ctx.drawImage(bombSprite,
    //         this.sourceX, this.sourceY,
    //         this.width, this.height,
    //         this.x, this.y, this.width * 2, this.height * 2))
    //     bombSprite.src = this.src;
    //     // this.game.dino.bomb.shift();
    //     //16*18 => 32*36 when rendered

       
    // }

    static dropBomb(bomb){
        console.log(bomb)
        const bombSprite = new Image();
        bombSprite.addEventListener('load', () => ctx.drawImage(bombSprite,
            bomb.sourceX, bomb.sourceY,
            bomb.width,bomb.height,
            bomb.x, bomb.y, bomb.width * 2, bomb.height * 2))
        bombSprite.src = 'src/assets/enemies.png';

    }
    

 
    blast(){
        if(this.timer === 0){
            //fire animation here 
            this.timer = 5;
        }
    }

    

    fireZone(){
        //calculate the file zone 

    }
}