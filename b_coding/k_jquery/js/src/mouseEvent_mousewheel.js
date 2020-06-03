//mouseEvent_mousewheel.js
//마우스 기능 중 마우스 휠


(function($){
	// jQuery 시작 

var colorArr = ['#fa0','#acf', '#cfa', '#5df', '#12a'];
var n = 0;

	//DOMMouseScroll 기능도 사용했음. - 파이어폭스에서만 이러하다
var mw = $('.mw');
mw.css({overflow:'hidden'});

var mwUl = mw.find('ul');
var mwLi = mw.find('li');
for (var i = 0; i < mwLi.length ; i++){
	mwLi.eq(i).css({backgroundColor:colorArr[i]});
}


var mouseOk = true;  //이거 중요해. 이거 안 하면 밑으로 휘리릭 갈수도 있어
mw.on('mousewheel DOMMouseScroll',function(e){
	// console.log(e.type);
	// console.log(e.originalEvent.wheelDeltaY);
	if(mouseOk){
		mouseOk=false;
		var evt = e.originalEvent;
		var mouseResult;
		if( evt.wheelDelta ){
			//크롬,엣지,웨일 등등
			// mouseresult = 'wheelDelta is here!!!';
			mouseResult = -evt.wheelDelta;
		} else {
			//파이어폭스 용
			// mouseResult = 'wheelDelta nooooooo';
			mouseResult = evt.detail * 40;
		}
	}
		console.log(mouseResult);

			//마우스휠 하면 색상변경
		if(mouseResult < 0 &&  n > 0){
			n -=1;
		}	else if ( mouseResult > 0 && n < colorArr.length ){ 
			n+=1;
		}
		mw.stop().animate({backgroundColor:colorArr[n]}, 300, function(){
			mouseOk = true;
		});

		//마우스휠하면 가로스크롤되면서 ... 
		mwUl.stop().animate({marginLeft: n*-100+'%'},500,'easeInCirc'
		,function(){
			mouseOk = true;
		});




		setTimeout(function(){ mouseOk=true; },100);
});










	// jQuery 종료
})(jQuery);