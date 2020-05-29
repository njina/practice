//resize_02.js
//브라우저 크기에 따른 js 기능 처리


(function($){
	// jQuery 시작 

//선택자
var win = $(window);
var headBox = $('#headBox');
var viewBox =  $('#viewBox');
var gnbBox = $('#gnbBox');
var gnbBtn = gnbBox.find('.gnb_view_btn');
var gnbList =  gnbBox.find('.gnb_list');

//디바이스 환경 : 최초의 너비값 파악
var winW = win.width();

var mob700 = function(){
	//버튼 클릭
	gnbBtn.on('click',['button'],function(e){
		e.preventDefault();
		gnbList.stop().slideToggle();
	});
};

var tablet1400 = function(){
	gnbList.on('mouseenter',function(){
		$(this).addClass('action');
	});
	headBox.on('mouseleave',function(){
		gnbList.removeClass('action');
	});
};

var pcFull = function(){
	gnbList.on('mouseenter',function(){
		gnbList.addClass('action');
	});
	gnbList.on('mouseleave',function(){
		gnbList.removeClass('action');
	});
};

// ========================================
// 디바이스 사이즈 체크
if( winW <= 700 ){
	mob700();
} else if ( winW <= 1400 ){
	tablet1400();
} else {
	pcFull();
}


// ========================================
//변경된 가로값 파악
win.on('resize',function(){
	var nowWinW = win.width();
	var deviceWidthCheck = winW !== nowWinW; //최초의 가로값과 변경된 가로값을 비교. 최초값과 변경값이 다르면 새로고침해라
	if( deviceWidthCheck ){
		location.reload();  //강제 새로고침
		// window.location.reload();  //window 생략 가능

	}
});




	// jQuery 종료
	})(jQuery);