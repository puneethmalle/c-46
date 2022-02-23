const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var zombieimg, zombie;
var bg,bgImg;
var engine;
var player, playerimg;
var playerGun, gunimg;
var playerBullets


function preload(){
zombieimg = loadAnimation("zombie1.png", "zombie2.png");
bgImg = loadImage("background.jpg");
playerimg = loadImage("player.png");
gunimg = loadImage("gun.png")


}

function setup(){


    createCanvas(1000,500)

    engine = Engine.create();
    world = engine.world;

    bg = createSprite(500,250);
       bg.addImage(bgImg);
       bg.scale =3.0;
player = createSprite(200,375);
player.addImage(playerimg);


    zombie = createSprite(800,375);
   zombie.addAnimation("zombie",zombieimg);

    playerGun = createSprite(player.x,player.y);
    playerGun.addImage(gunimg);
    player.scale = 0.01
    
}

function draw(){
    background(0);
    Engine.update(engine);
    drawSprites();
    rectMode(CENTER);
    
   
}
