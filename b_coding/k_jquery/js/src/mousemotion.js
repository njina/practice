//mousemotion.js
//jquery 중고급기능 - 마우스 모션


(function($){
	// jQuery 시작 

//clientX, clientY : 브라우저 페이지 기준(스크롤X)
//pageX, pageY : 브라우저 페이지 기준(스크롤o)
//offsetX, offsetY : 이벤트 대상객체
//screenX, screenY : 모니터 스크린 기준

var mouseXYCheck = $('.mouse_xy');
var mX = $('.m_x').find('span');
var mY = $('.m_y').find('span');
var x = 0;
var y = 0;
var mObject = $('.mouse_object');
var mouseXYCheckW = mouseXYCheck.innerWidth() / 2;
var mouseXYCheckH = mouseXYCheck.innerHeight() / 2;

mouseXYCheck.on('mousemove',function(e){
	e.preventDefault();
	
	// console.log(e.clientX, e.clientY);
	// console.log(e.pageX, e.pageY);
	// console.log(e.offsetX, e.offsetY);
	// console.log(e.screenX, e.screenY);
	x = (e.offsetX - mouseXYCheckW) / 20;
	y = (e.offsetY - mouseXYCheckH) / 10;

	mObject.css({transform:'translate(' + x +'%,' + y + '%) rotateX('+x+'deg) rotateY('+y+'deg)'});

	mX.text(e.offsetX);
	mY.text(e.offsetY);
	
});


// mouseXYCheck.on('mousemove',function(e){
// 	e.preventDefault();
// 	x = (e.offsetX - mouseXYCheckW) / 10+ 'px';
// 	y = (e.offsetY - mouseXYCheckH) / 30 + 'px';
// 	x2 = (e.offsetX - mouseXYCheckW) / -3 + 'px';
// 	y2 = (e.offsetY - mouseXYCheckH) / -1 + 'px';
// 	mObject.find('p').eq(0).css({transform:'translate('+ x +',' + y+')'});
// 	mObject.find('p').eq(1).css({transform:'translate('+ y2 +',' + x+')'});
// });

// mObject.on('mouseleave',function(e){
// 	e.preventDefault();
// 	mObject.find('p').removeAttr('style');
// });










	// jQuery 종료
})(jQuery);