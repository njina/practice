//parallax.js
//parallax 기능 익히기


(function($){
	// jQuery 시작 

var win = $(window);
var winW = win.innerWidth();
var winH = win.innerHeight();

var introBox = $('#introBox');
var introDiv = introBox.children('div');

var divImg = $('.img');
var imgArr = [];

var i = 0;
for(; i < divImg.length ; i++ ){
	imgArr[i] = divImg.eq(i).offset().top
}
// console.log(imgArr);



if( winW < 640 ){
	introDiv.remove();
}

//모바일 환경시에 parallax 기능하는 배경이미지 제거하기
win.on('resize',function(){
	if( winW < 640 ){
		introBox.children('div').remove();
	} else {
		//다른 경우에는 새로고침해라(단, 1px로 새로고침됨..)
		location.reload();
	}
});


//parallax
// #introBox

win.on('scroll',function(e){
	e.preventDefault();
	var winTop = win.scrollTop();
	var winTop2 = winTop + winH;
	// console.log(winTop);
	introDiv.eq(0).css({backgroundPositionY : winTop}); //요기가 중요뽀인트!!
	//정확한 수치가 아니라 나누기를 해야해
	introDiv.eq(1).css({backgroundPositionY : winTop/15*15}); 
	introDiv.eq(2).css({backgroundPositionY : winTop/15*13}); 
	introDiv.eq(3).css({backgroundPositionY : winTop/15*11}); 
	introDiv.eq(4).css({backgroundPositionY : winTop/15*9}); 
	introDiv.eq(5).css({backgroundPositionY : winTop/15*7}); 
	introDiv.eq(6).css({backgroundPositionY : winTop/15*5}); 
	introDiv.eq(7).css({backgroundPositionY : winTop/15*3}); 
	introDiv.eq(8).css({backgroundPositionY : winTop/15*1}); 
	//--------------
	
	// #conBox-- 중간 기능 처리
	if( winTop2 > imgArr[0]){
		// console.log('000000');
		divImg.eq(0).css({backgroundPositionY:-(imgArr[0] - winTop2)/10 + '%'});
		divImg.eq(0).next('p').css({top:-(imgArr[0] - winTop2)/50 + '%'});
	}
	if( winTop2 > imgArr[1]){
		// console.log('111');
		divImg.eq(1).css({backgroundPositionY:-(imgArr[1] - winTop2)/10 + '%'});
		divImg.eq(1).next('p').css({left:-(imgArr[1] - winTop2)/100 + '%'});
	}
	if( winTop2 > imgArr[2]){
		// console.log('222');
		divImg.eq(2).css({backgroundPositionY:-(imgArr[2] - winTop2)/10 + '%'});
		divImg.eq(2).next('p').css({top:(imgArr[2] - winTop2)/100 + '%'});
	}
	if( winTop2 > imgArr[3]){
		// console.log('333');
		divImg.eq(3).css({backgroundPositionY:-(imgArr[3] - winTop2)/10 + '%'});
		divImg.eq(3).next('p').css({left:(imgArr[3] - winTop2)/50 + '%'});
	}
//scroll 종료태그
});























	// jQuery 종료
})(jQuery);