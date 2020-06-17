//03_scroll.js
//포폴평가 - 이미지슬라이드, 스크롤 등 같이
/*
1. @세로 길이를 브라우저의 100%로 하기
2. 스크롤시 구현되는 기능  
	@-1. 헤드박스 position: fixed
3. 슬라이드배너
	@-1. 가로로 무한 이동
	@-2. 인디케이터 같이 이동
	@-3. 좌우버튼 클릭시 배너 이동
4. 탑버튼
	@-1. 300이상 스크롤되면 나타남
	@-2. 누르면 맨 상단으로

*/

(function($){
	// jQuery 시작 

var headBox = $('#headBox');
var gnbBox = $('#gnbBox');
var viewBox = $('#viewBox');
var contBox = $('#contBox');
var newsBox = $('#newsBox');
var saleBox = $('#saleBox');
var naviUl = gnbBox.find('.navi').children('ul');
var naviLi = gnbBox.find('.navi').find('li');

//viewBox 세로를 브라우저에 꽉차게=============================
var docHeight = $(window).height();
// console.log(docHeight);
viewBox.height( docHeight );
contBox.height( docHeight );
newsBox.height( docHeight );
saleBox.height( docHeight );

$('html,body').animate({'scrollTop':0});

//원스크롤페이지. 각 영역 부드럽게 이동
naviLi.find('a').on('click',function(e){
	e.preventDefault();

	var sectionName = $(this).attr('href');
	console.log(sectionName);
	var sectionOffset = $(sectionName).offset().top;
	console.log(sectionOffset);
	$('html,body').animate({'scrollTop': sectionOffset});
});


var myScroll;
//스크롤시 헤드박스 위치 설정 ===============================
$(document).on('scroll', function(e){
	myScroll = $(this).scrollTop();
	e.preventDefault();
	if( myScroll > 300 ){
		headBox.css({'top':0, 'backgroundColor':'rgba(85,85,85,0.5)'});
	} else {
		headBox.removeAttr('style');
	}
});

//탑버튼=============================================
var topMv = $('.top_move');
var topBtn = $('.top_btn');
		//스크롤이동시 나타나게
topMv.hide();
$(document).on('scroll',function(e){
	e.preventDefault();
	if( myScroll >= 300 ){
		topMv.fadeIn(300);
	} else {
		topMv.fadeOut(300);
	}
});
		//클릭시 맨 상단으로
topBtn.on('click',function(e){
	e.preventDefault();
	$('html,body').animate({scrollTop:0});
});

//슬라이드배너=============================================
var viewUl = $('.view_wrap'); //ul
var viewLi = viewUl.children('li');
var indiBtn = $('.indi_btn').find('button');
var next = $('.next_btn');
var prev = $('.prev_btn');

var indicatorArea $('.indicator_area')
var indiDot = $('.indi_dot');
var indiDotLi = indiDot.children('li');
var indiDotLink = indiDot.find('a');

		//마지막 배너 복제
	var viewLiLast = viewLi.eq(-1).clone(true);
	viewUl.prepend( viewLiLast );
		//배너 크기 조정
	viewLi = viewUl.children('li');
	viewUl.css({'width': viewLi.length * 100 + '%'});
	viewLi.css({'width': 100 / viewLi.length + '%'});

		//최초 보여지는 배너 위치 조정
	viewUl.css({marginLeft: -100 + '%', position:'relative'});
		//next버튼
	var n = 0;
	var check = true;
	next.on('click',function(e){
		e.preventDefault();
		if(check){
			check=false;
			n+=1;
			viewUl.stop().animate({left: -n * 100 + '%'},500,function(){
				if( n >= viewLi.length-2 ){ n = -1; }
				viewUl.css({left: -n * 100 + '%'});
				check = true;
			});
			indiDotLi.eq(n).addClass('action');
			indiDotLi.eq(n).siblings().removeClass('action');
		}
	});
		//prev버튼
	prev.on('click',function(e){
		e.preventDefault();
		if(check){
			check=false;
			n-=1;
			viewUl.stop().animate({left: -n * 100 + '%'},500,function(){
				if( n <= -1 ){ n = viewLi.length-2; }
				viewUl.css({left: -n * 100 + '%'});
				check = true;
			});
			indiDotLi.eq(n).addClass('action');
			indiDotLi.eq(n).siblings().removeClass('action');
		}
	});
	
//인디케이터(indi_dot)
		//인디케이터 변수는 위쪽-슬라이드배너-에 
indiDotLink.on('click',function(e){
	e.preventDefault();
	n = $(this).parent('li').index();

	$(this).parent('li').addClass('action');
	$(this).parent('li').siblings().removeClass('action');

	viewUl.animate({'left': -n * 100 + '%'});
});



	// jQuery 종료
	})(jQuery);