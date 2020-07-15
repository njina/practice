// myDrag.js
// 터치/마우스 드래그 연습

(function($){
// jQuery 시작

//선택자
var part = $('.part');
var dragWrap = $('.drag_wrap');
var slide = dragWrap.children('div');
var partWidth = part.outerWidth();
var dragWrapWidth = dragWrap.outerWidth();
var slideFirstWidth = slide.eq(0).outerWidth();


//함수 내에서 선언된 변수
var startPoint;
var moveDistance;
var endPoint;


var movePermit = false;

//시작점 ----------------
var startMarginLeft = parseInt(dragWrap.css('marginLeft'));
part.on('touchstart mousedown',function(e){
	var eType = e.type;
	var posX;

	if(eType == 'touchstart'){
		posX = e.touches[0].pageX;
	} else if(eType == 'mousedown'){
		movePermit = true;
		posX = e.originalEvent.pageX;
	}
	
	
	console.log('startMarginLeft: ' + startMarginLeft);
	startMarginLeft = parseInt(dragWrap.css('marginLeft'));
	startPoint = startMarginLeft - posX;
});

//움직인 거리 포착 ----------------
part.on('touchmove mousemove',function(e){
	var eType = e.type;
	var posX;

	if(eType == 'touchmove'){
		posX = e.changedTouches[0].pageX;
	} else if(eType == 'mousemove' && movePermit){
		posX = e.originalEvent.pageX;
		// console.log(posX)
	}

	
	moveDistance = startPoint + posX; //이 소스가 클릭한 위치부터 움직이게 하는거
	console.log(moveDistance)
	dragWrap.css({marginLeft: moveDistance+'px'});
// -----

//동작안됨
	// if(moveDistance < 0){
	// 	moveDistance = 0;
	// } else if (moveDistance >= -(partWidth - slideFirstWidth)){
	// 	moveDistance = partWidth - slideFirstWidth;
	// } else {
	// 	dragWrap.css({marginLeft: moveDistance + 'px' });
	// }
});

//끝점 ----------------
part.on('touchend mouseup',function(e){
	var eType = e.type;
	var posX;

	setTimeout(function(){
		movePermit = false;
	}, 30)

});




// jQuery 종료
})(jQuery);