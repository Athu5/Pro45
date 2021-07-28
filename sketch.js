var database;
var form,player,game;
var gameState =0;
var playerCount;
var allPlayers;
var distance = 0;

var bg, bgImg;

var b1Img,b2Img;

var bike1,bike2,bikes;

function preload(){
b1Img = loadImage("b4.png");
b2Img = loadImage("b5.png");
bgImg = loadImage("track.jpg");
}

function setup(){
    createCanvas(displayWidth,displayHeight);

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    }

function draw(){
    background("white");

   if(playerCount === 2){
       game.update(1);
   }
   if(gameState === 1){
       clear();
       game.play();
   }
}
