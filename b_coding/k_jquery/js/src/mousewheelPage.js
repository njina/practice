//mousewheelPage.js
//마우스휠 활용 원페이지 스크롤


(function($){
	// jQuery 시작 
	var n = 0;
	$('html').stop().animate({scrollTop:0});
	var win = $(window);
	var winH = win.innerHeight();
	$('#wrap').css({height:'auto'});
	var page = $('.page');
	page.css({height:winH});
	
	
	var mvTrue = true;
	
	win.on('mousewheel DOMMouseScroll',function(e){
		var evt = e.originalEvent;
		
	if( mvTrue ){
		( evt.wheelDelta ) ? result = -evt.wheelDelta : result =  evt.detail * 40;
		mvTrue = false;

		( result > 0 ) ? n+=1 : n-=1 ;
		if( n >= page.length-1 ){
			n = page.length-1;
		} else if ( n < 0 ){
			n = 0;	
		}
		console.log(n);
		$('html').stop(true, false).animate({scrollTop: winH * n},1300,function(){
			mvTrue = true;
		});	
	}
// mousewheel 종료태그
})













	// jQuery 종료
})(jQuery);