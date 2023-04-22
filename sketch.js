function setup() {
  createCanvas(800, 800);
  background(220);
}

function draw() {
  fill(255,255,255);
  ellipse(400,400,700,700);
  
  h=hour();
  m=minute();
  s=second();
  print(h,m,s);
  
  my_rect(400,400,330,3,s,color(255,0,0));
  my_rect(400,400,290,5,m,color(255,255,0));
  my_rect(400,400,230,7,h,color(0,255,255));
  ellipse(400,400,20,20);
}

function my_rect(x,y,w,h,d,c) {
  push();
  fill(c);
  translate(x,y);
  rotate(radians(d));
  rect(0,-h/2,w,h);
  pop();
}