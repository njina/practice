//jq_scrollOffset.js
//제이쿼리 offset 과 scroll

(function($){
// jQuery 시작 

$(document).on('scroll',function(e){
	
	var myScroll = $(this).scrollTop();
	// console.log(myScroll);

	if (myScroll > 300) {
		$('#headBox').css({ 'position':'fixed', 'top':0 });
	}else{
		$('#headBox').removeAttr('style');
	}

});

$('#wrap').on('click',function(){
	$('html,body').animate({'scrollTop':'500px'});
	// $('document').scrollTop('500px');
});


// offset( ).top
// : 브라우저 상단에서부터 원하는 개체가 얼만큼 떨어져 있는지 확인하는 기능

var headBox = $('#headBox')
var hT = headBox.offset().top;

$(document).on('scroll', function(){
	// var doScroll = $(this).scrollTop();
	// var doOffset = headBox.offset().top;

	var docSt = $(document).scrollTop();  //스크롤의 위치 파악
	if( docSt > hT ){
		headBox.css({'position':'fixed', 'top':'0'});
	}else{
		headBox.removeAttr('style');
	}

});

// 비디오==========================================
var bodyH = $('body').height();
// console.log(bodyH);
$('#viewBox').height(bodyH);

// ㅇ졔==========================================

var viewBox = $('#viewBox');
var viewBoxH2 = viewBox.children('h2');
var viewVideo = viewBox.find('.video');
var titelBg = $('.title_bg');

var conBgP = $('.con_img').css('backgroundPositionY');
var parseCon = parseInt(conBgP);
console.log( parseCon);


$(document).on('scroll', function(){

	var doScroll = $(document).scrollTop();
	// viewBoxH2.css({'marginTop': doScroll/10});
	
	viewBoxH2.css({'marginTop':doScroll/2+'px'});
	viewVideo.css({'marginTop':doScroll*1.2+'px'});
	
	var ot = -doScroll/3;
	titelBg.css({'marginTop':ot *  0.7 + 'px'})
	titelBg.children('h2').css({'marginTop':ot *  0.8 + 'px'})

	$('.con_img').css({'backgroundPositionY':50-(ot/10) + '%'})




});






// jQuery 종료 
})(jQuery);