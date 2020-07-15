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
var touchOn = false; //mousemove때문에 만드는 변수
var doubleClick = true;

//e.which : 마우스의 버튼에 따른 key. 왼버튼 오른버튼 같은.. 

//최초위치(marginLeft) - (터치첫지점 - 터치이동지점 * -1)
//터치 시작
part02.on('touchstart mousedown',function(e){
	var start;
	var part02Left;
	var eType = e.type;

	if(eType == 'touchstart'){
		start = e.touches[0].pageX;
	} else if (eType == 'mousedown' && e.which == 1 && doubleClick){
		start = e.originalEvent.pageX;
		touchOn = true;
		doubleClick = false;
	}
	// console.log(start);

	part02Left = parseInt(part02Wrap.css('marginLeft')); //순서가 핵심!!!
	startPosX = part02Left - start;
	// startPosX = start;
});

//터치 움직임
part02.on('touchmove mousemove',function(e){
	var nowPosX;
	var nowMoveX;
	var eType = e.type;
	// console.log(e)
	
	// -------두가지 이벤트 나눠서..하기
	if(eType == 'touchmove'){
		nowPosX = e.changedTouches[0].pageX;
	} else if(eType == 'mousemove' && touchOn == true){
		nowPosX = e.originalEvent.pageX;
	}
	nowMoveX = parseInt(startPosX - nowPosX * -1);
	console.log(nowMoveX);
// ----------
	if(nowMoveX > 0){
		nowMoveX = 0;
	} else if (nowMoveX <= -(p02Width - part02MinWidth)){
		nowMoveX = p02Width - part02MinWidth;
	} else {
		part02Wrap.css({marginLeft:nowMoveX + 'px' });
	}
});

//드래그 끝났을 때
part02.on('touchend mouseup',function(e){
	e.preventDefault();
	touchOn = false;
	doubleClick = true;
});













// ----------------------------
// 3번째----------------------------
var part03 = $('.part_03');
var p03Wrap = part03.children('.slide_wrap');
var p03List = p03Wrap.children('div');
var p03MarginLeft = [];
var i = 0;
for(; i < p03List.length ; i++){
	p03MarginLeft[i] = p03List.eq(i).offset().left - p03List.eq(0).offset().left;
}

var beforePoint; //마우스 시작하기 전 margin-left값

var startPoint; //마우스 클릭시 위치값(pageX)
var movePoint; //마우스 이동시 위치값(pageX)
var endPoint; 


p03Wrap.css({position:'relative'});
var l = 0;
var p03True = true; //마우스 수행에 따라서 중복처리 막기위한. 만약에 터치를 두손가락으로 각각하면 첫번째 터치만 먹어야되잖아. 그거를 위한 거.
var p03MoveOn = false; //mousedown하는 도중에만 mousemove 수행되게 하는 거

//시작
part03.on('touchstart mousedown',function(e){
	if(p03True){
		p03True = false;

		var eType = e.type;
		var posX;	
		
		if(eType == 'touchstart'){
			posX = e.touches[0].pageX;
		} else if(eType == 'mousedown'){
			p03MoveOn = true;
			posX = e.originalEvent.pageX;
		}
		
		startPoint = posX;
	}
});

//중간
part03.on('touchmove mousemove',function(e){
	var eType = e.type;
	var posX;

	if(eType == 'touchmove'){
		posX = e.changedTouches[0].pageX;
	} else if(eType == 'mousemove' && p03MoveOn == true){
		posX = e.originalEvent.pageX;
	}
	
	movePoint = startPoint - posX;
	p03Wrap.css({left: -movePoint + 'px'});
});

var myMarginLeft = parseInt(p03Wrap.css('marginLeft'));

//끝
part03.on('touchend mouseup',function(e){
	if(movePoint > 300 && l < p03List.length-1){
		l += 1;
	} else if(movePoint < -300 && l > 0){
		l -= 1;
	} else {
 		l = l;
	}

	p03MoveOn = false;
	p03Wrap.animate( {left:0, marginLeft: -p03MarginLeft[l]}, 300, function(){
		p03True = true;
	});
});













//추가적으로 다른 이벤트 메소드
//선택자.on('event')
//선택자.one('event')
//선택자.off('event')



	// jQuery 종료
})(jQuery);