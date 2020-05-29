//browser_resize.js
//jQuery 브라우저 사이트 변경시 함수 적용


(function($){
	// jQuery 시작 

var m1 = $('.motion_01');
var m2 = $('.motion_02');

var MotionM1 = function(myC){
	var myColor = myC || '#ccc';
	// (myC == undefined) ? myColor = '#078': myColor = myC; //위의 줄과 같은 의미 || 파이프바
	m1.on('mouseenter',function(){
		$(this).stop().animate({'backgroundColor': myColor});
		$(this).append('<p>mouseenter하면 내용</p>');
	});
};

var MotionM2  = function(){
	m2.on('click',function(e){
		e.preventDefault();

		$(this).css({'backgroundColor':'#ddd'});
		$(this).prepend('<p>어려워</p>');
	});
};

//디바이스 환경을 세팅
var deviceName = [ "mobile", "tablet", "laptop", "pcfull" ];
var deviceWidth = [
	{ 'size' : 640 , 'title' : deviceName[0]  },
	{ 'size' : 1280 , 'title' : deviceName[1] },
	{ 'size' : 1600 , 'title' : deviceName[2] },
	{ 'size' : 2560 , 'title' : deviceName[3] }
];

var win = $(window);
var ww = win.outerWidth(true);  //현재의 가로값 파악
var beforeDevice, afterDevice;  //변경 전, 변경 후 변수

//상황에 따라서 바뀔 수 있게. widehSize -> 매개변수/인수. 저 widthSize 부분에 ww가 들어갈 수 도 있고, nw가 들어갈수도 있어. 상황에 따라 바뀌는 거지. 쉽게 말해서, 템플릿을 만들어 놓고, 그 안에 내용을 바꿔서 적용하는 거지~
var DeviceAction = function( widthSize ){
	var  nowDevice;
	if( widthSize < deviceWidth[0].size ){
		nowDevice = deviceWidth[0].title;
	} else if ( widthSize < deviceWidth[1].size ){
		nowDevice = deviceWidth[1].title;
	} else if ( widthSize < deviceWidth[2].size ){
		nowDevice = deviceWidth[2].title;
	} else {
		nowDevice = deviceWidth[3].title;
	}

	// if( widthSize > deviceWidth[1].size ){
	// 	MotionM1();
	// }
	return nowDevice; //안 쓰면 undifined 나옴. 내부변수이기 때문에 외부에서 모름.
};

beforeDevice = DeviceAction(ww);   //변경 전 상황 기억
console.log( beforeDevice );

// 사이즈 변경 후, 적용할 디자인========================================
var ActiveStyle = function( widthSize ){
	if( widthSize < deviceWidth[0].size ){
		MotionM1('#111');
	} else if ( widthSize < deviceWidth[1].size ){
		MotionM1('#f00');
	} else if ( widthSize < deviceWidth[2].size ){
		MotionM1('#0f0');
	} else {
		MotionM1('#00f');
	}
};
ActiveStyle();
// ========================================


win.on('resize',function(){
	var nw = win.outerWidth(true);
	afterDevice = DeviceAction( nw );  //변경 후 상황 기억. 따로 만든 변수.
	console.log( beforeDevice + ':' + afterDevice);
	if(beforeDevice !== afterDevice){ //변경 전,변경 후의 상황이 다르면 수행해라.
		//device 상황에 따른 변경되어 수행할 내용을 작성
		var i = deviceName.indexOf(afterDevice);
		console.log(i);

		ActiveStyle( deviceWidth[i].size );
		$('.motion_01').append('<p>사이즈바뀌면 나오는 문장</p>');
		beforeDevice = afterDevice; //변경 전 변수를 변경 후 변수로 변경해라.
	}
});




	// jQuery 종료
})(jQuery);
