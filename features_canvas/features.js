'use strict'
let can1 = document.getElementById('canvas1');
let can2 = document.getElementById('canvas2');
let can3 = document.getElementById('canvas3');

window.addEventListener('load', init)

function init(){
    drawCan1();
    drawCan2();
    drawCan3();
}

// save() - Saves the entire state of the canvas.
// restore() - Restores the most recently saved canvas state.
function drawCan1(){
  let ctx = can1.getContext('2d');
  ctx.fillRect(0, 0, 150, 150);   // Draw a rectangle with default settings
  ctx.save();                  // Save the default state
 
  ctx.fillStyle = '#893029';      // Make changes to the settings
  ctx.fillRect(15, 15, 120, 120); // Draw a rectangle with new settings

  ctx.save();                  // Save the current state
  ctx.fillStyle = '#909090';      // Make changes to the settings
  ctx.globalAlpha = 0.5; 
  ctx.fillRect(30, 30, 90, 90);   // Draw a rectangle with new settings

  ctx.restore();               // Restore previous state
  ctx.fillRect(45, 45, 60, 60);   // Draw a rectangle with restored settings

  ctx.restore();               // Restore original state
  ctx.fillRect(60, 60, 30, 30);   // Draw a rectangle with restored settings
}