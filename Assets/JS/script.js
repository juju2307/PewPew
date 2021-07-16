let c = document.getElementById("PewPew");
let ctx = c.getContext("2d");
var x = c.width/2;
var y = c.height-30;
var dx = 2;
var dy = -2;
let canon1 = document.getElementById("canon");
let canonHeight = 200;
let canonWidth = 200;
let canon1X = (c.width-canonWidth) / 2;
let rightPressed = false;
let leftPressed = false;
let boulet1 = document.getElementById("boulet");
let bouletHeight = 40;
let bouletWidth = 40;
let bouletX = (c.width-bouletWidth) / 2;
let target1 = document.getElementById("target");
let target1X = Math.floor(Math.random() * c.width-100);
let target1Y = Math.floor(Math.random() *(c.height/2.5));
let targetHeight = 150;
let targetWidth = 150;
let buttonNewGame = document.getElementById("NewGame");
let buttonRestart = document.getElementById("Restart");
let buttonNewGame2 = document.getElementById("NewGame2");
let score = 0;


window.onload = function start() {
    document.getElementById("inst").style.display="";
    c.style.display = "none";
    buttonRestart.style.display="none";
    buttonNewGame2.style.display="none";
}
buttonNewGame.onclick = function play() {
    document.getElementById("inst").style.display="none";
    c.style.display="";
    buttonRestart.style.display="";
    buttonNewGame2.style.display="";

}
buttonRestart.onclick = function restart(){
   document.getElementById("inst").style.display="";
   c.style.display="none";
   buttonRestart.style.display="none";
   buttonNewGame2.style.display="none";

}
//utilisation du bouton New Game ne fonctionne pas pour le moment
buttonNewGame2.onclick = function NewGame2() {
    document.getElementById("inst").style.display="none";
    c.style.display="";
    buttonRestart.style.display="";
    buttonNewGame2.style.display="";
    drawTank();
    drawBoulet();
    drawTarget();
    score = 0;
}

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
    ctx.drawImage(canon1,canon1X,c.height-canonHeight-80,canonWidth,canonHeight);
}
 function drawBoulet(){
    ctx.drawImage(boulet1,bouletX,c.height-canonHeight-80,bouletWidth,bouletHeight);
 }
 function drawTarget(){
    ctx.drawImage(target1,target1X,target1Y,targetWidth,targetHeight); 
 }

 /* buttonRestart.onclick = function start() {
        document.getElementById("PewPew").style.display= "";
        drawTank();
        drawBoulet();
     
    }*/

function draw(){

    ctx.clearRect(0, 0, c.width, c.height);
    drawTank();
    drawBoulet();
    drawTarget();

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

function drawTargetRandom(){
    ctx.clearRect(0, 0, c.width, c.height);
     drawTarget();

}