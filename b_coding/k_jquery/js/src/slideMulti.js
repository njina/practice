// slideMulti.js
// 복합적인 슬라이드배너

(function($){
// jQuery 시작

var slideBanner = $('.slide_banner');
var btn = $('.btn').find('button');
var slideUl = slideBanner.find('.slide_card');
var slideLi = slideUl.children('li');

// -----------

//li순서 변경, .active 삭제 및 재설정
// slideLi.removeClass('active');
slideLi.eq(-1).prependTo(slideUl);
slideLi = slideUl.children('li');
slideLi.eq(1).addClass('active');

// 뒷배경 슬라이드
var backImg = $('.back_img');
var backImgUl = backImg.children('ul');
var backLi = backImgUl.find('li');
backLi.eq(-1).prependTo(backImgUl);
backLi = backImgUl.find('li');
backLi.css({filter:'blur(5px)',opacity:0.5});
// -----------
//-//var




var hasActive;
var q;
//.active 걸린 배너 찾기
var whereActive = function(){
	for( var i=0 ; i<slideLi.length ; i++ ){
		//가운데에 보이는 배너 찾기(.active가진 li찾기)
		hasActive = slideLi.eq(i).hasClass('active');
		if( hasActive ){
			q = i;
			break;
		}
	}
	return q;
};
whereActive();	


//버튼 클릭시 내용 변경 --------------------------------

var btnTrue = true;

btn.on('click',function(e){
	e.preventDefault();
	var nBtn = $(this)[0] === $('.next')[0];
	
	whereActive();	

	slideLi.removeClass('active');

	//next버튼 클릭시
	if( nBtn && btnTrue ){
		//버튼 중복 클릭 방지
		btnTrue = false;
		//배너 이동하기
		slideLi.eq(q-1).css({transform:'translate3D(100%, 0, 0) rotateY(-30deg) scale(0.9)', zIndex:-1, transition: 'all 300ms ease'});
		
		slideLi.eq(q).css({transform:'translate3D(-100%, 0, 0) rotateY(30deg) scale(0.9)', zIndex:-1, transition: 'all 300ms ease'});
		slideLi.eq(q).addClass('up');

		slideLi.eq(q+1).css({transform:'translate3D(0, 0, 0) rotateY(0) scale(1)', 
		zIndex:100, transition: 'all 300ms ease'});
		
		setTimeout(function(){
			slideLi.eq(0).appendTo(slideUl);
			slideLi = slideUl.children('li');
			slideLi.eq(1).addClass('active');
			slideLi.removeClass('up');
			btnTrue = true;
		},500)

		//뒷배경 슬라이드 이동하기
		backImgUl.animate({marginLeft:-200+'%'},function(){
			backLi.eq(0).appendTo(backImgUl);
			backLi = backImgUl.find('li');
			backImgUl.css({marginLeft:-100+'%'});
		});


	} else if ( btnTrue ){
		//prev버튼 클릭시

		//버튼 중복 클릭 방지
		btnTrue = false;
		//배너 이동하기
		slideLi.eq(q-1).css({transform:'translate3D(0, 0, 0) rotateY(0) scale(1)', zIndex:100, transition: 'all 300ms ease'});
		
		slideLi.eq(q).css({transform:'translate3D(100%, 0, 0) rotateY(-30deg) scale(0.9)', zIndex:-1, transition: 'all 300ms ease'});
		slideLi.eq(q).addClass('up');

		slideLi.eq(q+1).css({transform:'translate3D(-100%, 0, 0) rotateY(30deg) scale(0.9)', 
		zIndex:-1, transition: 'all 300ms ease'});
		
		setTimeout(function(){
			// slideLi.removeClass('active');
			slideLi.eq(-1).prependTo(slideUl);
			slideLi = slideUl.children('li');
			slideLi.eq(1).addClass('active');
			slideLi.removeClass('up');
			btnTrue = true;
		},500)

		//뒷배경 슬라이드 이동하기
		backImgUl.animate({marginLeft:0},function(){
			backLi.eq(-1).prependTo(backImgUl);
			backLi = backImgUl.find('li');
			backImgUl.css({marginLeft:-100+'%'});
		});
	}

});

// --------------------------------

// 카드에 마우스 올렸을 때 움직임 처리하는거 -------------
// console.log(q);

slideLi.on('mousemove',function(e){
	// console.log(e.originalEvent.offsetX);
	//마우스 위치파악
	var mouseX = e.originalEvent.offsetX;
	var cardHalfWdith = $(this).outerWidth() / 2;

	if( mouseX <= cardHalfWdith ){
		$(this).css({transform:'rotateY(-20deg)', transition: 'all 500ms ease'});
	} else {
		$(this).css({transform:'rotateY(20deg)', transition: 'all 500ms ease'});

	}
});

slideLi.on('mouseleave',function(e){
	$(this).css({transform:'rotateY(0)', transition: 'all 500ms ease'});
});


// -----------






// jQuery 종료
})(jQuery);