// variables for canvases
let canvasOne = document.getElementById("canvasOne");
let canvasTwo = document.getElementById("canvasTwo");
let canvasThree = document.getElementById("canvasThree");
let canvasFour = document.getElementById("canvasFour");
let canvasFive = document.getElementById("canvasFive");
let canvasSix = document.getElementById("canvasSix");
let canvasSeven = document.getElementById("canvasSeven");
let canvasEight = document.getElementById("canvasEight");

window.addEventListener("load", renderCanvases);

function renderCanvases() {
  drawInCanvasOne();
  drawInCanvasTwo();
  drawInCanvasThree();
  drawInCanvasFour();
  drawInCanvasFive();
  drawInCanvasSix();
  drawInCanvasSeven();
  drawInCanvasEight();
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
  ctx1.strokeRect(30,150,50,50);
  ctx1.strokeRect(150,30,50,50);
  ctx1.strokeRect(300,220,50,50);

  
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

// fillStyle
function drawInCanvasFour() {
  let ctx4 = canvasFour.getContext("2d");
  for (let i=0; i<6; i++){
      for(let j=0; j<6; j++){
        ctx4.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' + Math.floor(255 - 42.5 * j) + ', 0)';
        ctx4.fillRect(10 + j * 25, 10+ i * 25, 50, 50);
            }
          }

}


// strokeStyle
function drawInCanvasFive() {
  let ctx5 = canvasFive.getContext("2d");
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      ctx5.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + 
                       Math.floor(255 - 42.5 * j) + ')';
      ctx5.beginPath();
      ctx5.arc(20 + j * 25, 20 + i * 25, 10, 0, Math.PI * 2, true);
      ctx5.stroke();
    }
  }
}

function drawInCanvasSix() {
  let ctx6 = canvasSix.getContext("2d");
}

function drawInCanvasSeven() {
  let ctx7 = canvasSeven.getContext("2d");
}

function drawInCanvasEight() {
  let ctx8 = canvasEight.getContext("2d");
}
