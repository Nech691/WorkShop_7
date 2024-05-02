// declaring objects, variables, strings and arrays 
let ballSystem1 = [];
let ballSystem2 = [];
let ballSystem3 = [];

function setup() {
  createCanvas(400, 400);
  for (x = 0; x < 3; x++){
    let rx = random(15, width - 15); // -> Begining x position 
    ballSystem1[x] = new Ball(rx, 100, 40); // -> Set up first line 
    ballSystem2[x] = new Ball(rx, 200, 30); // -> Set up second line
    ballSystem3[x] = new Ball(rx, 300, 10); // Set up third line 
  }
}


function draw() {
  background(220);
  for (x = 0; x < ballSystem1.length; x++){ // -> 1st line's show, move and checkEdges
    ballSystem1[x].move();
    ballSystem1[x].show();
    ballSystem1[x].checkEdges();
  }

  for (x = 0; x < ballSystem2.length; x++){ // -> 2nd line's show, move and checkEdges
    ballSystem2[x].move();
    ballSystem2[x].show();
    ballSystem2[x].checkEdges();
  }

  for (x = 0; x < ballSystem3.length; x++){ // -> 3nd line's show, move and checkEdges
    ballSystem3[x].move();
    ballSystem3[x].show();
    ballSystem3[x].checkEdges();
  }
}

class Ball { // Creating a "Ball" class
  constructor(x, y, r){ // Setting up blue print 
    this.x = x; // Refering to current object (this instant in use)
    this.y = y; //     ""            ""             ""
    this.r = r; //     ""            ""             ""

  }
  move(){
    this.x = this.x + random(-4, 4); // Move x position randomly from -4 to 4
    this.y = this.y; // Move x position randomly from -4 to 4
  }

  show(){
    fill(255, 0, 0, 160); // ball colour 
    noStroke(); // ball w/o stroke 
    ellipse(this.x, this.y, this.r, this.r); // Make ball   
  }

  checkEdges(){ // function to check if balls have reached edge 
    if (this.x < 15){ //if ball is more than half way covered on the left 
      this.x = 15; // don't let it get past that 
    } else if (this.x > width - 15){ //if ball is more than half way covered on the right 
      this.x = width - 15 // don't let it get past that 
    }

    if (this.y < 15){ //if ball is more than half way covered on the tp 
      this.y = 15; // don't let it get past that 
    } else if (this.y > width - 15){ //if ball is more than half way covered on the bottom 
      this.y = width - 15 // don't let it get past that 
    }
  }
}
