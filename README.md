# WorkShop_7
WS7 Project - Moving Hearts

***

**Link = https://nech691.github.io/WorkShop_7/**

***

# Tasks

- Build a simulation of a real or imagined entity or environment.
- Experiment with random walks and/or particle systems in your sketch.

***

## Project

> Goal
>> Moving hearts lines from side to side 

- **Step-by-Step**
  - **Skateboard**
    1. One circle moving from side to side 
    2. One line of circles from side to side
    3. Three lines of circles moving from side to side
    4. Make a heart [separate file]
       - Chat GPT helped cause circles and triangles are not easily manipulatable
    5. Change circles into hearts 
    6. Make it pretty 
  - **Full version**
    - Three lines, each with 3 hearts 
    - Hearts with a different colours and low alpha values 
    - Hearts move from side to side within line (overlapping each other)
                
## Workshop Notes

- Introducing objects, specifically in the context of creating simulations.

  - **You can use objects to control graphics and create simulations on your canvas**
  - **Objects contain data (e.g., x and y coordinates) and can be use to wrap up your code to organise it**
    - Object-orientated programming 

  - **Working with objects** 
    1. First, we must declare the object (similar to how we declare variables, strings and arrays, but with small changes) like so 
       ```
       let ball = {
           X: 200,
           Y: 200
       }
       ```
    2. We can then use those objects inside a function (in this case, a function to move the ball)
       ```
       function move(){
           ball.x = // accessing the x pos inside the ball object // ball.x + random(-4, 4)  // setting a new random position // same for ball.y
       }
       ```
    3. We also need to create a function to display the object on canvas. 
       - In this case, we need a function that draws the initial ball on canvas
         ```
         function show(){
             fill(255, 255, 0);
             noStroke()
             ellipse(x, y, width of shape, height of shape)
         }
         ```
  - **Treating elements (in this case, the ball) as objects, makes it easier to add multiple of this object since they are an instance of a class (kind of a blueprint for certain types of objects)**
  - **We can use a class to define the object (in this case, the ball) using the following syntax {the underlined parts are changeable }**
    ```
    class name of class {
        Constructor(){
            this.x = 100;
            this.y = 100;
        }
        Your functions (no "function" needed, just the name)
        i.e., move(){
            this.x = this.x + random(-4, 4);
            this.y = this.y + random(-4, 4);
        }
        Show(){
            fill(255, 255, 0);
            noStroke();
            ellipse(this.x, this.y, 30, 30);
        }
    }
    ```
  - **In this case you can then remove the original functions and object**
    1. Instead declare the objects you want as variables 
       ```
       let ball1, ball2;
       ```
    2. Then set them up under the set up function
       ```
       ball1 = new Ball;
       Ball 2 = 2 new Ball
       ```
    3. Finally, switch the "move()" and "show()" on the draw function for "ball1.move()" and "ball1.show()" and the same with ball 2
  - **To make it so the balls don't move off canvas we can modify the ball class as such:**
    1. Add another function inside the Ball class to check if the objects (balls) have reached the edge of the canvas
       ```
       checkEdges(){
           If (this.x < 15)
           This.x = 15;
           Else if (this.x > width - 15){
           This.x = width - 15
       }
       ```
       And do the same for y 
    2. Then, call the checkEdges function to the canvas by adding "ball1.checkEdges()" and "ball2.checkEdges()"
    3. This allows us to call individual functions for different instances of an object on the draw function 
  - **Another way to work with the constructor inside a class**
    - It is not necessary to set the parameters of your object inside the class (this means all objects will start at the same coordinates). Instead we can pass arguments into the class (so that different objects can start at different positions)
    1. For example, to pass x and y values into the class we can set these parameters inside a function inside the constructor:
       - Include the parameters inside the constructor "()" and as the this parameters
         ```
         constructor(x, y){
             this.x = x;
             this.y = y;
         }
         ```
    2. Then, inside the set up function, with the setting of variables to call the Ball class 
       ```
       ball1 = new Ball(50, 50)
       Ball2 = new Ball(200, 300)
       ```
    3. You can also add a random() feature for a parameter (e.g., the size of the balls)
       1. To the constructor parenthesis "()" add another parameter (i.e., r), and a correspondent random value to this parameter (i.e., this.r = r)
       2. Then change the parameters inside the functions, to have this.r for the two size parameters of the show function:
          ```
          show(){
              Fill(255, 255, 0);
              noStroke();
              Ellipse(this.x, this.y, this.r, this.r);
          }
          ```
       3. Finally, add this third parameter to the set up function Balls (called classes)
          - You can add specific values or a randomising command
  - **! IMPORTANT ! Keep in mind that in the function set up you must call the class with the same amount of parameters as inside your constructive parenthesis**
  - **Adding a for loop to control and display the class system as a whole**
    1. Declare the objects as an empty array (instead of individually)
       ```
       let ballSystem = [];
       ```
    2. Inside setup add for loops to load these objects based on the class template 
       - Add a for loop to go over the ball system until 30 balls have been created:
         ```
         for (x = 0; x < 30; x++){}
         ```
       - Inside the "{}" create each of the objects (e.g., balls of random position and random size)
         ```
         let rx = random(15, width -15);
         Let ry = random(15, width - 15);
         Let rr = random(10, 50);
         ballSystem[x] = new Ball(rx, ry, rr);// ball system in the index we are using equals call cell //
         ```
    3. Then, to draw these balls to canvas, create another loop inside the draw function to and add the check edges function
       ```
       for (x = 0, x < ballSystem.length; x++){
           ballSystem[x].move();
           ballSystem[x].show();
           ballSystem[x].checkEdges;
       }
       ```

- **Working with random/drunken walks**
  1. Begin by declaring an empty array for your objects (walkers)
  2. Then create a new class (i.e., Walker) that takes x and y values and set the this values to x and y 
  3. After the construction blue print, add the first (step) function to move the objects one pixel at a time:
     ```
     this.x += random(-1, 1);
     This.y += random(-1, 1);
     ```
  4. Add the set up of these objects to the function setup 
     ```
     for (i = 0; i < 30; i++){
         let x = random(0, width);
         let y = random(0, height);
         Walkers[i] = new Walker(x, y);
     }
     ```
  5. Finally, add a loop to your draw function to draw the dots 

  6. You can also add extra values to be taken by the Walker function
     - For example, you can:
       - Add r, g, and b values to your constructor parenthesis, 
       - Refer back to them on the constructor's curly brackets, 
       - Then add these values to the set up of these objects in the setup function by declaring local variables and adding it to the create Walker values
