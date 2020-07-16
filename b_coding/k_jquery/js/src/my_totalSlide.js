//my_totalSlide.js
//슬라이드-인디케이터, 버튼, 터치


(function($){
	// jQuery 시작 

	// 변수
	var viewBox = $('#viewBox');
	
	var slideWrap = $('.slide_wrap');
	var slideLi = slideWrap.children('li');
	var lastSlide = slideWrap.children('li').eq(-1).clone(true);
	
	var btnArea = $('.btn_area');
	var btn = btnArea.find('button');
	var nextBtn = btnArea.children('.next');
	var prevBtn = btnArea.children('.prev');
	
	var indicatorWrap = $('.indicator_wrap');
	var indicatorLi = indicatorWrap.children('li');

	var gaugeArea = $('.gauge_area');
	var gaugeMoving = gaugeArea.find('.gauge_moving');

	// --------------
	// 슬라이드 이미지
	slideWrap.prepend(lastSlide);
	slideLi = slideWrap.children('li');
	slideLen = slideLi.length
	
	slideWrap.css({width: slideLen * 100 + '%', marginLeft: -100+'%', position: 'relative'});
	slideLi.css({width: 100 / slideLen + '%'});
	

	//버튼 클릭시에
	
	var timed = 500;
	var moveLimit = true;
	var n = 0;

	btn.on('click',function(e){
		e.preventDefault();
		
		//다음버튼 -----------------------------
		var thisBtn = $(this)[0];
		if(thisBtn === nextBtn[0] && moveLimit){
			moveLimit = false;
			console.log(moveLimit)
			n+=1;
			slideWrap.stop().animate({left: -n * 100 + '%'},timed,function(){
				if(n >= slideLen-2){
					n = -1;
					slideWrap.css({left: -n * 100 + '%'});
				}
				moveLimit = true;
			});
			
			//인디케이터
			indicatorLi.eq(n).addClass('active');
			indicatorLi.eq(n).siblings().removeClass('active');
			
		} else if(moveLimit){
			//이전버튼 -----------------------------
			moveLimit = false;
			n-=1;
			slideWrap.stop().animate({left: -n * 100 +'%'},timed,function(){
				if(n <= -1){
					n = slideLen-2
					slideWrap.css({left: -n * 100 + '%'});
				}
				moveLimit = true;
			});

			//인디케이터
			indicatorLi.eq(n).addClass('active');
			indicatorLi.eq(n).siblings().removeClass('active');
		}
	});

	//자동으로 돌아가게
	setInterval(function(){
		nextBtn.trigger('click');
	},timed*10)








	// jQuery 종료
})(jQuery);