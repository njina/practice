//resize_01.js
//페이지 사이즈 변환시 크기값 확인, 기능 부여하기


(function($){
	// jQuery 시작 

var win = $(window);
var p = $('p');
var widthS = p.children('.width_size');
var heightS = p.children('.height_size');
var widthR = p.children('.width_resize');
var heightR = p.children('.height_resize');

var boxSize = $('.box_size');

var winW = win.width();
var winH = win.height();
widthS.text(winW + 'px');
heightS.text(winH + 'px');
//사이즈를 줄인다고 바로 반영이 되진 않음. 사이즈 변경 후 새로고침해야함.

var timed = 500;
var min1000 = function(){
	$('#wrap').animate({'backgroundColor':'#acf'},timed);
};
var min800 = function(){
	$('#wrap').animate({'backgroundColor':'#fca'},timed*0.5);
};
var max799 = function(){
	$('#wrap').animate({'backgroundColor':'#fac'},timed*0.5);
};

if( winW >=1000 ){ 
	min1000();	
} else if ( winW >= 800) {
	 min800();
} else {
		max799();	
}


//브라우저(혹은 디바이스)의 크기가 달라지면 다음과 같은 기능을 수행해라.
//디바이스 변하는대로 실시간으로 달라진다.
win.on('resize',function(e){
	e.preventDefault();
	// winW = win.width();
	// winH = win.height();

	widthR.text(winW + 'px');
	heightR.text(winH + 'px');

	var winRW = win.width();
	console.log(winW + ':' + winRW); //최초 가로 : 변경된 가로값
	if( winW !== winRW ){
		//브라우저의 가로값이 변경되면, 가로값의 상황을 판단하여, 기능 처리하게 만들기
		boxSize.text('브라우저 새로고침했졍');
		
		location.reload(); //강제 새로고침하게 하는 기능
	}
});


console.log('가로:' , boxSize.width() );
console.log('가로+padding:' , boxSize.innerWidth() );
console.log('가로+padding+border:' , boxSize.outerWidth() );
console.log('가로+padding+border+margin:' , boxSize.outerWidth(true) );

console.log('padding-left', parseInt(boxSize.css('paddingLeft')) );
console.log('padding-right', parseInt(boxSize.css('paddingRight')) );
console.log('margin-right', boxSize.css('marginRight') );
console.log('margin', boxSize.css('margin') );
//위처럼 css로 확인할 때는 단위까지 나와서 숫자화(정수화)를 시켜주기도 한다.

//parseInt : 정수
//parseFloat : 소숫점까지
//Math.ceil : 올림 -숫자로 바꾸고 사용가능
//Math.round : 내림 -숫자로 바꾸고 사용가능


	// jQuery 종료
	})(jQuery);