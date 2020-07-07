// canvas_05.js

var canvas = document.querySelector('.paper');
var ctx = canvas.getContext('2d');

// 디자인속성
ctx.lineWidth = 30;
ctx.strokeStyle = '#a00';
ctx.font = "bold 2.5rem sans-serif";
ctx.textAlign = "center";
ctx.fillStyle = "#fa3";
ctx.lineCap = 'round';
var baseColor = "#07a";

//원그래프
//function(x좌표,y좌표, 퍼센트, 스킬명(프로그램명))
var myGraph = function(x, y, p, s){
	var posX = x || 200;
	var posY = y || 200;
	var percent = p || 70;
	var skill = s || 'program';

	//애니메이션
	var animationCircle;
	var circleGraph = function(){
		var i = 0;
		animationCircle = function(percent){

			var myP  = function(percent){
				//percent : 값 / 기준 *100 => 값 / 100 * 기준
				var p = (percent / 100 * 2) + 1.5;
				return Math.PI * p;
			};

			ctx.clearRect(posX -(240/2), posY -(240/2), 240, 240);

			ctx.beginPath();
			ctx.arc(posX, posY, 100, Math.PI*1.5, myP(percent), false);
			ctx.stroke();

			ctx.fillText(skill, posX, posY);
			ctx.fillText(percent + '%', posX, posY+43);
		};

		i+=1;
		animationCircle(i);
		( i < percent ) ? requestAnimationFrame(circleGraph) : cancelAnimationFrame(circleGraph);
	}
	circleGraph();
};


myGraph(150, 150, 90,'html');
myGraph(450, 150, 50,'css');
myGraph(750, 150, 80,'sass');
myGraph(450, 450, 80,'sass');
myGraph(150, 450, 30,'jQuery');
myGraph(750, 450, 100,'jQuery');





// ------------------------------------------------


//animation1 - setInterval
// var MoveInterval;
// var SetGo = function(){
// 	var i = 0;
// 	MoveInterval = setInterval(function(){
// 		i += 1;
// 		if( i >= 90 ){
// 			clearInterval(MoveInterval);
// 		} else {
// 			ctx.clearRect(0,0,canvas.width, canvas.height);
// 			myGraph(150, 150, i,'html');
// 		}
// 	},40)
// };
// SetGo();

//animation2 - requestAnimationFrame();
// var  MoveInterval2;
// var SetGo2 = function(){
// 	var i = 0;
// 	MoveInterval2 = function(){
// 		i += 1;
// 		ctx.clearRect(0, 0, canvas.width, canvas.height);
// 		myGraph(150, 150, i,'html');

// 		if( i < 90 ){
// 			requestAnimationFrame(MoveInterval2);
// 		} else {
// 			cancelAnimationFrame(MoveInterval2);
// 		}
// 	}
// 	MoveInterval2();
// };
// SetGo2();


// ----------
// 막대 그래프
var MyBar = function(x, y, p, t){

	var per = p * 2;

	//아래 투명도있는 bar
	ctx.globalAlpha = 0.3;
	ctx.lineWidth = 30;
	
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+200, y);
	ctx.stroke();
	
	//실질적인 퍼센트 bar
	ctx.globalAlpha = 1;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+ per, y);
	ctx.stroke();

	ctx.fillStyle = baseColor;
	ctx.font = "bold 30px myriadPro";
	ctx.textAlign = "left";
	ctx.fillText(t, x-15, y+55);

	ctx.textAlign = "right";
	ctx.fillStyle = "#f07";
	ctx.fillText(p + '%', x+225, y+55)
}

MyBar(100,570, 70, 'Photoshop');
MyBar(500,570, 95, 'Illustator');
MyBar(100,700, 90, 'Indesign');