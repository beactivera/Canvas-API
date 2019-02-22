// load html document and display canvas

window.addEventListener('load', renderCanvas)


function renderCanvas(){
// rendering context
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
console.log(ctx);
}