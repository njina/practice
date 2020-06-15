//introMovie.js
//수치 변경에 따른 이미지 바꾸는 형태(영상처럼 보이는)_01


(function($){
	// jQuery 시작 


	
	var mouseMv = $('.move_mouse');
	var imgArea = $('.movie_image');
	var mouseMvWidth = mouseMv.outerWidth();
	var imgLen = 112;

	for(var i = 0; i < imgLen; i++){
		imgArea.append('<img src="../img/introMovie/introMovie_' + ( i + 1 ) +'.png" alt="배경 인트로 이미지 처리"></img>');
	}

	var imgObj = imgArea.find('img');
/*
	//예제1.mousemove
	//마우스 움직임 따라 이미지가 움직이는 기능!!

	mouseMv.on('mousemove',function(e){
		// 마우스 좌표 파악하는 기능(offsetX:선택영역기준, pageX:브라우저기준,  cilentX:브라우저기준(스크롤무시), screenX:모니터좌표기준)
		// console.log( e.originalEvent.offsetX );
		//%재는 방법: 값 / 기준 * 100
		// -->  마우스위치 / 가로값 * 이미지갯수
		// --> 마우스위치 / mouseMvWidth * 112

		var mvRel = e.originalEvent.offsetX;
		var myRel = parseInt( mvRel / mouseMvWidth * imgLen ) + 1 ;
		console.log( myRel );
		imgObj.eq(myRel).stop().show();
		imgObj.eq(myRel).siblings().stop().hide();
	});
	*/

	//예제2.scroll 시에 이미지 변경되게 만들기

	$(window).on('scroll',function(e){
		var offsetTop = $(this).scrollTop();
		//스크롤 조금씩 되게 하기
		var myScroll = parseInt( offsetTop / $('#wrap').outerHeight() * imgLen );
		console.log(myScroll);
		if( myScroll < imgLen ){
			imgObj.eq(myScroll).stop().show();
			imgObj.eq(myScroll).siblings().stop().hide();
		} else {
			imgArea.css({top: (-myScroll + imgLen) + 'px' });
		}
	});



	// jQuery 종료
})(jQuery);