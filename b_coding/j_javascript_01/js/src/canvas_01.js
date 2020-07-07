//canvas_01.js
//캔버스 이해


// (function($){
	// jQuery 시작 

	//jQuery 형식 선택자
	// var canvas = $('.paper')[0];
	//순수 js형식 선택자
	// var canvas = document.getElementsByClassName('paper')[0];
	//바뀐 js형식 선택자(모든 브라우저 지원x)
	var canvas = document.querySelector('.paper');
	
	// if( canvas.getContext ){ console.log('지원브라우저'); }

	//getContext() 이란??  
	//2d로 그림을 그리겠다.
	var ctx = canvas.getContext('2d');

	
	//사각형그리기 
	//선택자.fillRect(x,y,width,height) 
	//단위 안씀. 기본 px단위
	//html에 기재한 canvas width,height 값 기준
	
	ctx.fillStyle = "#fa0"; //면 색상
	ctx.strokeStyle = "#a1a"; //선 색상
	ctx.lineWidth = 10; //선 두께
	
	ctx.fillRect(100,100,600,100); //사각형 그리기
	ctx.clearRect(0,0,500,450); 	//사각 구멍 뚫기
	ctx.strokeRect(500,700,123,123);	//선 형태의 사각형
	
	ctx.fillStyle = "#ad0"; 
	ctx.fillRect(100,200,150,300); //사각형 그리기
	






	// jQuery 종료
// })(jQuery);

