let c = document.getElementById("PewPew");
let ctx = c.getContext("2d");
var x = c.width/2;
var y = c.height-30;
var dx = 2;
var dy = -2;
let canon1 = document.getElementById("canon");
let canonHeight = 250;
let canonWidth = 250;
let canon1X = (c.width-canonWidth) / 2;
let rightPressed = false;
let leftPressed = false;
let boulet1 = document.getElementById("boulet");
let bouletHeight = 50;
let bouletWidth = 50;
let bouletX = (c.width-bouletWidth) / 2;
/*let target1 = document.getElementById("target");*/
let buttonNewGame = document.getElementById("NewGame");
let buttonRestart = document.getElementById("Restart");


document.addEventListener("keydown", keyDownHandler, false);
document/addEventListener("keyup", keyUpHandler, false);



function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}
function keyUpHandler(e){
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function drawTank(){
    ctx.drawImage(canon1,canon1X,c.height-canonHeight,canonWidth,canonHeight);
}
 function drawBoulet(){
    ctx.drawImage(boulet1,bouletX,c.height-canonHeight,bouletWidth,bouletHeight);
 }
 function drawTarget(){
    ctx.drawImage(target1,100,100,100,100); 
 }



function draw(){

    ctx.clearRect(0, 0, c.width, c.height);
   drawTank();
   /*drawTarget();*/
   drawBoulet();
   if (rightPressed) {
       canon1X += 7;
       bouletX += 7;
       if (canon1X + canonWidth > c.width) {
           canon1X = c.width - canonWidth;
       }
   }
   else if (leftPressed) {
       canon1X -= 7;
       bouletX -= 7;
       if (canon1X < 0) {
           canon1X = 0;
       }
   }
    x += dx;
    y += dy;
}
setInterval(draw, 10);