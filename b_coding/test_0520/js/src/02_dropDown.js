//02_dropDown.js
//포트폴리오 평가


(function($){
	// jQuery 시작 

	// 메인 메뉴 드롭다운 제어 - mouseenter,mouseleave
	$('.gnb').on('mouseenter', function(e){
		e.preventDefault();
		$(this).children('dt').nextAll('dd').slideDown();
	});
	
	$('.gnb').children('dd').on('mouseleave', function(e){
		e.preventDefault();
		$('.gnb').children('dd').hide();
	});
	
	// 메인 메뉴 드롭다운 제어  - focus
	$('.gnb').find('button').on('focus', function(e){
		e.preventDefault();
		$(this).parent('dt').nextAll('dd').slideDown();
	});
	
	
	// en,login 메뉴 드롭다운 제어 - mouseenter, mouseleavve
	$('.unb').on('mouseenter',function(e){
		e.preventDefault();
		$(this).children('dd').slideDown();
	});

	$('.unb').children('dd').on('mouseleave',function(e){
		e.preventDefault();
		$('.unb').children('dd').hide();
	});

/*수정해야할 사항
1. dd를 통하지 않고 dt에서 바로 mouseleave 하는 경우, 서브메뉴 영역이 hide 되지 않는다.
2. dt -> dd -> dt 로 이동시 hide됐다가 다시 slideDown 이 된다. 서브메뉴 영역이 보일시에는 가만히 있으라는..? 명령 필요함

*/






	// jQuery 종료
	})(jQuery);