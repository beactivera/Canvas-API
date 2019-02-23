// variables for canvases
let canvasOne = document.getElementById("canvasOne");
let canvasTwo = document.getElementById("canvasTwo");
let canvasThree = document.getElementById("canvasThree");
let canvasFour = document.getElementById("canvasFour");
let canvasFive = document.getElementById("canvasFive");
let canvasSix = document.getElementById("canvasSix");
let canvasSeven = document.getElementById("canvasSeven");

window.addEventListener("load", renderCanvases);

function renderCanvases() {
  drawInCanvasOne();
  drawInCanvasTwo();
  drawInCanvasThree();
  drawInCanvasFour();
  drawInCanvasFive();
  drawInCanvasSix();
  drawInCanvasSeven();
}

// rectangle
function drawInCanvasOne() {
  let ctx1 = canvasOne.getContext("2d");
  //   fillRect(x, y, width, height)  - draws a filled rectangle.
  //   strokeRect(x, y, width, height) - draws a rectangular outline.
  //   clearRect(x, y, width, height) - clears the specified rectangular area, making it fully transparent.
  ctx1.fillRect(25, 25, 100, 100);
  ctx1.fillRect(150, 150, 100, 100);
  ctx1.fillRect(300, 25, 100, 100);
  ctx1.clearRect(50, 50, 50, 50);
  ctx1.clearRect(160, 160, 25, 25);
  ctx1.clearRect(180, 190, 20, 80);
  ctx1.clearRect(200, 160, 25, 25);
  ctx1.clearRect(310, 50, 50, 50);
  ctx1.strokeRect(30, 150, 50, 50);
  ctx1.strokeRect(150, 30, 50, 50);
  ctx1.strokeRect(300, 220, 50, 50);
}

// paths    1.create path - 2.draw - 3.stroke/render to fill
// triangles
function drawInCanvasTwo() {
  let ctx2 = canvasTwo.getContext("2d");
  ctx2.beginPath();
  ctx2.moveTo(75, 50);
  ctx2.lineTo(200, 275);
  ctx2.lineTo(100, 25);
  ctx2.fill();

  ctx2.beginPath();
  ctx2.moveTo(120, 25);
  ctx2.lineTo(200, 145);
  ctx2.lineTo(300, 85);
  ctx2.fill();
}

// arc
// arc(x, y, radius, startAngle, endAngle, anticlockwise) -- Draws an arc which is centered at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction indicated by anticlockwise (defaulting to clockwise).
// The anticlockwise parameter is a Boolean value which, when true, draws the arc anticlockwise; otherwise, the arc is drawn clockwise.

// arcTo(x1, y1, x2, y2, radius) - Draws an arc with the given control points and radius, connected to the previous point by a straight line.

//converting degrees to radians : radians = (Math.PI/180)*degrees
function drawInCanvasThree() {
  let ctx3 = canvasThree.getContext("2d");
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx3.beginPath();
      let x = 25 + j * 50; // x coordinate
      let y = 25 + i * 50; // y coordinate
      let radius = 20; // Arc radius
      let startAngle = 0; // Starting point on circle
      let endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
      let anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

      ctx3.arc(x, y, radius, startAngle, endAngle, anticlockwise);

      if (i > 1) {
        ctx3.fill();
      } else {
        ctx3.stroke();
      }
    }
  }
}

// fillStyle / strokeStyle
function drawInCanvasFour() {
  let ctx4 = canvasFour.getContext("2d");
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx4.fillStyle =
        "rgb(" +
        Math.floor(255 - 42.5 * i) +
        ", " +
        Math.floor(255 - 42.5 * j) +
        ", 0)";
      ctx4.fillRect(10 + j * 25, 10 + i * 25, 50, 50);
    }
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      ctx4.strokeStyle =
        "rgb(0, " +
        Math.floor(255 - 42.5 * i) +
        ", " +
        Math.floor(255 - 42.5 * j) +
        ")";
      ctx4.beginPath();
      ctx4.arc(250 + j * 25, 25 + i * 25, 10, 0, Math.PI * 2, true);
      ctx4.stroke();
    }
  }
}
// additionally, gradients :
// createLinearGradient(x1, y1, x2, y2) --- Creates a linear gradient object with a starting point of (x1, y1) and an end point of (x2, y2).
// createRadialGradient(x1, y1, r1, x2, y2, r2) ---Creates a radial gradient. The parameters represent two circles, one with its center at (x1, y1) and a radius of r1, and the other with its center at (x2, y2) with a radius of r2.
//gradient.addColorStop(position, color) --- Creates a new color stop on the gradient object. The position is a number between 0.0 and 1.0 and defines the relative position of the color in the gradient, and the color argument must be a string representing a CSS <color>, indicating the color the gradient should reach at that offset into the transition.




// lines
// lineWidth = value  -- Sets the width of lines drawn in the future.
// lineCap = type -- Sets the appearance of the ends of lines.
// lineJoin = type -- Sets the appearance of the "corners" where lines meet.
// miterLimit = value -- Establishes a limit on the miter when two lines join at a sharp angle, to let you control how thick the junction becomes.
// getLineDash() -- Returns the current line dash pattern array containing an even number of non-negative numbers.
// setLineDash(segments) -- Sets the current line dash pattern.
// lineDashOffset = value -- Specifies where to start a dash array on a line.
function drawInCanvasFive() {
  let ctx5 = canvasFive.getContext("2d");
  // lineWidth
  for (let i = 0; i < 10; i++) {
    ctx5.lineWidth = 1 + i;
    ctx5.beginPath();
    ctx5.moveTo(5 + i * 14, 5);
    ctx5.lineTo(5 + i * 14, 140);
    ctx5.stroke();
  }
}

// image from scratch
// let img = new Image();   // Create new img element
//img.addEventListener('load', function() {
    // execute drawImage statements here
//  }, false);
//  img.src = 'myImage.png'; // Set source path

// drawing images 
// drawImage(image, x, y) --- Draws the CanvasImageSource specified by the image parameter at the coordinates (x, y).
function drawInCanvasSix() {
  let ctx6 = canvasSix.getContext("2d");
  let img = new Image();
  img.onload = function() {
    ctx6.drawImage(img, 0, 0);
    ctx6.beginPath();
    ctx6.moveTo(30, 96);
    ctx6.lineTo(70, 66);
    ctx6.lineTo(103, 76);
    ctx6.lineTo(170, 15);
    ctx6.stroke();
  };
  img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
}


// scaling images
// drawImage(image, x, y, width, height) --This adds the width and height parameters, which indicate the size to which to scale the image when drawing it onto the canvas.
function drawInCanvasSeven() {
  let ctx7 = canvasSeven.getContext("2d");
  let img = new Image();
  img.onload = function() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx7.drawImage(img, j * 50, i * 38, 50, 38);
      }
    }
  };
  img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
}


//  slicing 
//  drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
//  Given an image, this function takes the area of the source image specified by the rectangle whose top-left corner is (sx, sy) and whose width and height are sWidth and sHeight and draws it into the canvas, placing it on the canvas at (dx, dy) and scaling it to the size specified by dWidth and dHeight.
