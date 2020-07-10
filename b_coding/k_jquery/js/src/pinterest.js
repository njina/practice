//pinterest.js
//핀터레스트 따라 만들기


(function($){
	// jQuery 시작 

	// 외부파일(dataBase) 불러오기
var cardData;
var maxCardLength;

$.ajax({
	url:'../data/mock_data_sample.json',
	async:false,
	success:function(data){
		cardData = data;
		maxCardLength = cardData.length;





var cardCode = '<div class="card">\
									<a href="#">\
										<div class="link_area"></div>\
										<p class="text_area"></p>\
									</a>\
								</div>'

var win = $(window);
var wrap = $('#wrap');
var cardWrap = $('.card_wrap');
var card;
var cardWidth = 250;

// ------------------
// 가로값
var winW = win.outerWidth();
var cardRowLength; //브라우저에서 카드 갯수
// console.log(cardRowLength);
wrap.css({width: cardRowLength * cardWidth + 'px'});

var jc;
var jCount;
var jcOffset;
var j = 0;
// ------
var RepeatCard = function(c){
	jCount = j + c || 10;
	for(; j < jCount ; j += 1){
		cardWrap.append(cardCode);
		card = cardWrap.find('.card').eq(j);
		cardWrap.find('.card').eq(j).css({height: cardHeight[j]})
		
		// 효율적으로 만들기 (아래의 if문을 단순화)
		card.css({left: cardWidth * (j % cardRowLength) + 'px' });
		if ( j < cardRowLength ){
			card.css({top:0});

			card.css({top:jcOffset});
			card.find('.link_area').css({backgroundColor:cardData[j].color});
			card.find('.link_area').text(cardData[j].id);
			card.find('.text_area').text(cardData[j].thum_content);

		} else {
			jc = j - cardRowLength;
			jcOffset = parseInt(cardWrap.find('.card').eq(jc).css('top')) + 
			cardWrap.find('.card').eq(jc).outerHeight();
			
			card.css({top:jcOffset});
			card.find('.link_area').css({backgroundColor:cardData[j].color});
			card.find('.link_area').text(cardData[j].id);
			card.find('.text_area').text(cardData[j].thum_content);
		}
	} //for문
};
// ------

// ------------------
//임의로 카드 높이값 설정하기
var cardHeight = [];

for( var i = 0 ; i < maxCardLength ; i += 1 ){
	cardHeight[i] = parseInt(Math.random() * 600) + 200; //최소 200부터 600
	// console.log(cardHeight);
}

//함수!! 제일 중요한 곳!!!!!포인트
var cardSet = function(widthSize){
	cardRowLength = parseInt((widthSize - 60) / cardWidth);
	wrap.css({width: cardRowLength * cardWidth + 'px'});
	// ---

	RepeatCard();

	/*
		if( j < cardRowLength ){
			card.css({ top:0, left:cardWidth * j });

		} else if ( j < cardRowLength * 2 ){
			jc = j - cardRowLength;
			beforeH = cardWrap.find('.card').eq(jc).outerHeight();
			card.css({top:beforeH + 'px', left:cardWidth * jc + 'px'});
	
		}	else if ( j < cardRowLength * 3 ){
			jc = j - cardRowLength;
			var jc2 = j - cardRowLength*2;
			beforeH = cardWrap.find('.card').eq(jc).outerHeight() + 
								parseInt(cardWrap.find('.card').eq(jc).css('top'));
			card.css({top:beforeH + 'px', left:cardWidth * jc2 + 'px'});

		} else if ( j < cardRowLength * 4 ){
			jc = j - cardRowLength;
			var jc3 = j - cardRowLength*3;
			beforeH = cardWrap.find('.card').eq(jc).outerHeight() + 
								parseInt(cardWrap.find('.card').eq(jc).css('top'));
			card.css({top:beforeH + 'px', left:cardWidth * jc3 + 'px'});

		} else {
			card.hide();
		}
		*/
}; //function- cardSet


//로딩되자마자 수행
cardSet(winW); 
//매개변수가 중요해. 지금 winW는 로딩됐을 때 최초의 가로값

win.on('resize',function(){
	var nowWinW = win.outerWidth();
	//nowWinW는 브라우저 크기 변화됐을 때 가로값
	if( winW !== nowWinW ){
		cardSet(nowWinW);
	}
});
// -------
// $('#headBox').on('click',function(){
// 	RepeatCard(10);
// });

//스크롤 할 때마다 카드 갯수 늘어나기
$(document).on('scroll',function(){
	var nowScroll = win.scrollTop();
	var cardOffset = card.offset().top - win.outerHeight();

	if( nowScroll >= cardOffset && jCount <= maxCardLength){
		RepeatCard(25);
	}
});


}//$.ajax.sccess 종료
});//$.ajax 종료

	// jQuery 종료
})(jQuery);