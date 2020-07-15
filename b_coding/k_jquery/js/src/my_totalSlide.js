//my_totalSlide.js
//슬라이드-인디케이터, 버튼, 터치


(function($){
	// jQuery 시작 

	// 변수
	var viewBox = $('#viewBox');
	
	var slideWrap = $('.slide_wrap');
	var slideLi = slideWrap.children('li');
	
	var btnArea = $('.btn_area');
	var nextBtn = btnArea.children('.next');
	var prevBtn = btnArea.children('.prev');
	
	var indicatorWrap = $('.indicator_wrap');
	var indicatorLi = indicatorWrap.children('li');





	// 슬라이드 이미지 복제
	var lastSlide = slideLi.eq(-1).clone(true);
	



	//버튼 클릭시
	nextBtn.on('click',function(e){
		e.preventDefalut();

		var i = 0;


	});





	// jQuery 종료
})(jQuery);