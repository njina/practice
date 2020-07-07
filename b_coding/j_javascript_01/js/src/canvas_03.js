// canvas_03.js

var canvas = document.getElementsByClassName('paper')[0];
// var canvas = document.querySelector('.paper');

var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(400, 400, 300, 0, Math.PI*2, true);

// ctx.moveTo(550,400);
ctx.arc(400, 400, 250, 0, Math.PI*2, true);

ctx.closePath();
ctx.stroke();

// -----
ctx.beginPath();

ctx.fillStyle = "#aad";
ctx.strokeStyle = "#aad";
ctx.lineWidth = "10";
//입
ctx.arc(400, 400, 200, 0, Math.PI*1, false);
ctx.stroke();
//왼쪽눈
ctx.beginPath();
ctx.strokeStyle = "#af8";
ctx.arc(280, 320, 50, 0, Math.PI*2, true);
ctx.closePath();
ctx.stroke();
ctx.fill();
//오른쪽눈
ctx.beginPath();
ctx.arc(520, 320, 50, 0, Math.PI*2, true);
ctx.closePath();
ctx.stroke();