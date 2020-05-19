//slide_banner_result_2.js
//같은 자리에 사진 겹쳐있고, z-index 활용하여 이동하는 슬라이드 배너
// +인디케이터 +배너 순서에 따라 숫자 바뀌는거


(function($){
	// jQuery 시작 
	
	var product = $('.product'); //ul 클래스 네임
	var productLi = product.children('li');
	var productBtn = $('.product_btn').children('button');
	var productWrap = $('.product_wrap');
	
	product.parent().css({'overflow':'visible'});
	
	product.css({'width':'100%', 'position':'relative'});
	productLi.css({'width':'100%', 'position':'absolute', 'left':0, 'top':0});
	



	// 인디케이터======================================
		//인디케이터 구조 생성
	var indicatorColorCode = '<div class="indicator_color hidden_wrap"><ul></ul></div>';
	var indiLiCode = '<li><a href=#><span></span></a></li>';

	productWrap.before( indicatorColorCode );
	var indicatorColorUl = $('.indicator_color').find('ul');
	
	var i = 0;
	var n = 0;  //아래에 있다가 뜯어서 가져옴
	var proNarr;
	for(; i < productLi.length ; i++ ){
		indicatorColorUl.append( indiLiCode );
		proNarr = productLi.eq(i).text();
		indicatorColorUl.children('li').eq(i).find('span').text( proNarr );  //뒤쪽에 있는 아이를 선택해서.. 배너에 있는 설명을 그대로 가져다 넣음(proNarr)
	} 
	//인디케이터 디자인
	
	var indicatorColorStyle = '.indicator_color {\
		display:inline-block; width:100%; height:30px;\
		text-align:center; position:absolute; right:0; bottom:-50px; z-index:500;}\
		.indicator_color ul {float:left; width:auto; height: 100%; padding:0 10px; background-color: #ccc;}\
		.indicator_color li {float:left; margin-right:0.5rem; width:1.5rem; height: 1.5rem; background-color:#fa0;}\
		.indicator_color li.action {background-color:#0af;} \
		.indicator_color li a {display:block; width:100%; height:100%;}\
		';
		//줄바꿈할 때는 역슬러시\
		
		$('head').append('<style>' + indicatorColorStyle + '</style>');
		// $('style').append();
		
//=========================
$('.indicator_color').append('<p><span class="n_count">1</span> / <span class="t_count">5</span></p>');

var indicatorColorCount = '.indicator_color p {float:right; width:40px; background-color:#caf;}';
$('head').find('style').append( indicatorColorCount );
//=========================





// 슬라이드배너======================================
//현상황: 처음 보여야하는 배너가 작성 순서에 의해 맨 뒤로 가있음.
//방법1: 보이게하려는 하나의 배너만 남고, 나머지는 display:none;
//방법2: 순서의 배치를 역순으로 배치해서 처리

//방법 1  ============================================
//원하는 배너 보이고 나머지 배너 가리기
productLi.eq(0).css({'zIndex':10});  //보이려는 배너만 보이고
productLi.eq(0).siblings('li').css({'zIndex':0, 'display':'none'});  //나머지는 안보이게

//각 배너의 순서 보여주기/전체갯수================================
$('.n_count').text( n+1 );
$('.t_count').text( productLi.length );



//좌우버튼
var bool = true; //중복실행 방지를 위한 변수

var FadeFn = function(n,k){
	//k와 n이 같지 않다면 이 기능을 수행하시오
	if(k !== n){
		$('.n_count').text( n+1 );
		productLi.eq(n).css({'zIndex':5, 'display':'block'});
		indiLi.eq(n).addClass('action');
		indiLi.eq(n).siblings().removeClass('action');

		productLi.eq(k).fadeOut( function(){
			productLi.eq(n).css({'zIndex':10});
			productLi.eq(n).siblings('li').css({'zIndex':0});
			bool = true;
		});
	}
};

productBtn.on('click',function(e){
	e.preventDefault();
	var k = n;  //클릭했을 당시의 n의 값을 저장한 것. k를 재할당하기 전까지 k의 값은 유지된다.
	
	//next버튼 클릭시
	if( $(this)[0] === $('.next')[0] && bool ){
		bool = false;
		// if ( n >= productLi.length-1 ){ n = 0 } else { n += 1; }
		( n >= productLi.length-1 ) ?  n = 0 : n += 1;  //삼항연산자(위의 if문을 간단하게)
		
		FadeFn(n,k);  //함수로 빼서 씀
		
	} else if ( $(this)[0] === $('.prev')[0] && bool ){
		//prev버튼 클릭시
		bool = false;
		( n <= 0 ) ? n = productLi.length-1 : n -= 1;	  //삼항연산자
		
		FadeFn(n,k);  //함수로 빼서 씀
		
	}
});



//인디케이터 클릭 ====================================
var indiLi = indicatorColorUl.children('li');
indiLi.eq(n).addClass('action');

indiLi.find('a').on('click',function(e){
	e.preventDefault();
	k = n;  //변수 재선언
	n = $(this).parent().index();  //변수 재선언

	FadeFn(n,k);
	
});

FadeFn(n,1);








// jQuery 종료
})(jQuery);