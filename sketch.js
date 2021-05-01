

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);  
  translate(200,200);
  rotate(-90);
  var h = hour();
  var m = minute();
  var s = second();
  sAngle = map(s,0,60,0,360);
  mAngle = map(m,0,60,0,360);
  hAngle = map(h % 12,0,12,0,360)
  
  push()
  rotate(hAngle);
  stroke(255,0,0);
  strokeWeight(7);
  var h = line(0,0,50,0);
  pop();

 push()
  rotate(mAngle);
  stroke(0,255,0);
  strokeWeight(7);
  var m = line(0,0,100,0); 
  pop();
  
  push()
  rotate(sAngle);
  stroke(0,0,255);
  strokeWeight(7);
  var s = line(0,0,150,0);
  pop();
  
  stroke(255,0,255);
  point(0,0);


  drawSprites();
}
