//slide_banner.css.js
//'문서에 대한 설명'


(function($){
	// jQuery 시작 

	var miniP = $('#miniProduct');
	var btn = miniP.find('button');
	var nextBtn = miniP.find('.next');
	var prevBtn = miniP.find('.prev');
	var timed = 300;
// ==================================================
// 버튼을 합치기 위한 조건(점검)
btn.on('click', function(e){
	// console.log( $(this) );
	// console.log('.next:', nextBtn);
	// console.log('.prev:', prevBtn);
	var t = $(this)[0];
	console.log( t === nextBtn[0] );  //결과값 true
});
// ==================================================
	var proWrap = $('.product_wrap');
	var product = $('.product');
	var prLi = product.find('li');
	
	// 마지막 배너 복제
	var prLast = prLi.eq(-1).clone(true);
	product.prepend( prLast );
	prLi = product.find('li'); //처음 li에서 li 재선언(업데이트) 반드시!!!!

	// 배너들 감싸고 있는 div 너비 늘리기
	var prLiLeng = prLi.length;

	product.css({'width': prLiLeng * 100 + '%', 'marginLeft': -100 + '%','position':'relative'});
	prLi.css({'width': 100 / prLiLeng + '%'});
	// console.log(prLiLeng);


	
	// 인디케이터 클릭시 한칸씩 이동
	var n = 0;
	var check = true;
/* 
   버튼따로따로(아래에 합친 부분 있음)
	nextBtn.on('click', function(e){
		e.preventDefault(); //기본 장착 이벤트 강제 삭제
		if(check){
			check = false;  //여러번 클릭했을 때 막 가는 거 방지.일회성으로
			n += 1; //1씩 카운트업
			// console.log(n);
			product.stop().animate({'left': n * -100 + '%'}, 300, function(){
				if( n >= prLiLeng-2 ){ n = -1;	}
				product.css({'left': n * -100 + '%'});  //24번째 줄에서 marginLeft로 줬으면 left 값으로 움직여야한다.
				check = true;
			});
		}
	});

	prevBtn.on('click', function(e){
		e.preventDefault(); //기본 장착 이벤트 강제 삭제
		if(check){
			check = false;  //여러번 클릭했을 때 막 가는 거 방지.일회성으로
			n -= 1; //1씩 카운트업
			// console.log(n);
			product.stop().animate({'left': n * -100 + '%'}, 300, function(){
				if( n <= -1 ){ n = prLiLeng-2; 	}
				product.css({'left': n * -100 + '%'});  //24번째 줄에서 marginLeft로 줬으면 left 값으로 움직여야한다.
				check = true;
			});
		}
	});

*/

	// var prSpan = prLi.find('span');
	// prSpan.css({'bottom':-100 + '%'});

	// 버튼 기능 합치기
	btn.on('click',function(e){
		e.preventDefault();
		var thisBtn = $(this)[0];
		//next 버튼 클릭
		if( thisBtn === nextBtn[0] && check){
			check = false;
			n += 1;
			product.stop().animate({'left': n * -100 + '%'}, timed, function(){
				if( n >= prLiLeng-2 ){ n = -1;	}
			product.css({'left': n * -100 + '%'});  //24번째 줄에서 marginLeft로 줬으면 left 값으로 움직여야한다.
			check = true;
			});
		//prev 버튼 클릭
		}else if(check){
			check = false;
			n -= 1;
			product.stop().animate({'left': n * -100 + '%'}, timed, function(){
				if( n <= -1 ){ n = prLiLeng-2; 	}
			product.css({'left': n * -100 + '%'});  //24번째 줄에서 marginLeft로 줬으면 left 값으로 움직여야한다.
			check = true;
			});
		}
		miniProIndiUl.find('li').eq(n).addClass('action');
		miniProIndiUl.find('li').eq(n).siblings('li').removeClass('action');
	});




	var mvImg;
	var mvSlide = function(){ 
		mvImg = setInterval(function(){
		nextBtn.trigger('click'); },timed*10 );
		};

	mvSlide();


	// product.on('mouseenter',function(){	clearInterval(mvImg);	});
	// 위에껄 변수로 해서 아래에 선언
	var clearFn = function(){ clearInterval(mvImg);	 };
	// product.on('mouseleave',function(){	mvSlide; });
	//위에껄 변수로 해서 아래에 선언
	var goFn = function(){ mvSlide; };
	//위의 두 변수를 사용해서 아래와 같이 한줄로 작성함
	product.on({'mouseenter': clearFn , 'mouseleave': goFn });


// 인디케이터 ================================
var indiBtnArea = miniP.find('.slide_btn');

indiBtnArea.after('<div class="indi_color"><ul></ul></div>');
var miniProIndiUl = $('.indi_color').find('ul');

	//원래 배너 갯수는 5개인데, 스무스한 animate를 위해 마지막꺼를 clone 했잖아? 그걸 뺀 값이야. 인디케이터는 원래 갯수대로만 있으면 되니까~~
var i = 0;
for(; i < prLiLeng -1 ; i++){
	miniProIndiUl.append('<li><a href="#"><span>설명' + (i + 1) + '</span></a></li>');

}

// $('head').append('<style></style>');
// var styleEl = $('head').find('style');
// styleEl = 
   // 인디케이터 각각 동그라이메 포커스가 잡히면~?
var miniPIndiLi = miniProIndiUl.find('li').children('a');
miniProIndiUl.find('li').eq(0).addClass('action');
miniPIndiLi.on('click', function(e){
	e.preventDefault();
	var thisParent = $(this).parent('li');
			n = thisParent.index(); //위에서 n을 이미 선언한 적이 있기때문에 var 삭제
	thisParent.addClass('action');
	thisParent.siblings().removeClass('action');
	product.stop().animate({'left': n * -100 + '%'}, timed);
});


//좌우버튼 클릭시 - indicator 이동처리 - 완료 (line 102,103)
//setInterval 실행시 - indicator 이동처리 -완료



// 같은자리에서 fadeIn fadeOut 되는 기능

var bannerWrap = $('.banner_wrap');
var banner = $('.banner');
var banLi = banner.children('li');
var banLiLeng = banLi.length;
console.log(banLiLeng);

var nextBtn2 = $('.slide_btn2_wrap').find('.next');
var prevBtn2 = $('.slide_btn2_wrap').find('.prev');

banLi.eq(0).css({'z-index':50});
banLi.eq(1).css({'z-index':40});
banLi.eq(2).css({'z-index':30});
banLi.eq(3).css({'z-index':20});
banLi.eq(4).css({'z-index':10});

n = 0;
nextBtn2.on('click', function(e){
	e.preventDefault();
	check = false;
	n += 1;
	banLi.eq(n).fadeIn({'bottom': 100 + '%'}, 300, function(){
		if( n >= banLiLeng -1){n = -1;}
	});
	banLi.eq(n-1).animate({'top': 100 + '%'});
	check = true;
});
prevBtn2.on('click', function(e){
	e.preventDefault();
	check = false;
	n += 1;
	banLi.eq(n).fadeIn({'bottom': 100 + '%'}, 300, function(){
		if( n < banLiLeng +1){n = -1;}
	});
	banLi.eq(n-1).animate({'top': 100 + '%'});
	check = true;
});





	// jQuery 종료
	})(jQuery);