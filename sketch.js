// declaring what needs to be declared (objects, variables, strings and arrays)
let heartLine1 = [];
let heartLine2 = [];
let heartLine3 = [];

function setup() {
  createCanvas(400, 400);
  for (x = 0; x < 3; x++){
    let rx = random(15, width - 15); // -> Begining x position 
    heartLine1[x] = new Heart(rx, 100, 40); // -> Set up first line 
    heartLine2[x] = new Heart(rx, 200, 30); // -> Set up second line
    heartLine3[x] = new Heart(rx, 300, 10); // Set up third line 
  }
}


function draw() {
  background(220);
  for (x = 0; x < heartLine1.length; x++){ // -> 1st line's show, move and checkEdges
    heartLine1[x].move();
    heartLine1[x].show();
    heartLine1[x].checkEdges();
  }

  for (x = 0; x < heartLine2.length; x++){ // -> 2nd line's show, move and checkEdges
    heartLine2[x].move();
    heartLine2[x].show();
    heartLine2[x].checkEdges();
  }

  for (x = 0; x < heartLine3.length; x++){ // -> 3nd line's show, move and checkEdges
    heartLine3[x].move();
    heartLine3[x].show();
    heartLine3[x].checkEdges();
  }
}

class Heart { // Creating a "Heart" class
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
    fill(255, 0, 0, 160); // Heart colour 
    noStroke(); // Heart w/o stroke 
    heartShape(this.x, this.y, this.r); // Draw heart shape
  }

  checkEdges(){ // function to check if heart have reached edge 
    if (this.x < 15){ //if heart is more than half way covered on the left 
      this.x = 15; // don't let it get past that 
    } else if (this.x > width - 15){ //if heart is more than half way covered on the right 
      this.x = width - 15 // don't let it get past that 
    }

    if (this.y < 15){ //if heart is more than half way covered on the tp 
      this.y = 15; // don't let it get past that 
    } else if (this.y > width - 15){ //if heart is more than half way covered on the bottom 
      this.y = width - 15 // don't let it get past that 
    }
  }
}

// -> Function for drawing heart shapes 
// - Made with the help of ChatGPT
function heartShape(x, y, r) {
  beginShape(); // - Initiate shape making
  // - Make a series of Bezier curves to make up a heart 
  vertex(x, y + r / 2);
  bezierVertex(x, y - r / 2, x + r, y - r / 2, x + r, y + r / 2);
  bezierVertex(x + r, y + r, x, y + 2 * r, x, y + 2 * r);
  bezierVertex(x, y + 2 * r, x - r, y + r, x - r, y + r / 2);
  bezierVertex(x - r, y - r / 2, x, y - r / 2, x, y + r / 2);
  endShape(CLOSE); // - End shape making 
}