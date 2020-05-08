// jq_eventBasic.js

(function(){

// css , animate==================================
var css = $('.css');
var ani = $('.animate');

// css.css({width:'50rem' , backgroundColor:'#1d2ddd' , color:'#fff'});
// ani.animate({width:'50rem', backgroundColor:'#145' , color:'#fff'}, 1000, 'linear', function(){
// 	ani.animate({width:'10rem' , backgroundColor:'#111'}, 3000, function(){
// 		css.animate({width:'20rem', height:'20rem', backgroundColor:'#11aa11'})
// 		ani.animate({width:'20rem', height:'20rem', backgroundColor:'#11aa11'})
// 	})
// });

// 중괄호 밖에 단위없이 1000이라고 기재. 1000은 1초

/*
jQuery 문서에서는 시간의 흐름을 가지고 있는 기능들은 '콜백함수'의 기능을 가질 수 있다.
  ??콜백함수??  함수 안에 다른 함수를 다시 만들어쓰는 거
*/

// event ==================================
/*
이벤트: 어떤 행동을 취하는 모든 것을 이벤트라고 한다. 기존의 형태에서 무언가 변화가 일어나는 형태
예시) 
  마우스 - 마우스를 올렸을 경우, 마우스를 벗어났을 경우, 클릭, 마우스를 움직일 경우, 드래그
	키보드 - 키보드 누르는 거, 손 떼는 거
	브라우저 스크롤바 움직이는 경우
	브라우저 화면 크기 변경되는 경우, 반응형...

*원소유 :
	a 요소 : 클릭시  이동처리 되는 형태
	button 요소 : 클릭시 자료를 전송/취소 ... 
*/

// 선택자.on([이벤트기능], function(){});
var evt_01 = $('.evt_01');
var evt_02 = $('.evt_02');

evt_01.on('mouseenter', function(){
	evt_01.animate({backgroundColor:'#ddddff', fontSize:'2rem'},1000);
});

evt_02.on('focus', function(){
	evt_02.css({'backgroundColor':'#fad'},1000);
});
evt_02.on('blur', function(){
	evt_02.css({'backgroundColor':'#1111ff'},1000);
});
evt_02.on('keyup',function(event){
	console.log(event.key, event.keyCode);
	
});
//keyup: 키보드를 눌렀다 떼는 그 시점











//종료 
})();