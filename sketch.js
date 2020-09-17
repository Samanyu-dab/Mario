var mario1,mario2,mario3,mario4,mario5,mario6,mario7,enemy1,enemy112,mario,mario12
var coin1,coin2,coin3,coin4,coin5
var block1,block2,block3
var cloud1,cloud2,mountain1,mountain2,mountain3,mountain4
var platform,tube

function preload(){
mario12=loadAnimation("imgs/mario/mario01.png","imgs/mario/mario02.png","imgs/mario/mario03.png")
enemy1=loadImage("imgs/enemy/enemyMushroom01.png")
coin1=loadImage("imgs/blocks/coin01.png")
coin2=loadImage("imgs/blocks/coin02.png")
coin3=loadImage("imgs/blocks/coin03.png")
coin4=loadImage("imgs/blocks/coin04.png")
coin5=loadImage("imgs/blocks/coin05.png")
block1=loadImage("imgs/blocks/blocks001.png")
block2=loadImage("imgs/blocks/blocks002.png")
block3=loadImage("imgs/blocks/blocks003.png")
cloud1=loadImage("imgs/scene/cloud01.png")
cloud2=loadImage("imgs/scene/cloud02.png")
mountain1=loadImage("imgs/scene/mountains01.png")
mountain2=loadImage("imgs/scene/mountains02.png")
mountain3=loadImage("imgs/scene/mountains03.png")
mountain4=loadImage("imgs/scene/mountains04.png")
platform=loadImage("imgs/scene/platform.png")
tube=loadImage("imgs/scene/tube.png")
}

function setup ()
{
    canvas=createCanvas(400,400)
mario12=createSprite(100,100,200,200)
mario12.addAnimation(mario)
mario12.scale=4
enemy112=createSprite(50,50,200,200)
enemy112.addImage("enemy",enemy1)

}

function draw(){
background(platform)
    drawSprites()
}