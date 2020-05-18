//slide_banner.css.js
//'문서에 대한 설명'


(function($){
	// jQuery 시작 

	var miniP = $('#miniProduct');
	var nextBtn = miniP.find('.next');
	var prevBtn = miniP.find('.prev');

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


	
	// next 인디케이터 클릭시 한칸씩 이동
	var n = 0;
	var check = true;

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



	var mvImg;
	var mvSlide = function(){ 
		mvImg = setInterval(function(){
		nextBtn.trigger('click'); },2000 );
		};

	mvSlide();


	// product.on('mouseenter',function(){	clearInterval(mvImg);	});
	// 위에껄 변수로 해서 아래에 선언
	var clearFn = function(){ clearInterval(mvImg);	 };
	// product.on('mouseleave',function(){	mvSlide; });
	//위에껄 변수로 해서 아래에 선언
	var goFn = function(){ mvSlide; };
	//위의 두 변수를 사용해서 아래와 같이 한줄로 작성함
	product.on({'mouserenter': clearFn , 'mouseleave': goFn });





	// jQuery 종료
	})(jQuery);