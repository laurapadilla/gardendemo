const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const w = window.innerWidth;
const h = window.innerHeight;
const dpi = window.devicePixelRatio;

canvas.width = w * dpi;
canvas.height = h * dpi;
canvas.style.width = w + "px";
canvas.style.height = h + "px";

// which context are we talking about? 2d? 3d? something else?

ctx.scale(dpi, dpi);
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 30;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 30 || ctx.lineWidth <= 10) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
