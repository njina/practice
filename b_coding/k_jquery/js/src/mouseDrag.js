//mouseDrag.js
//터치/마우스 드래그


(function($){
	// jQuery 시작 

	var part = $('.part');
	var part01 = $('.part_01');
	var beforePosX;
	var afterPosX;
	var part01Wrap = part01.find('.slide_wrap');
	var p01Width = part01Wrap.outerWidth();
	var p01MinWidth = part01Wrap.find('div').eq(0).outerWidth();
	var p01Left = parseInt(part01Wrap.css('marginLeft'));
	var mvResult = p01Left;

	part01Wrap.css({marginLeft: p01Left});

	var touchDrag = function(){
		p01Left = part01Wrap.css('marginLeft');
		var result = beforePosX - afterPosX;
		if( result < -20 ){
			mvResult = mvResult + p01MinWidth;

			if(mvResult <= 0){
				part01Wrap.animate({marginLeft: mvResult});
			} else {
				result = 0;
			}


		} else if( result > 20 ) {
			mvResult = mvResult - p01MinWidth;
			
			if(mvResult < -(p01Width-p01MinWidth)){
				mvResult = -(p01Width-p01MinWidth);
			}else {
				part01Wrap.animate({marginLeft: mvResult});		
			}	
		}
		console.log(mvResult);
	};


// ====================
//드래그/터치 시작하는 시점
//touchstart : 터치를 시작하는 그 지점(터치패드나 터치가 되는 디스플레이에서만 구현 가능)
	part01.on('touchstart mousedown',function(e){
		var eType = e.type;
		var PosX;
		//터치는 originalEvent 에 없고, touches에 이벤트 모음이 있다.
		// console.log(e.touches[0].pageX);
		// console.log(e.touches[0].pageY);
		
		if(eType == 'touchstart'){
			PosX = e.touches[0].pageX;
		} else if (eType == 'mousedown'){
			PosX = e.originalEvent.pageX;
		}
		beforePosX = PosX;
		// console.log(PosX);
	});
	
	
// ====================
	//드래그/터치 끝나는 시점
	part01.on('touchend mouseup',function(e){
		var eType = e.type;
		
		//즉시실행함수. 외부에서 못보게
		(function(){
			var PosX;

			if(eType == 'touchend'){
				PosX = e.changedTouches[0].pageX;
			} else if (eType == 'mouseup'){
				PosX = e.originalEvent.pageX;
			}
			return afterPosX = PosX;
		})();

		touchDrag();
	});
// =================================================
// =================================================
// 2. 실시간으로 드래그 할때 이미지 움직이도록===========================
// 터치/드래그 이동시 처리
var touchOn = false;
var part02 = $('.part_02');
var part02Wrap = part02.find('.slide_wrap');
var p02Width = part02.find('.slide_wrap').outerWidth();
var part02MinWidth = part02.find('.slide_wrap').children('div').eq(0).outerWidth();

var startPosX;

//최초위치(marginLeft) - (터치첫지점 - 터치이동지점 * -1)
//터치 시작
part02.on('touchstart',function(e){
	var start = e.touches[0].pageX;
	var part02Left = parseInt(part02Wrap.css('marginLeft')); //순서가 핵심!!!
	startPosX = part02Left - start;
});

//터치 움직임
part02.on('touchmove',function(e){
	var nowPosX = e.changedTouches[0].pageX;
	var nowMoveX = startPosX - nowPosX * -1;
	// console.log(nowMoveX);
	if(nowMoveX > 0){
		nowMoveX = 0;
	} else if (nowMoveX <= -(p02Width - part02MinWidth)){
		nowMoveX = p02Width - part02MinWidth;
	} else {
		part02Wrap.css({marginLeft:nowMoveX + 'px' });
	}
});







	// jQuery 종료
})(jQuery);