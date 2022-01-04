const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
export default class Bomb{
    constructor(x, y, game){
        //x, y is the previous bomb location, 
        //wont change until the second bomb set
        this.x = x;
        this.y = y;
        this.game = game;
        this.width= 16;
        this.height= 18;
        this.sourceX= 0;
        this.sourceY= 162;
        this.src= 'src/assets/enemies.png';   
        this.timer = 5;
        this.fire = {}
       
    }
   

    dropBomb() {
        const bombSprite = new Image();
        bombSprite.addEventListener('load', () => ctx.drawImage(bombSprite,
            this.sourceX, this.sourceY,
            this.width, this.height,
            this.x, this.y, this.width * 2, this.height * 2))
        bombSprite.src = this.src;
        //16*18 => 32*36 when rendered

       
    }

 
    fire(){
        if(this.timer === 0){
            //fire animation here 
            this.timer = 5;
        }
    }

    

    fireZone(){
        //calculate the file zone 

    }
}