// jq_apiBasic_02.js

/*
아래의 3가지 함수는 다 같은 의미이다. 사람에 따라 다를 수 있고, 어떤 것을 사용하든 상관없다.

$.ready(function(){});
$(functioin(){});
$(document).ready(function(){});
*/

(function($){

var h1 =  $("h1");
var headBox = $("#headBox");
var gnbBox = $("#gnbBox");
var gnbList = gnbBox.find("li")

var viewBox = $("#viewBox");
var conBox = $("#conBox");
var footBox = $("#footBox");


// headBox.prepend(h1);    //headBox 내부 앞에 h1을 담아라
h1.prependTo(headBox);   // h1을 headBox 내부 앞에 담아라

gnbBox.prepend('<div class="gnb_btn><button type="button">메뉴</button></div>');

var gnbLen = gnbList.length;
console.log(gnbLen);

var i = 0;
var gnbListText; //일단 변수를 언질만 해놓고, for문 안에다가 선언을 한거야

for(; i < gnbLen; i++ ){
	gnbListText = gnbList.eq(i).text();
	gnbList.eq(i).html('<a href="#">' + gnbListText + '</a>');
}
//순수 js라면 gnbList[0]이라고 쓸텐데, jq는 gnbList.eq(0) 이라고 쓴다.

//===============================================================

var gnbLinkArr = [
	'http://naver.com',
	'http://daum.net',
	'http://google.com',
	'http://xidoweb.com'
	// 배열인데, 콤마 각각 인덱스 구분해줘야해!!
];

var j = 0;  //새로운 변수를 선언해도 되지만, i = 0; 이라고 해도 된다.
var liLink;

for (; j < gnbLen ; j++ ){
	liLink = gnbList.eq(j).children('a');
	liLink.attr({ 'href': gnbLinkArr[j] , 'target':'_blank' , 'title':gnbLinkArr[j]});
}

// ===========================h2 생성

// 첫번째 방법
// viewBox.prepend('<h2>뷰박스 h</h2>');
// conBox.prepend('<h2>컨박스 h</h2>');
// footBox.prepend('<h2>풋박스 h</h2>');

// 두번째 방법 
// viewBox.prepend('<h2>' + '뷰박스 h' + '</h2');
// conBox.prepend('<h2>' + '컨박스 h' + '</h2');
// footBox.prepend('<h2>' + '풋박스 h' + '</h2');

//======================con_01, con_02, con_03 만들기...
//너무 어려워서 선생님이 뭐라고 풀이해주시는지 1도 못 알아들음..;;;;;;;

var conArea = conBox.find('.con_area');
var conContents = conArea.children().eq(0).clone(true);
// conArea.empty();

for(i = 0 ; i < 3; i+=1){
	conContents = conArea.children().eq(0).clone(true);
	conArea.append( conContents );
}
for(i=0; i<3; i+=1){
	conArea.children().eq(i).attr({'class':'con_0'+ (i+1) })
}




















// 종료
})(jQuery);