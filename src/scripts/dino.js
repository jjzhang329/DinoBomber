const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const dinoSprite = new Image();
dinoSprite.src = "src/assets/DinoSheet.png";
canvas.width = 800;
canvas.height = 500;

class Dino{
    constructor(ctx){
        this.x = 0;
        this.y = 460;
        this.width = 64;
        this.height = 64;
        this.frameX = canvas.width - this.width;
        this.frameY = canvas.height - this.height;
        this.move = 10;
       this.draw(ctx)
        
    }

    draw(ctx) {

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        dinoSprite.onload = () => {
            ctx.drawImage(dinoSprite, 64, 0, 32,
                32, this.frameX, this.frameY, this.width, this.height)
        }

    }

  

    

    

//    move(){
//        //if up key is pressed
//        if(keys[38]){
//            this.y -= this.move;
//        }
//    }

}
const keys = [];
window.addEventListener('keydown', function (e) {
    keys[e.keycode] = true;
    console.log(e.keycode)
})
window.addEventListener('keyup', function (e) {
    delete keys[e.keycode];
})




module.exports= Dino;