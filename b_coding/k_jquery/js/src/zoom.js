//zoom.js
//마우스오버시 확대되서 보이는 기능


(function($){
	// jQuery 시작 


	//갤러리 이미지 목록 생성
	var url = '../img/dog_gallery/'
	var galleryImg = {
		'big': ['dog_01.jpg','dog_02.jpg','dog_03.jpg','dog_04.jpg','dog_05.jpg','dog_06.jpg','dog_07.jpg'],
		'thum': ['dog_01.jpg','dog_02.jpg','dog_03.jpg','dog_04.jpg','dog_05.jpg','dog_06.jpg','dog_07.jpg'],
		'thumAlt': ['설명_01','설명_02','설명_03','설명_04','설명_05','설명_06']
	};
	var product = $('.product');
	var big = product.find('.big');
	var thum = product.find('.thum');
	var zoom = product.find('.zoom');
	var zoom2 = product.find('.zoom2');
	
	thum.append('<ul></ul>');
var thumUl = thum.find('ul');
var i = 0;
var thumLength = galleryImg.thum.length;
for(; i<thumLength ; i++){
	thumUl.append('<li><a href="#"><span>썸네일이미지설명</span></a></li>');
	thumUl.find('li').eq(i).children('a').css({backgroundImage:'url(' + url + 'thum/' + galleryImg.thum[i] + ')'});
}

var index = 0;
big.css({backgroundImage:'url(' + url + 'big/' + galleryImg.big[index] + ')'});

//첫번째 썸네일에 자동 포커스
var thumLi = thumUl.find('li');
thumLi.eq(index).children('a').focus();

thumLi.children('a').on('click',function(e){
	index = $(this).parent('li').index();
	big.css({backgroundImage:'url(' + url + 'big/' + galleryImg.big[index] + ')'});
});


var baseWidth = big.innerWidth();
var baseHeight = big.innerHeight();

big.on('mousemove',function(e){
	//좌표 위치
	var evtLocationX = e.originalEvent.offsetX;
	var evtLocationY = e.originalEvent.offsetY;

	//좌표 위치 %체크
	var xPer = parseInt(evtLocationX / baseWidth * 100);
	var yPer = parseInt(evtLocationY / baseHeight * 100);
	console.log(xPer, yPer);
	
	zoom.stop().show();
	zoom.css({
		backgroundImage:'url(' + url + 'big/' + galleryImg.big[index] + ')',
		backgroundPosition: xPer + '%' + ' ' + yPer + '%'
	});

	//마우스커서 따라다니면서 확대되는 거
	var evtPageX = e.originalEvent.pageX;
	var evtPageY = e.originalEvent.pageY;

	zoom2.css({top:evtPageY+10, left:evtPageX+10});
	zoom2.stop().show();
	zoom2.css({
		backgroundImage:'url(' + url + 'big/' + galleryImg.big[index] + ')',
		backgroundPosition: xPer + '%' + ' ' + yPer + '%'
	});


	//mousemove 종료
});

big.on('mouseleave',function(e){
	zoom.stop().hide();
	zoom2.stop().hide();
});



	// jQuery 종료
})(jQuery);