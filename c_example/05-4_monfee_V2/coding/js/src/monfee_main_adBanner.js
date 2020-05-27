//monfee_main_adBanner.js
//몽피커피 선생님 풀이
//adBanner 영역 파일 쪼개기


(function($){
	// jQuery 시작 

var adBannerBox = $('#adBannerBox');
var adBannerBtn = adBannerBox.find('.adBanner_btn');
var adBtn = adBannerBtn.find('button');

var adBannerIndicator = adBannerBox.find('.adBanner_indicator');
var indicatorLi = adBannerIndicator.find('li');

var adBannerBg = $('.adBanner_bg');
var adBannerBgUl = adBannerBg.find('ul');
var adBannerBgLi = adBannerBgUl.children('li');

var adBannerImg = adBannerBox.find('.adBanner_img');
var adBannerImgWrap  = adBannerImg.children('ul');
var adBannerImgLi = adBannerImgWrap.find('li');
var adBannerImgLiLeng = adBannerImgLi.length;

	//common	
var n = 0;
var k = n;
var btnOK = true; //연달아 누르는 것을 방지하기 위해서

adBannerBgLi.eq(n).show();
adBannerBgLi.eq(n).addClass('active');


var liLast = adBannerImgLi.eq(-1).clone(true);
adBannerImgWrap.prepend(liLast);
adBannerImgLi = adBannerImgWrap.find('li');
adBannerImgLiLeng = adBannerImgLi.length;
var liWidth = 100 / adBannerImgLiLeng;
adBannerImgWrap.css({width: adBannerImgLiLeng * 100 + '%', transform:'translateX(-'+ liWidth + '%)'}); //한개만큼 강제로 옆으로 밀었음. 이전에는 position,left를 줘서 했었는데, 이번엔 translate로 줘봤습니다.
adBannerImgLi.css({width: liWidth + '%'});

//텍스트변화
var AdBannerTextFn = function(){
	if(k !== n){
		adBannerBgLi.eq(n).css({zIndex:5});
		adBannerBgLi.eq(k).fadeOut(100,function(){
			adBannerBgLi.eq(n).fadeIn(200);
			adBannerBgLi.removeClass('active');
			$(this).addClass('active');
		});
	}
};





	//button
adBtn.on('click',function(e){
	e.preventDefault();
	var clickIt = $(this)[0];
	k = n;
	if( clickIt === $('.next')[0] && btnOK ){
		//next버튼
		btnOK = false;
		n+=1;
		AdBannerTextFn();
		adBannerImgWrap.stop().animate({marginLeft: n * -100 + '%'}, function(){
		
			if( n >= adBannerImgLiLeng-2 ){ 
				n = -1; 
				adBannerImgWrap.css({marginLeft: n * -100 + '%'});
			}
			btnOK = true; //true 위치 중요!
		});
	} else if ( btnOK ){
		//prev버튼
		btnOK = false;
		n-=1;
		AdBannerTextFn();
		adBannerImgWrap.stop().animate({marginLeft: n * -100 + '%'}, function(){

			if( n < 0 ){ 
				n = adBannerImgLiLeng-2;
				adBannerImgWrap.css({marginLeft: n * -100 + '%'});
			}
			btnOK = true; //true 위치 중요!
		});
	}
	indicatorLi.eq(n).addClass('active');
	indicatorLi.eq(n).siblings().removeClass('active');
});


	//indicator
indicatorLi.find('a').on('click',function(e){
	e.preventDefault();
	if(btnOK){
		btnOK = false; 
		var clickIt = $(this).parent('li');
		var itIndex = clickIt.index();
		k = n;
		n = itIndex;
		AdBannerTextFn();
		
		adBannerImgWrap.stop().animate({marginLeft: n * -100 + '%'},function(){
			btnOK = true;
		});

		indicatorLi.eq(n).addClass('active');
		indicatorLi.eq(n).siblings().removeClass('active');
	}
});


	//자동슬라이드
var setSlideInterval;

var mySlideGo = function(){
	setSlideInterval = setInterval(function(){
		adBannerBox.find('.next').trigger('click');
	},3000);
};
var mySlideStop = function(){
	clearInterval( setSlideInterval );
};

mySlideGo();

//1번 == 2번 == 3번
// adBannerBox.on('mouseenter',function(){ mySlideStop(); });
// adBannerBox.on('mouseleave',function(){ mySlideGo(); });

//2번
// adBannerBox.on('mouseenter', mySlideStop);
// adBannerBox.on('mouseleave', mySlideGo);

//3번
adBannerBox.on({mouseeenter:mySlideStop, mouseleave:mySlideGo});




	// jQuery 종료
})(jQuery);