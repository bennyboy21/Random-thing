var a1;
var a2;
var a3;
var a4;
var a5;
var a;

function preload() {
  a1 = loadImage("Player  1.PNG")
  a2 = loadImage("Player  2.PNG")
  a3 = loadImage("Player  3.PNG")
  a4 = loadImage("Player  4.PNG")
  a5 = loadImage("Player  5.PNG")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(a > 0 && a < 99){
    image(a1, 100, 100)
  }
  
  
  if(a > 100 && a < 199){
    image(a2, 100, 100)
  }
  
  
  if(a > 200 && a < 299){
    image(a3, 100, 100)
  }
  
  
  if(a > 300 && a < 399){
    image(a4, 100, 100)
  }
  
  
  if(a > 400 && a < 499){
    image(a4, 100, 100)
  }
  
  
  if(a > 500 && a < 599){
    image(a5, 100, 100)
  }
  
  if(key === ' ') {
   a += 1 
  }
}