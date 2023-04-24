
//level1 
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.stroke();
}
canvas.addEventListener('mousemove', function(event) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  drawCircle(x, y);
});
//level2
canvas.addEventListener('mousemove', function(event) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
   drawLines();

  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  drawCircle(x, y);
  if (x < canvas.width / 2) {
    drawCircle(canvas.width - x, y);
  } else {
    drawCircle(canvas.width - x, y);
  }
});

function drawLines() {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
 
  ctx.stroke();
}

// draw the fixed lines for the first time
drawLines();

//level3

// event listener for mousemove
canvas.addEventListener('mousemove', function(event) {

ctx.clearRect(0, 0, canvas.width, canvas.height);
drawLines();
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  drawCircle(x, y);
  if (x < canvas.width / 2 && y < canvas.height / 2) {
    drawCircle(canvas.width - x, y);
    drawCircle(x, canvas.height - y);
    drawCircle(canvas.width - x, canvas.height - y);
  } else if (x < canvas.width / 2 && y >= canvas.height / 2) {
    drawCircle(canvas.width - x, y);
    drawCircle(x, y - canvas.height / 2);
    drawCircle(canvas.width - x, y - canvas.height / 2);
  } else if (x >= canvas.width / 2 && y < canvas.height / 2) {
    drawCircle(x - canvas.width / 2, y);
    drawCircle(x - canvas.width / 2, canvas.height - y);
    drawCircle(x, canvas.height - y);
  } else {
    drawCircle(x - canvas.width / 2, y - canvas.height / 2);
    drawCircle(x - canvas.width / 2, y);
    drawCircle(x, y - canvas.height / 2);
  }
})
// function to draw circle


// function to draw fixed lines dividing the canvas
function drawLines() {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();
}

// draw the fixed lines for the first time
drawLines();
