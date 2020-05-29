//browser_resize_self.js
//문서에 대한 설명


(function($){
	// jQuery 시작 
	
var win = $(window);
var m1 = $('.motion_01');
var m2 = $('.motion_02');

var deviceTitle = [ "mobile", "tablet", "laptop", "pcfull" ];
var deviceSize = [ 640, 1280,	1600, 2560 ];
var deviceSetting = [
	{'title': deviceTitle[0], 'size' : deviceSize[0] },
	{'title': deviceTitle[1], 'size' : deviceSize[1] },
	{'title': deviceTitle[2], 'size' : deviceSize[2] },
	{'title': deviceTitle[3], 'size' : deviceSize[3] }
];

var i = 0;
var motionM1 = function(){
	m1.on('click',function(){
		i += 1;
		m1.append('<p>클릭시 나오는 문구'+ i +'</p>');
	});
};

 


// 상황 변경시 디자인스타일 변수선언
var winWidth = win.width();
var activeStyle = function(){
	if( winWidth < deviceSetting[0].size ){
		//640보다 작으면
		//실행문
		m1.css({'backgroundColor': '#ddd'});
	} else if ( winWidth < deviceSetting[1].size ){
		//1280보다 작으면
		//실행문
		m1.css({'backgroundColor': '#aaa'});
	} else if ( winWidth < deviceSetting[2].size ){
		//1600보다 작으면
		//실행문
		m1.css({'backgroundColor': '#888'});
	} else {
		//2560보다 작으면
		//실행문
		m1.css({'backgroundColor': '#444'});
	}
};
// activeStlye();

//디바이스 너비에 따른 속성 적용 변수 선언
var activeDevice = function(){ 
	if ( winWidth < deviceSetting[0].size ){
		activeStyle();
	} else if ( winWidth < deviceSetting[2].size ){
		activeStyle();
	} else if ( winWidth < deviceSetting[3].size ){
		activeStyle();
	} else {
		activeStyle();
	}
};
// activeDevice();


// var beforeWidth = deviceSetting.size[n];


//디바이스 너비 변경시 실행되는 모든 기능
win.on('resize',function(){
	//최초 너비와 변경 너비를 파악해라.
	//그 값이 다르면 아래의 실행문을 수행해라.
	
	var afterWidth = win.width();

	if ( winWidth !== afterWidth ){
		activeDevice();
}
	// m1.css({'backgroundColor':'#123'});
});






	// jQuery 종료
})(jQuery);