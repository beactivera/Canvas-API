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

function drawInCanvasTwo() {
  let ctx2 = canvasTwo.getContext("2d");
}

function drawInCanvasThree() {
  let ctx3 = canvasThree.getContext("2d");
}

function drawInCanvasFour() {
  let ctx4 = canvasFour.getContext("2d");
}

function drawInCanvasFive() {
  let ctx5 = canvasFive.getContext("2d");
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
