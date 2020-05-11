//jq_display.js
//제이쿼리 display 기능 이해하기

(function($){


//========================none,block,toggle
//css 을 직접적으로 컨트롤
var dpBox = $('.display_box');
var btn = $('.btn').children('button');
// console.log(btn.length);

dpBox.css({ 'display':'none' });

//display:block
btn.eq(0).on('click', function(e){
	e.preventDefault();  //submit, cancel 의 기능을 상실해라
	dpBox.css({ 'display':'block' });		
});

//display:none
btn.eq(1).on('click', function(e){
	e.preventDefault();
	dpBox.css({ 'display':'none' });		
});

//display: toggle
btn.eq(2).on('click', function(e){
	e.preventDefault();
	var dpV = dpBox.css('display');
	
	if(dpV === 'block'){
		dpBox.css( {'display':'none'} );
	}else{
		dpBox.css({'display':'block'});
	}
});
	
// ===================================
//css를 jq에서 메소드로 컨트롤

//show
btn.eq(3).on('click', function(e){
	e.preventDefault();
	dpBox.show(1000);
});

//hide
btn.eq(4).on('click', function(e){
	e.preventDefault();
	dpBox.hide(1000);
});

//toggle
btn.eq(5).on('click', function(e){
	e.preventDefault();
	dpBox.toggle(2000);
});

// ===================================
//fadeIn
btn.eq(6).on('click', function(e){
	e.preventDefault();
	dpBox.stop().fadeIn(1000);
});

//fadeOut
btn.eq(7).on('click', function(e){
	e.preventDefault();
	dpBox.stop().fadeOut(2000);
});

//fadeToggle
btn.eq(8).on('click', function(e){
	e.preventDefault();
	dpBox.stop().fadeToggle(500);
});


// ===================================
//slideDown
btn.eq(9).on('click', function(e){
	e.preventDefault();
	dpBox.slideDown();
});

//slideUp
btn.eq(10).on('click', function(e){
	e.preventDefault();
	dpBox.slideUp(5000);
});

//slideToggle
btn.eq(11).on('click', function(e){
	e.preventDefault();
	dpBox.slideToggle();
});

// ===================================
//addClass
btn.eq(12).on('click', function(e){
	e.preventDefault();
	dpBox.addClass('action');
});

//removeClass
btn.eq(13).on('click', function(e){
	e.preventDefault();
	dpBox.removeClass('action');
});

//
btn.eq(14).on('click', function(e){
	e.preventDefault();
	// var dpA = dpBox.attr('class');
	// var dpS = dpA.split('');
	// console.log(dpS);
	// if(dps[1] == 'action')

	// var dpAc = dpBox.hasClass('action'); //css 에서 action이라는 클래스가 있는지 유무를 판단해서 아래의 조건문을 수행하라.
	// if(dpAc === false){
	// 	dpBox.addClass('action');
	// }else{
	// 	dpBox.removeClass('action');
	// }
	// //위의 if문을 아래 처럼 줄일 수 있음.
	// dpAc === false ? dpBox.addClass('action') : dpBox.removeClass('action');

	// //위의 조건문을 역으로 기능하라는 의미(!(느낌표)의 기능)
	// !dpAc ? dpBox.addClass('action') : dpBox.removeClass('action');

	dpBox.toggleClass('action');


});








// 종료태그
})(jQuery);