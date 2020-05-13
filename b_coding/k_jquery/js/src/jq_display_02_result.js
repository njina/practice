// jq_dislay_02_result.js
// 제이쿼리

(function($){
// jQuery 시작

var headOffset = $('#headBox').offset().top; /* 고정값임 */

$(window).on('scroll',function(){
	var wScroll = $(this).scrollTop();

	if( headOffset < wScroll ){
		$('#headBox').css({'position':'fixed', 'bottom':'auto', 'top':0});
	}else{
		$('#headBox').removeAttr('style');
	}
});




// 언어,로그인=============================

var langLogin = $('.lang_login');
var lmList = langLogin.find('li');
var lmlistLink = lmList.find('a');


lmlistLink.on('mouseenter focus',function(){
	// e.preventDefault(); - click 시에만 필요함
	lmList.addClass('action');
});

langLogin.on('mouseleave',function(){
	lmList.removeClass('action');
});

lmlistLink.eq(-1).on('blur', function(){ //-1 은 마지막거
	lmList.removeClass('action');
});


// gnb =======================================
var gnbNav = $('.gnb_navi');
var gnbDl = gnbNav.find('dl');
var gnbTitle = gnbNav.find('dt');
var gnbTitleLink = gnbTitle.children('a');
var gnbContent = gnbNav.find('dd');
var gnbNavLink = gnbNav.find('a');
var gnbConLink = gnbContent.find('a');

gnbContent.hide();

	//1.각 메뉴별로 서브메뉴 나타나는 거 
/*gnbTitleLink.on('mouseenter focus',function(){
	$(this).parentsUntil('ul').siblings('li').find('dd').stop().slideUp();
	$(this).parent('dt').next('dd').stop().slideDown();
});

gnbNav.on('mouseleave',function(){
	gnbContent.stop().slideUp();
});

gnbContent.find('a').eq(-1).on('blur',function(){
	gnbContent.stop().slideUp();
});
*/
	//2.서브메뉴 한꺼번에 나타나는 거

// gnbDl.on('mouseenter',function(){
// 	gnbContent.stop().slideDown();
// 	gnbTitle.removeClass('action');
// 	$(this).addClass('action');
// });

// 마우스 동작에 따라서
gnbNav.on('mouseenter',function(){
	gnbContent.stop().slideDown();
	gnbTitle.removeClass('action');
	$(this).addClass('action');
});
gnbNav.on('mouseleave',function(){
	gnbContent.stop().slideUp();
});

//키보드 동작에 따라서
gnbTitleLink.on('focus',function(){
	gnbContent.stop().slideDown();
	gnbTitle.removeClass('action');
	$(this).parent('dt').addClass('action');
	});

gnbConLink.on('focus',function(){
	gnbTitle.removeClass('action');
	$(this).parents('dd').prev('dt').addClass('action');
	gnbConLink.find('li').removeClass('action');
	$(this).parent('li').addClass('action');
});

gnbContent.find('a').eq(-1).on('blur',function(){
	gnbContent.stop().slideUp();
});



// =============================
//브라우저에 따라서 꽉 찬 화면으로 하는 방법
var wH = $(window).height();
// $('#viewBox').height(wH);
$('#viewBox').css({'height': wH + 'px'});




// ==============================================================
var accor =  $('.accor');
var accorDt = accor.find('dt');
var accorBtn = accorDt.find('button');

accorBtn.on('click', function(e){
	e.preventDefault();
	
	var myT = $('this');
	var thisNext = $(this).parent('dt').next('dd');
	var thisNextState = thisNext.css('display') == 'none';
	
	//dt 누르면 dd 나오는 거 ====================================
	thisNext.siblings('dd').stop().slideUp(500);
	thisNext.stop().slideDown(300);
	
	//본인 누르면 닫히는 거==========================================	
	if( thisNextState ) {
		thisNext.siblings('dd').stop().slideUp();
		thisNext.stop().slideDown();
		myT.css({backgroundColor:'#aca'});
		myT.parent('dt').siblings('dt').find('button').css({backgroundColor:'transparent'});
	}else{
		thisNext.stop().slideUp();
		myT.css({backgroundColor:'transparent'});
	}
	
	
	// ===============================================
	if( hasDownClassName ){
		var myTinI           = myT.find('i');
		var otherTinI        = myT.parent('dt').siblings('dt').find('i');
		var hasDownClassName = myTinI.hasClass('fa-caret-square-down');
	
		//아이콘 변경- 1번 방법: 아이콘 자체를 바꾼다.		
		//dt누르면 아이콘 바뀌는거
		$(this).children('i').removeClass('fa-caret-square-down');
		$(this).children('i').addClass('fa-caret-square-up');
		
		// //dt 누르면 다른 dt의 아이콘은 원상복귀
		$(this).parent('dt').siblings('dt').find('i').removeClass('fa-caret-square-up');
		$(this).parent('dt').siblings('dt').find('i').addClass('fa-caret-square-down');
		$(this).parent('dt').siblings('dt').find('i').removeAttr('style');
	} else {
		myTinI.removeClass('fa-caret-square-up');
		myTinI.addClass('fa-caret-square-down');
	}
	//아이콘 변경- 2번 방법: 아이콘 회전시켜서.	
	// var myMat = myTinI.attr('style');

	// myTinI.css({'transform':'rotate(180deg)', 'transition':'all 300ms ease'});
	// otherTinI.removeAttr('style');

	// // if(!(myMat) == undefined) {
	// // 	var myArr = myMat.split(';')[0].split('(');
	// // 	console.log(myArr);
	// // }
	// 	if(thisNextState){
	// 		myTinI.css({'transform':'rotate(180deg)', 'transition':'all 300ms ease'});
	// 		otherTinI.removeAttr('style');
	// 	}else{
	// 		myTinI.removeAttr('style');
	// 	}


});





//jQuery 종료 
})(jQuery);