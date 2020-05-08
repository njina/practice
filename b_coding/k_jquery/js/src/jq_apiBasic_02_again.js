//jq_apiBasic_02_again.js
//jq_apiBasic_02.js 에서 나혼자서 다시 해보는 거


(function($){

var h1 = $('h1');
var h2 = $('h2');

var headBox = $('#headBox');
var gnbBox = $('#gnbBox');
var viewBox = $('#viewBox');
var conBox = $('#conBox');
var footBox = $('#footBox');

//1번 문제: h1 옮기기
headBox.prepend(h1);

//2번 문제: <h2>navigation</h2> 숨기기
gnbBox.children('h2').attr({'class':'hidden'});

//3-1번 문제: list 10개 이상  생성
gnbBox.children('ul').append('<li>새로운 엘아이01</li>');
gnbBox.children('ul').append('<li>새로운 엘아이02</li>');
gnbBox.children('ul').append('<li>새로운 엘아이03</li>');
gnbBox.children('ul').append('<li>새로운 엘아이04</li>');
gnbBox.children('ul').append('<li>새로운 엘아이05</li>');
gnbBox.children('ul').append('<li>새로운 엘아이06</li>');
gnbBox.children('ul').append('<li>새로운 엘아이07</li>');
gnbBox.children('ul').append('<li>새로운 엘아이08</li>');
gnbBox.children('ul').append('<li>새로운 엘아이09</li>');
gnbBox.children('ul').append('<li>새로운 엘아이10</li>');
gnbBox.children('ul').append('<li>새로운 엘아이11</li>');
gnbBox.children('ul').append('<li>새로운 엘아이12</li>');

//3-2번 문제: a 태그 생성, a 에 링크 생성
// var gnbLi = gnbBox.find('li');
// var gnbLen = gnbLi.length;

// var i = 0;
// for(; i < gnbLen ; i++ ){
// 	var gnbLiText = gnbLi.eq(i).gnbLi.text();
// 	gnbLi.eq(i).html('<a>' + gnbLiText + '</a>');
// }


//4번 문제: h2 요소 생성
conBox.prepend('<h2>제목</h2>');
footBox.prepend('<h2>제목</h2>');

//5번 문제: button 요소 2개 생성 .next_btn .prev_btn
viewBox.find('.view_btn').prepend('<button type="button" class="next_btn">next</button>');
viewBox.find('.view_btn').prepend('<button type="button" class="prev_btn">prev</button>');














// 종료
})(jQuery);