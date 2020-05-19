//onepage_scroll.js
//원페이지 스크롤 페이지 구성 및 top버튼
//네비게이션에서 메뉴 누르면 같은 페이지 내 해당 영역으로 부드럽게 이동


(function($){
	// jQuery 시작 

	//네비 누르면 해당 영역으로 부드럽게 이동 ====================================
	var timed = 500;
	// $(window).scrollTop(0);
	$('html').animate({'scrollTop':0},timed/10);

	var gnb = $('#gnbBox');
	var gnbLi = gnb.find('li');
	

	//스크롤했을 때 해당메뉴 영역이라는 거 알려주는 거 ======================================
	var scrollOffset = [];
	var i = 0;
	for(;  i < gnbLi.length ;i++ ){
		var selHerf = gnbLi.eq(i).find('a').attr('href');
		var selEl = $(selHerf).offset().top;  //$(selHerf)를 $() 빼면 안됨.. 왜냐고? 선택자가 아니어서...?
		scrollOffset[i] = selEl;
		// console.log(scrollOffset);
	}

	$(window).on('scroll',function(){
		var winScroll = $(window).scrollTop();

		if( winScroll < scrollOffset[0] ){
			gnbLi.eq(0).addClass('action');
			gnbLi.eq(0).siblings().removeClass('action');
		}else if( winScroll > scrollOffset[0] && winScroll < scrollOffset[1]){
			gnbLi.eq(1).addClass('action');
			gnbLi.eq(1).siblings().removeClass('action');
		}else if( winScroll > scrollOffset[1] && winScroll < scrollOffset[2]){
			gnbLi.eq(2).addClass('action');
			gnbLi.eq(2).siblings().removeClass('action');
		}else if( winScroll > scrollOffset[2] && winScroll < scrollOffset[3]){
			gnbLi.eq(3).addClass('action');
			gnbLi.eq(3).siblings().removeClass('action');
		}else if( winScroll > scrollOffset[2] && winScroll < scrollOffset[3]){
			gnbLi.eq(4).addClass('action');
			gnbLi.eq(4).siblings().removeClass('action');
		}
	});


	gnbLi.children('a').on('click',function(e){
		e.preventDefault();
		var sectionName = $(this).attr('href');
		console.log( sectionName );
		var sectionOffset = $(sectionName).offset().top;
		console.log( sectionOffset );

		$('html,body').animate({'scrollTop' : sectionOffset});

	});
	
	//인디케이터 ==========================================
	var headBox = $('#headBox');
	var pointSide = '<aside id="pointNavi"></aside>';
	headBox.after(pointSide);
	var pointNavi = $('#pointNavi');
	var gnbClone = gnb.children('ul').clone(true); //이미 기능만들어 놓은 걸 복제
	pointNavi.append(gnbClone);
	
	pointNavi.css({'position':'fixed', 'top': 7+'rem', 'right': 3+'rem', 'width':2+'rem', 'height':'auto'});
	pointNavi.children('ul').css({'width':'100%',  'height': '100%', 'backgroundColor': 'rgba(255,255,255,0.5)'});
	pointNavi.find('li').css({'width':'2rem', 'height': '2rem', 'marginBottom': '2rem'});
	pointNavi.find('a').css({'display':'block', 'borderRadius':'2rem', 'backgroundColor':'#3fa', 'fontSize':0, 'width':'2rem', 'height':'2rem'});
	
	
	
	//top 버튼
	//1000px 이전에 안 보임, 이후에 보임. 클릭시 최상단으로 이동
	
	/* 내가 짠 코드
var topBtn = $('.top_btn').children('button');
var docScroll;

$(document).on('scroll', function(){
	docScroll = $(document).scrollTop();
	if( docScroll >= 1000 ){ 
		topBtn.parent().css({'display':'block'});
		console.log('스크롤탑값:' + docScroll);
	} else {
		topBtn.parent().css({'display':'none'});
	}
});

topBtn.on('click',function(e){
	e.preventDefault();
	$('html,body').animate({'scrollTop' : 0},300);
});
*/
var topMvText = '<div class="top_move_btn"><a href="#"><span class="hidden">상단으로 이동</span></a></div>';
$('#asInfoBox').after( topMvText );

var topMvBtn = $('.top_move_btn');
topMvBtn.css({position:'fixed', left:'50%', bottom:'3rem', marginLeft:'30rem', zIndex:'1000', width: '100px', height: '100px', backgroundColor:'#fa0', display:'none'});
topMvBtn.find('a').css({display:'block', width: '100%', height: '100%'});

$(window).on('scroll',function(){
	var winScroll = $(window).scrollTop();
	// if(winScroll > 1000){topMvBtn.stop().fadeIn(); } else {topMvBtn.stop().fadeOut();}
	(winScroll > 1000) ? topMvBtn.stop().fadeIn(300) : topMvBtn.stop().fadeOut(300);  //삼항연산자
});
//$(window)와 $(document)는 엄밀히 나누자면 다른데, 비교적 유사한 개념으로 이해해도 현재로썬 무방하다.

topMvBtn.on('click', ['a'] ,function(e){
	e.preventDefault();
	$('html,body').animate({scrollTop:0});
});
	

//스크롤휠 기능 구현 전 사전 지식
$(window).on('mouseWheel DOMMouseScroll',function(e){
	var myEvt = e.originalEvent;
	var wheelValue;

	if( myEvt.wheelDeltaY ){
		wheelValue = myEvt.wheelDeltaY;
	}else{
		wheelValue = myEvt.detail * 40;
	}
	// console.log( e.originalEvent.wheelDeltaY );
	console.log( wheelValue );
});

//DOMMouseScroll - 파이어폭스용 -> e.detail
//originalEvent.wheelDeltaY - 크롬,엣지 등


	// jQuery 종료
})(jQuery);