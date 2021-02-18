/***********************************************************************************
	SimpleStateMachine - TEMPLATE
	by Scott Kildall

	Template:

	(1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
	(2) Add custom drawing code to drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
	(3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section

	Also start your localhost before running this, otherwise no PNGs will display

------------------------------------------------------------------------------------
	The way it works — you don't need to know this for the template use
	* array of images gets loaded at startup
	* drawFunction is a VARIABLE that points to a function varible name
	* drawOne(), drawTwo(), etc. are set to be functions.
	* the the keys 1-5 will change the drawFunction variable

------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing for each of
		images the draw functions, but this is just for illustrative purposes

	- even more advanced will be to put the draw functions into an array, would
		be helpful for randomizing, go to the next function, etc

	- next step after that would be to put interfaces into an array that maps to
		the functions


***********************************************************************************/

// Array of images
var images = [];
var instructions;

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 25;
var gHover = 0;
var hoverSpeed = .25;
var assets = ["first", "second", "third", "fourth", "fifth", "splash"]

// load all images into an array
function preload() {

  // changed loading images into a for loop
  for (var i = 0; i < assets.length; i++) {
    images[i] = loadImage('assets/' + assets[i] + '.png');
  }

  //load in text from file
  instructions = loadStrings("instructions.txt");
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = drawSplash;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(252, 186, 3);

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
   image(images[0],width/2, height/2);

   fill(0,0,0);
   text("Overwhelmed", width/2, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
   image(images[1],width/2, height/2);

   fill(240,120,0);
   text("\"Butter scrapped over too much bread.\"", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
   image(images[2],width/2, height/2);

   fill(189, 88, 11);
   text("Sleepy/Dreamy", width/2, height - gTextOffset);
}

//-- drawFour() will draw the image at index 3 from the array
drawFour = function() {
   image(images[3],width/2, height/2);

   fill(255,255,178);
   text("Cozy", width/2, height - gTextOffset);
}

//-- drawFive() will draw the image at index 4 from the array
drawFive = function() {
   image(images[4],width/2, height/2);

   fill(230,50,50);
   text("\"This is Fine\"", width/2, height - gTextOffset);
}

//-- drawSplash() will draw the image at index 5 from the array
drawSplash = function() {
   image(images[5],width/2, height/2);
   hoverText("Press any Key to Start", height);
}

//-- drawSplash() will draw the image at index 5 from the array
drawInstructions = function() {
   // for loop for all instructions
   for (var i = 0; i < instructions.length; i++) {
     if (i == 0) {
        textSize(34);
        hoverText("Instructions", height/4);
        textSize(24);
     } 
     else {
        textAlign(LEFT);
        text(i + '. ' + instructions[i], width/4, height/4 + (50  * i));
     }
   }
   textAlign(CENTER);
}

//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {

  if (drawFunction == drawSplash && keyIsPressed) {
    drawFunction = drawInstructions;
  }
  else if ( drawFunction == drawInstructions) {
    if (key == ' ') {
      drawFunction = drawOne;
    }
    return;
  }
  else if( key === '1' ) {
  	drawFunction = drawOne;
  }
  else if( key === '2' ) {
  	drawFunction = drawTwo;
  }
  else if( key === '3' ) {
  	drawFunction = drawThree;
  }
  else if( key === '4' ) {
  	drawFunction = drawFour;
  }
  else if( key === '5' ) {
  	drawFunction = drawFive;
  }
  else if( key === 's' ) {
    drawFunction = drawSplash;
  }

}

function hoverText(title, pos) {

  text(title, width/2, pos - gTextOffset + gHover);

  gHover = gHover + hoverSpeed;

  if (gHover > 10 || gHover < -10) {
    hoverSpeed = hoverSpeed * -1;
  }

}
