// jq_apiBasic.js

(function($){
// jQuery 시작 =========

var h1 = $("h1");
console.log(h1.contents());
// .contetnts  ->   내부에 누가 있냐고?? h1 안에 누가 있냐고? 내용 요소(element인지 text인지도) 파악하는 것

var h1Con = h1.contents();
var h1ConChild = h1Con.contents()[0];
console.log( h1ConChild );

var dt = $("dt");
console.log( dt );
var dtParent = dt.parent();
console.log( dtParent[0] );

var dtWrap = dt.wrap();  // .wrap( ) -> 감싸는 태그를 생성하는 메소드
console.log( dtWrap );

var dtCon = dt.contents();
console.log( dtCon );
console.log(dt.html());    //  .html( ) -> 있는 그대로를 확인하는 메소드
dt.html("<span></span>");  // span덮어쓰기






// jQuery 종료 =========
})(jQuery);