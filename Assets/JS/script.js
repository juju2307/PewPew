let c = document.getElementById("PewPew");
let ctx = c.getContext("2d");
ctx.lineWidth = "5";
ctx.strokeStyle = "rgb(54, 95, 156)";
let x = c.width/2;
let y = c.height-30;
let dx = 2;
let dy = -2;
let canon1 = document.getElementById("canon");
let canonHeight = 200;
let canonWidth = 200;
let canon1X = (c.width-canonWidth) / 2;
let rightPressed = false;
let leftPressed = false;
/*let boulet1 = document.getElementById("boulet");
let bouletHeight = 40;
let bouletWidth = 40;*/
//let bouletCircle = {radius: bouletRadius, x: bouletX, y: bouletY};
let bouletX = c.width / 2;
let bouletY = c.height - canonHeight;
let bouletRadius = 10;
let boulets = [];
let target1 = document.getElementById("target");
let target1X = Math.floor(Math.random() * c.width-100);
let target1Y = Math.floor(Math.random() *(c.height/2.5));
//let targetRadius = 75;
let targetHeight = 150;
let targetWidth = 150;
//let target = {radius: targetRadius, x: target1X, y: target1Y};
//let distance = Math.sqrt(dx * dx + dy * dy);
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
buttonNewGame2.onclick = function NewGame2() {

     canon1X = (c.width-canonWidth) / 2;
     target1X = Math.floor(Math.random() * c.width-100);
     target1Y = Math.floor(Math.random() *(c.height/2.5));
  
}

// fonction pour positionner notre tank
function drawTank(){
    ctx.drawImage(canon1,canon1X,c.height-canonHeight-80,canonWidth,canonHeight);
}
//fonction pour positionner le boulet
 function drawBoulets() {

   if (spacePressed){
       ctx.beginPath();
       ctx.arc(bouletX,bouletY, bouletRadius,0, Math.PI*2);
       ctx.fillStyle = "#FFD700";
       ctx.fill();
       ctx.closePath();
     
     
    if(bouletY + dy < bouletRadius) {
        
        spacePressed= false;
        bouletY = c.height - canonHeight;
    }
    bouletY += dy;
 }
       
  }
 
 //fonction pour positionner la cible de façon aléatoire
 function drawTarget(){
    ctx.drawImage(target1,target1X,target1Y,targetWidth,targetHeight); 
 }


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// fonction pour activer les flèches gauche et droite du clavier et la barre d'espace
function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
     }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = true; 
            }
        else if(e.key == "Space" || e.key == " ") {
            spacePressed = true;
            bouletX = canon1X+97;
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
    //fonction pour détecter que le boulet à toucher la cible 

/*function touchTarget(){
 if(distance < boulet.radius + target.radius) {
    canon1X = (c.width-canonWidth) / 2;
    target1X = Math.floor(Math.random() * c.width-100);
    target1Y = Math.floor(Math.random() *(c.height/2.5));

 }
}*/


function draw(){

    ctx.clearRect(0, 0, c.width, c.height);
    drawTank();
    drawBoulets();
    drawTarget();

     if (rightPressed) {
       canon1X += 7;
      
       if (canon1X + canonWidth > c.width) {
           canon1X = c.width - canonWidth;
       }
   }
   else if (leftPressed) {
       canon1X -= 7;
      
       if (canon1X < 0) {
           canon1X = 0;
       }
   }
  
};
setInterval(draw, 10);



