let balls = [];
function setup() {
    let cnv = createCanvas(windowWidth, 300);
    cnv.parent("canvasContainer")

  // frameRate(1);
    // background(10, 100, 190);

}

function draw() {
  background(10, 100, 190);
  
  if(mouseIsPressed == true){
    let b = new Ball(mouseX, mouseY);
  balls.push(b);
  }
  
  for(let i = 0; i < balls.length; i++){
    balls[i].update();
    balls[i].checkYPos();
    balls[i].display();
  }
  // console.log(balls)

  // LIMIT size of the array to a fixed number:
  // careful with while loops, they might crash you 
  // sketch
  // while(balls.length >= 300){
  //   balls.splice(0, 1);   
  // }
  
  // delete any circle that is above the line
  // any circle whose isAboveLine property is TRUE
  for(let i = balls.length-1; i >= 0 ; i--){
    if(balls[i].isAboveLine == true){
      balls.splice(i, 1);
    }
  }
  
  
  line(0, 50, width, 50);
  
}

class Ball{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.dia = random(20, 90);
    this.isAboveLine = false;
  }
  update(){ 
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 1);
    
  }
  checkYPos(){
    if(this.y < 50){
      this.isAboveLine = true;
    }
  }
  display(){
    push();
    translate(this.x, this.y);
    noStroke();
    fill(255, 30)
    circle(0, 0, this.dia);
    fill(0)
    text(this.isAboveLine, 0, 0)
    pop();
  }
}


// function mousePressed(){
//   let b = new Ball(mouseX, mouseY);
//   balls.push(b);
// }