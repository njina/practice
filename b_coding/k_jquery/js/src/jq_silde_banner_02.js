//jq_silde_banner_02.js
//'문서에 대한 설명'


(function($){

	var miniP = $('#miniProduct');
	var miniIndi = miniP.find('.indicator');
	var miniIndiLi = miniIndi.find('li').children('a');

	var miniPlist = miniP.find('.product');
	var miniParea = miniPlist.children('ul');
	var timed = 700;

	miniPlist.css({'overflow':'hidden'});
	miniIndi.hide();
/*
miniIndiLi.on('click', function(e){
	e.preventDefault();
	var i = $(this).parent('li').index();
	var iPer = -i * 100;
	miniParea.stop().animate({'marginLeft': iPer +'%'}, timed);
});
*/

var miniPareaLi = miniParea.find('li');
var miniPliCopy = miniPareaLi.eq(-1).clone(true);

miniParea.prepend(miniPliCopy);
miniPareaLi = miniParea.find('li');
var mLilenT = miniPareaLi.length;

// clone하고나서, 이미지를 감싸는 wrap 박스의 크기 늘려주기.
// 각 이미지의 크기비율 수정하기
miniParea.css({'width': mLilenT * 100 + '%','position':'relative','left':-100 + '%'	});
miniPareaLi.css({'width': 100 / mLilenT + '%' });

	var i = 0;
  var MyProSlide = function(){
		i += 1;
		// if( i >= (mLilenT-1) ){ i = -1; }
		var iPer = -i * 100;
		miniParea.stop().animate({'marginLeft': iPer +'%'}, timed, function(){
			if( i >= mLilenT-2 ){	miniParea.css({'marginLeft': 100 + '%'});	i = -1;	}
		});
	};

	setInterval(function(){	MyProSlide();	}, timed*2);

// #miniProduct2 =================================================

var miniP2 = $('#miniProduct2');

var miniP2Btn = miniP2.find('.btn');
var miniNext = miniP2.find('.next');
var miniPrev = miniP2.find('.prev');

var miniBanner = miniP2.children('.product').find('ul');
var miniBanLast = miniBanner.find('li').eq(-1).clone(true);

miniBanner.prepend(miniBanLast);

var miniBan2Len = miniBanner.children('li').length;
miniBanner.css({'width':miniBan2Len * 100 + '%'});
miniBanner.children('li').css({'width': 100 / miniBan2Len + '%'});
miniBanner.css({'position':'relative', 'left': -100+'%'});


var n = 0;

miniNext.on('click',function(e){
	e.preventDefault();
	n += 1;
	// if(n>=3){n = 0;}
	miniBanner.stop().animate({'marginLeft': n * -100 + '%' }, timed, function(){
		console.log(n);
		if(n>= miniBan2Len-2){
			n =-1;
			miniBanner.css({'marginLeft':100 + '%'});
		}
	});

//종료-클릭시 함수
});

miniPrev.on('click',function(e){
	e.preventDefault();
	n -= 1;
	miniBanner.stop().animate({'marginLeft': n * -100 + '%'}, timed, function(){
		if(n < 0){ n = miniBan2Len-2;}
		miniBanner.css({'marginLeft':n * -100 + '%'});
	})
});

var myInterval;
var mySlide = function(){
	myInterval = setInterval(function(){ miniNext.trigger('click');}, timed*2);
 };
 mySlide();
//대신 처리하는 기능 trigger. 
//click을 하면 만들어둔 click시 기능을 수행해라.

//함수는 불러주기 전까지 나타나지 않는다ㅏ. 근데, 함수 내부에서는 불러도 몰라. 밖에서 불러줘야돼.

//자동으로 이동중인 슬라이드 배너 이미지에 mouseenter 했을 때 멈추는 기능
//clearInterval: setInterval 기능을 삭제하는 기능
miniP2.on('mouseenter',function(){
	clearInterval( myInterval );
});  //재생버튼으로 활용가능

miniP2.on('mouseleave',function(){
	mySlide();
});  //슬라이드 자동 이동 중지버튼으로 활용가능



//setInterval 은 함수로 감싸고 변수를 선언해서 사용하는 게 활용도가 높다.



})(jQuery);