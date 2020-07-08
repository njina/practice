//canvas_06.js

// 1.날짜 계산하기
//-1. 날짜 내장함수 알기
var date = new Date(); //js 내장함수, 컴퓨터 시간 기준
//내장함수에서 내가 원하는 걸로 쓰고 가공처리가 가공하게끔 하기 위해 new 를 붙인다.

var weekArr = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
var year = date.getFullYear(); //연도
var month = date.getMonth()+1; //월(1월은 0)
var weekDay = weekArr[ date.getDay() ]; //요일
var day = date.getDate(); //날짜

var lastDay = new Date(year, 2, 0).getDate(); //이번달의 마지막 날 파악

var today = date.toDateString(); //요일, 월, 일, 연도 (현재날짜 전체)
var time = date.toLocaleTimeString(); //현재시간 전체
var hours = date.getHours(); //현재의 시
var minutes = date.getMinutes(); //현재의 분
var seconds = date.getSeconds(); //현재의 초
var milliSeconds = date.getMilliseconds(); //현재의 1/1000초

// console.log(lastDay);

//-2. 각 영역에 날짜 삽입하기
var yy = document.querySelector('.yy');
var mm = document.querySelector('.mm');
var dd = document.querySelector('.dd');
var wd = document.querySelector('.week_day');
var ti = document.querySelector('.time');


yy.innerHTML = year;
// innerHTML 은 순수js 문법.
// $('.yy').html(year) 과 같은 의미.
mm.innerHTML = month;
dd.innerHTML = day;
wd.innerHTML = weekDay;
ti.innerHTML = time;

// setInterval(function(){
// 	var myTime = new Date().toLocaleTimeString();
// 	ti.innerHTML = myTime;
// },100)

var timeCheck = function(){
	var myTime = new Date().toLocaleTimeString();
	ti.innerHTML = myTime;
	requestAnimationFrame(timeCheck); //1초에 60번 반응하고 있다. 이 request~~는..
};
timeCheck();

// --------------------------

var canvas = document.querySelector('.paper');
var ctx = canvas.getContext('2d');
var canvasImg = document.querySelector('.canvas_to_img');

// 엄청 헷갈리는 부분! 원주율..아싸리 외우는 게...
var Deg = function(d){
	var Pi = d/360 * 2 + 1.5;
	var myResult = Math.PI * Pi;
	return myResult;
};

var renderTime = function(){
	//시간파악 기능---------
	var now = new Date();
	var today = now.toDateString();
	var nowTime = now.toLocaleTimeString();
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	
	//-------------
	var centerX = canvas.width/2;
	var centerY = canvas.height/2;
	
	// ctx.fillStyle = '#242424';
	var gr = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 300);
	gr.addColorStop(0, "rgba(10,0,10,0)");
	gr.addColorStop(1, "rgba(255,255,255,0.5)");
	ctx.fillStyle = gr;

	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.strokeStyle = '#fff';
	ctx.lineWidth = 20;
	ctx.lineCap = 'round';
	ctx.shadowBlur = 20;
	ctx.shadowColor = '#fa3';
	//hours
	ctx.beginPath();
	ctx.moveTo(centerX, centerY);
	ctx.arc(centerX, centerY, 130, Deg(h*30), Deg(h*30), false);
	
	ctx.stroke();
	
	//minutes
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.moveTo(centerX, centerY);
	ctx.arc(centerX, centerY, 180,Deg(m*6), Deg(m*6), false);
	ctx.stroke();

	//seconds
	ctx.beginPath();
	ctx.arc(centerX, centerY, 200, Deg(0), Deg(s*6), false);
	ctx.stroke();


	//font 세팅
	ctx.font = 'bold 1.8rem sans-serif';
	ctx.fillStyle = '#f0f';
	ctx.textAlign = 'center';
	ctx.fillText(today, centerX, centerY);

	ctx.font = 'normal 3rem sans-serif'
	ctx.fillText(nowTime, centerX, centerY+50);

	//canvas to img
	var imgData = canvas.toDataURL();
	// var imgData = canvas.toDataURL('image/jpeg'); //jpg로  다운로드
	canvasImg.src = imgData;
	canvasImg.alt = nowTime;

	requestAnimationFrame(renderTime);
};
//js에서 display:none 시키는 방법
canvas.style = "display:none";
renderTime();
// setInterval(
// 	function(){
// 		renderTime();
// 	}, 40)


// ------------------

