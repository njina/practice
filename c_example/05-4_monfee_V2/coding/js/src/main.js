// main.js
// monkey coffee 메인페이지 

/*
1. 헤더에서
	-1. 메인메뉴타이틀에 mouseenter 했을 때 아래 서브메뉴콘텐츠 나타나기. slideDown
2. adBanner에서
	-1. 옆으로 슬라이드
	-2. 인디케이터도 같이 이동
	-3. 좌우 버튼 클릭시 배너이미지 무한 이동
 */

(function($){
// jQuery 시작

// 헤더 ===============================================
var headBox = $('#headBox');
var gnbBox = $('#gnbBox');
var mainMenuArea = gnbBox.children('.mainmenu_area');
var submenuArea = gnbBox.children('.submenu_area');

// 서브메뉴영역 나타나기
mainMenuArea.on('mouseenter',function(){
	submenuArea.slideDown();
	// $(this).find('a').css({'fontWeight':'bold'});
});

// 서브메뉴영역 사라지기
gnbBox.on('mouseleave',function(){
	submenuArea.slideUp();
});

//서브메뉴에서 mouseenter시,
submenuArea.find('a').on('mouseenter',function(){
	$(this).css({'fontWeight':'bold'});
	$(this).siblings('a').removeAttr('style');
	$(this).parent('li').siblings('li').find('a').removeAttr('style');
});
submenuArea.find('a').on('mouseleave',function(){
	$(this).removeAttr('style');
});

// adBanner영역 ===============================================
var adBannerBox = $('#adBannerBox');
var adSlideArea = adBannerBox.find('.slide_area');
var adSlideWrap = adBannerBox.find('.slide_wrap');
var adSlideLi = adSlideWrap.children('li');

var timed = 500;

		//마지막 슬라이드 복제
var adSlideLiLastClone = adSlideLi.eq(-1).clone(true);
adSlideWrap.prepend( adSlideLiLastClone );
adSlideLi = adSlideWrap.children('li');
		//슬라이드 ul,li 너비 재조정 - !!!!왜 안되는지 모르겠으뮤ㅠ
adSlideWrap.css({'width': adSlideLi.length * 100 + '%', 'position':'relative','marginLeft':-100+'%' });
// console.log(adSlideWrapW);
adSlideLi.css({'width': 100 / adSlideLi.length + '%'});

		//다음 버튼 클릭시 다음 이미지로 넘어가기
var adSideBtn = adBannerBox.find('.side_btn');
var adNextBtn = adSideBtn.children('.next');
var adPrevBtn = adSideBtn.children('.prev');

var n = 0;
var bool = true;
adNextBtn.on('click',function(e){
	e.preventDefault();
	bool=false;
	n += 1;
	adSlideWrap.stop().animate({'left':-n * 100 + '%'},timed,function(){
		if( n > adSlideLi.length-2 ){n = -1};
		adSlideWrap.css({'left': -n * 100 + '%'});
		bool=true;
	});
});






// jQuery 종료
})(jQuery);