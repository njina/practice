// myDrag.js
// 터치/마우스 드래그 연습

(function($){
// jQuery 시작

//선택자
var dragWrap = $('.drag_wrap');
var slide = dragWrap.children('div');

//함수 내에서 선언된 변수
var startPoint;
var startMarginLeft;
var moveDistance;
var endPoint;

var movePermit = false;

//시작점 ----------------
dragWrap.on('touchstart mousedown',function(e){
	var eType = e.type;
	var posX;

	if(eType == 'touchstart'){
		posX = e.touches[0].pageX;
	} else if(eType == 'mousedown'){
		movePermit = true;
		posX = e.originalEvent.pageX;
	}
	startPoint = posX;

	startMarginLeft = dragWrap.css('marginLeft');
});

//움직인 거리 포착 ----------------
dragWrap.on('touchmove mousemove',function(e){
	var eType = e.type;
	var posX;

	if(eType == 'touchmove'){
		posX = e.changedTouches[0].pageX;
	} else if(eType == 'mousemove' && movePermit){
		posX = e.originalEvent.pageX;
		console.log(posX)
	}

	
	// moveDistance = startMarginLeft - startPoint;
	moveDistance = posX - startPoint;

	dragWrap.css({marginLeft: moveDistance+'px'});
	//!!!!!!! 클릭하고 드래그 할 때, 클릭한 지점에서부터 움직이지 않고, 클릭한 지점보다 앞에서부터 움직인다.!!!!!!!!!!(수정해야돼)

});

//끝점 ----------------
dragWrap.on('touchend mouseup',function(e){
	var eType = e.type;
	var posX;

	movePermit = false;

});




// jQuery 종료
})(jQuery);