let c = document.getElementById("PewPew");
let ctx = c.getContext("2d");
let x = c.width/2;
let y = c.height-30;
let xprime = 200;
let yprime = 50;
let dx = 2;
let dy = -2;
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
let boulets = [];
var speedBoulet = 5;
let target1 = document.getElementById("target");
let target1X = Math.floor(Math.random() * c.width-100);
let target1Y = Math.floor(Math.random() *(c.height/2.5));
let targetHeight = 150;
let targetWidth = 150;
let buttonNewGame = document.getElementById("NewGame");
let buttonRestart = document.getElementById("Restart");
let buttonNewGame2 = document.getElementById("NewGame2");
let score = document.getElementById("score");
let spacePressed = false;


window.onload = function start() {
    document.getElementById("inst").style.display="";
    c.style.display = "none";
    buttonRestart.style.display="none";
    buttonNewGame2.style.display="none";
    score.style.display="none";
}
buttonNewGame.onclick = function play() {
    document.getElementById("inst").style.display="none";
    c.style.display="";
    buttonRestart.style.display="";
    buttonNewGame2.style.display="";
    score.style.display="";

}
buttonRestart.onclick = function restart(){
   window.location.reload();
}

//utilisation du bouton New Game ne fonctionne pas pour le moment
/*buttonNewGame2.onclick = function NewGame2() {
  drawTank();
  drawBoulet();
  drawTarget();
  
}*/

//quand le boulet touche la cible elle change de position le canon se replace et le score augmente
function TuchTarget(){

}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("space", keySpaceHandler, false )

// fonction pour activer les flèches gauche et droite du clavier
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
//fonction pour activer la barre d'espace du clavier
function keySpaceHandler(e) {
    if(e.keycode === 32) {
        spacePressed = true;
        console.log("shoot"); 
    }
      
}



// fonction pour positionner notre tank
function drawTank(){
    ctx.drawImage(canon1,canon1X,c.height-canonHeight-80,canonWidth,canonHeight);
}
//fonction pour positionner le boulet
 function drawBoulet(){
    ctx.drawImage(boulet1,bouletX,c.height-canonHeight-80,bouletWidth,bouletHeight);
 }
 //fonction pour positionner la cible de façon aléatoire
 function drawTarget(){
    ctx.drawImage(target1,target1X,target1Y,targetWidth,targetHeight); 
 }

 /* buttonRestart.onclick = function start() {
        document.getElementById("PewPew").style.display= "";
        drawTank();
        drawBoulet();
     
    }*/

    //fonction pour détecter que le bouleut à toucher la cible 
 function detectionCollision() {

 }

 //fonction pour faire tirer le boulet de canon en appuyant sur la barre d'espace
 /*function shootBoulet(x,y) {
    drawBoulet();
    drawTarget();
if (x <= yprime && xprime-40 <= x && xprime + 40 >= x) {
boulets = boulets.filter(values => {
    values.y !== y
})
xprime = Math.floor(Math.random() * ((c.width -100) - 100) + 100);
console.log("collision");
score++;
document.getElementById("score").innerHTML = score;
if (score === 10) {
    document.getElementById("win").innerHTML = "Félicitations! Vous avez gagné!";
    document.getElementById("NewGame2").style.display ="block";
}

}

 }*/
function draw(){

    ctx.clearRect(0, 0, c.width, c.height);
    drawTank();
    drawBoulet();
    drawTarget();
    /*shootBoulet();*/
    
 for (let i = 0; i < boulets.length; i++) {
     let boulet = boulets[i];
     boulet.y -= 25;
     fire(boulet.x, boulet.y);
     if(boulet.y >= 0) {
         fire(boulet.x, boulet.y);
     }
 }
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
/*RequestAnimationFrame(draw,10);*/

function drawTargetRandom(){
    ctx.clearRect(0, 0, c.width, c.height);
     drawTarget();

}