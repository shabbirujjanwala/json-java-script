var ball={
  x : 20,
  y: 30,
  r:30,
  xs:0,
  ys:0,
  color:["blue","yellow","white","green"]

}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r);
  fill (ball.color[3]);
  ball.xs=1;
  ball.x=ball.x+ball.xs;


}