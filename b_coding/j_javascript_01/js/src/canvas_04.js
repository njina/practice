//canvas_04.js

var canvas = document.getElementsByClassName('paper')[0];
var ctx = canvas.getContext('2d');

// -------


var moveCircle = function(posX,posY){
	//캔버스 비우기.
	ctx.clearRect(0,0,canvas.width, canvas.height);
	
	ctx.fillStyle = 'hsla('+ Math.random()*360 +', 100%, 50%, 1)';
	ctx.fillStyle = "#faa";
	ctx.beginPath();
	ctx.arc(posX,posY,80,0,Math.PI*2,false);
	ctx.closePath();
	ctx.fill();
};



var i = 0;
var j = 400;
var setMove;
var MoveAni = function(){
	setMove = setInterval(function(){
		i+=10;
		if(i >200){
			j+=10;
			if(j >600){
				j=600;
			}
		}
		moveCircle(i,j);
	
		//캔버스 영역 벗어나면 애니멈추기
		if( i > 700 ){
			clearInterval(setMove);
		}
	},30);
};
// MoveAni();


//requestAnimationFrame 기능
//setInterval 와 비슷한데, 좀 달라. 
//ie 안 먹음.
var k = 0;
var reqAni;
function Move(){
	k += 1;
	console.log(k);
	//브라우저 화면이 최소화되면 값이 안 올라간다.
	reqAni = requestAnimationFrame(Move);

	if( k >=500 ){
		cancelAnimationFrame(reqAni);
	}
}
Move();



// --------------
//캔버스랑 제이쿼리랑 같은 파일에서 쓸수있나??
