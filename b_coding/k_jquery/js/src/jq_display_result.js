//jq_display_result.js

(function($){
//jQuery 시작

//탭 메뉴 =================================================
// - 1번 방법 ===================================================
var st01 = $('.style_01');
var st01Li = st01.find('li');

var con = $('.content');
var conLi = con.children('div');

st01Li.eq(0).addClass('action');

	st01Li.children('button').on('click focus', function(e){
		e.preventDefault();

		var myThis = $(this).parent('li'); //this는 이미 있는 말이라서 this라는 변수선언은 안됨
		var i = myThis.index();
		var conLiEq = conLi.eq(i);
		// 지역변수는 함수 밖에 기재하지 말것!!!!! 안 먹는다!!!
		myThis.addClass('action');
		myThis.siblings().removeClass('action');


		// conLi.hide();  //1.전부 다 숨기고나서
		// conLiEq.stop().slideDown();  //1.해당 순서를 보여줘라

		conLiEq.siblings().hide(); //2.형제만 숨기고
		conLiEq.stop().fadeIn(); //2.보여줘라

	});






// 아코디언 메뉴 ===============================================

var accMenu = $('.accordian_menu');
var accSt01 = accMenu.children('.acc_style_01');
var accSt01_dt = accSt01.find('dt');
var accSt01_dd = accSt01.find('dd');

// console.log(accSt01, accSt01_dt, accSt01_dd);

// dt(accSt01_dt) 클릭시 바로뒤의 dd(accSt01_dd)를 나타나게(slideDown) 하여라
accSt01_dt.find('button').on('click', function(){
	if( $(this).parent('dt').next('dd').css('display') === 'none' ){
		accSt01_dd.stop().slideUp();
	}
	$(this).parent('dt').next('dd').stop().slideDown();
});

/* 나타나는 문제점 
1. slide 처리시 toggle 중복현상
2. focus 처리시 색상처리
3. 변수 정리
*/





// tab메뉴를 dl을 활용하여  ===============================
var moreBtn = $('.more_style').find('dt').children('button');

moreBtn.on('click', function(e){
	e.preventDefault();

	var thisDt = $(this).parent('dt');
	var dtNewView = thisDt.next('dd').css('display') === 'none';
	
	if( dtNewView ){
		
		$('.more_style').find('dd').hide();
		thisDt.next('dd').fadeIn();

		thisDt.addClass('action');
		thisDt.siblings('dt').removeClass('action');

	}



});















//jQuery 종료	
})(jQuery);