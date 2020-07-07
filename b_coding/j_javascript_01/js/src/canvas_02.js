// canvas_02.js

//es5 버전
// var canvas = document.getElementsByClassName('paper')[0]; 
//es6버전
var canvas = document.querySelector('.paper'); 

var ctx = canvas.getContext('2d');

//(사각형을 제외한)선을 그릴때는 선의 시작이라는 표기를 먼저 해야한다.

ctx.beginPath(); //최초의 시작(이제 시작하겠다)

ctx.moveTo(200,200); //시작점 위치를 잡는다.
//선택자.lineTo(x,y)
ctx.lineTo(400,400); //중간 지점 위치
ctx.lineTo(300,500); //끝나는 위치
ctx.lineTo(700,500); //끝나는 위치
// ctx.lineTo(200,200); //끝 위치를 잡는다.
ctx.closePath(); // 닫힌 도형 만들기

ctx.fillStyle = "#ffd";
ctx.strokeStyle  = "#fa0";
ctx.lineWidth = 20;

// 선 모서리 마감 모양
// miter(기본값) | round | bebel 
ctx.lineJoin = 'round';

// 선 끝 모양 
// butt(기본값) | round | square
ctx.lineCap = 'square';

ctx.stroke(); //선 색 채우기
ctx.fill(); //면 색 채우기

//---------
//새로운 도형 만들기
ctx.beginPath(); //이거 안 쓰면 위의 색,선 색이 한꺼번에 먹는다.

ctx.moveTo(700,700);
ctx.lineTo(500,400);
ctx.lineTo(600,400);

ctx.fillStyle = "#323";

ctx.fill();

// ----------
ctx.beginPath();
ctx.strokeStyle = "#1fa";

var i = 0;
ctx.moveTo(100,100);
// setInterval(
// 	function(){
// 		i+=10;
// 		ctx.lineTo(100,100+i);
// 		ctx.lineTo(100,15+i);
// 		ctx.stroke();
// 	},10)

	// ------
	ctx.beginPath();

	var gradient = ctx.createLinearGradient(0,0,250,0);
	gradient.addColorStop(0, "#faf");
	gradient.addColorStop(1, "#f0f");

	ctx.fillStyle = gradient;

	ctx.fillRect(20, 20, 300, 700);
