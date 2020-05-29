//gallary.js
//갤러리 메뉴에 활용되는 기능
//방법1: html문서에서 큰 이미지의 경로/파일을 직접 입력해서 가져오게 하기
//방법2: js를 통해서 경로 입력해서 처리하게 만들기


(function($){
	// jQuery 시작 

//방법1: html문서에서 큰 이미지의 경로/파일을 직접 입력해서 가져오게 하기

var part01 = $('.part_01');
var bigRec = $('.big_rec');
var part01Li = part01.find('li');
var part01LiLink = part01Li.children('a');
var bigSource = '../img/dog_gallery/big/';

part01LiLink.on('click',function(e){
	e.preventDefault();

	// var thisImg = $(this).css('backgroundImage'); //css에서 이미지 가져오기
	var thisImg = $(this).parent('li').attr('data-img'); //html에서 이미지 가져오기
	console.log(thisImg);
	bigRec.css({backgroundImage:'url('+ bigSource + thisImg + ')'});
});




//방법2: js를 통해서 경로 입력해서 처리하게 만들기
var thumList = [
	'dog_01.jpg',
	'dog_02.jpg',
	'dog_03.jpg',
	'dog_04.jpg',
	'dog_05.jpg'
];

var bigList = [
	'dog_01.jpg',
	'dog_02.jpg',
	'dog_03.jpg',
	'dog_04.jpg',
	'dog_05.jpg'
];

var thumUrl = '../../img/dog_gallery/thum/';
var bigUrl = '../../img/dog_gallery/big/';

var gallaryList ={
	thumUrl : thumUrl, 
	thumList : thumList, 
	bigUrl : bigUrl,
	bigList : bigList
};

var part02 = $('.part_02');
var partRec = part02.find('.big_rec');
var thumImg = part02.find('.thum_img');

var i = 0;
for(; i < thumList.length ; i++ ){
	thumImg.append('<li><a href="#"><span></span></a></li>');
	thumImg.find('li').eq(i).children('a').css({backgroundImage:'url(' + thumUrl + gallaryList.thumList[i] + ')'});
}

var p2thumLi = thumImg.find('li');
var p2thumLiLink = p2thumLi.find('a');

p2thumLiLink.on('click',function(e){
	e.preventDefault();
	var itIndex = $(this).parent('li').index();
	partRec.css({backgroundImage:'url('+ bigUrl + gallaryList.bigList[itIndex] +')'});
});

p2thumLi.eq(0).find('a').trigger('click');



//3번.popup창(모달윈도우) 만들기

var bigModal = $('.big_modal');
var bigModalBtn = bigModal.find('button');
var part03 = $('.part_03');
var part03Ul = part03.find('ul');
var part03Li = '<li><a href="#"><span></span></a></li>';

i = 0
for(; i < gallaryList.thumList.length ; i++ ){
	part03Ul.append( part03Li );
	part03Ul.find('li').eq(i).children('a').css({backgroundImage:'url(' + thumUrl + gallaryList.thumList[i] + ')'});
}

var n = 0;
var p03Link = part03Ul.find('li').children('a');
p03Link.on('click',function(e){
	e.preventDefault();
	bigModal.fadeIn();
	var itIndex = $(this).parent().index();
	n = itIndex;

	bigModal.find('.big_img').css({backgroundImage:'url('+ bigUrl + gallaryList.bigList[itIndex] +')', backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'50% 50%'});

	bigModal.fadeIn(function(){
		$(window).on('keyup',function(evt){
			var keyCode = evt.keyCode;
			// console.log(keyCode);
			// 왼 37, 오른 39, esc 27
			if(keyCode == 37){
				n-=1 ;
				if( n < 0 ){ n = gallaryList.thumList.length-1; }
				bigModal.find('.big_img').css({backgroundImage:'url('+ bigUrl + gallaryList.bigList[n] +')'});
			}else if( keyCode == 39 ){
				n+=1;
				if( n > gallaryList.thumList.length-1 ){ n =0; }
				bigModal.find('.big_img').css({backgroundImage:'url('+ bigUrl + gallaryList.bigList[n] +')'});
			}else if( keyCode == 27){
				bigModal.fadeOut(400);
				p03Link.eq(0).focus();
			}
		});
	});
});

bigModalBtn.on('click',function(e){
	e.preventDefault();
	bigModal.fadeOut(400);
});




	// jQuery 종료
})(jQuery);