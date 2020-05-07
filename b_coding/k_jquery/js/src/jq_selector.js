// jq_selector.js

// jQuery 선택자

$('h1').css({width:'500px' , height:'100px' , backgroundColor:'#ddd'});
$('h1 a').css({'display':'block' , 'width':'400px' , 'backgroundColor':'#asd'});
$('h1 > a').css({'color':'#fff' , 'textAlign':'center' , 'margin':'auto'});
$('a[href="#').css({'padding':'1rem' , 'textShadow':'0.2rem 0.2rem 0.2rem #aff'});

/* 
type 선택자 : tag를 직접 선택
자식선택자
자손선택자
형제선택자
부모선택자

*/
// @media 쿼리문 처럼 function 안에 넣어야 되는거야.
(function($){
	//자식선택자,자손선택자 ================================

	// $("ul>li").css({ color:"#777" });
	// $("ul").children('li').css({ color:"#adf" });

	//아래 3문장이 형태는 달라도 결국 같은 선택자임
	// $("ul>li span").css({ fontSize:"2rem" });
	// $("ul>li").find("span").css({ fontSize:"2.5rem" });
	// $("ul").children("li").find("span").css({ fontSize:"2rem" , fontWeight:"bold" });

	// 메소드 체인의 길이를 줄이기 위해 아래처럼 변수를 선언한 다음에 간략하게 호출하기도 한다. 
	// var myUl = $("ul");
	// var myLi = myUl.children("li").find("span");
	// var myCss = { fontSize:"2rem" , fontWeight:"bold" };
	
	// myLi.css(myCss);

/* --.api ()    => 함수
			.api      => 메소드 : .기능을 쓰는 거를  메소드라고 말함
			.api().api()   => 메소드 체인(메소드들을 연결해놓은 것)
*/

//형제선택자
// $("li").eq(0).css({backgroundColor:"#cca"})
// $("li").eq(2).next("li").css({color:"#dad;"})
// $("li").eq(0).nextAll('li').css({backgroundColor:"#ddf"})
// $("li").eq(1).nextAll("li").css({color:"#ffaabb"})
// $("li").eq(3).prev("li").css({color:"#111"})
// $("li").eq(3).prevAll("li").css({color:"#ff0000"})
// $("li").eq(3).siblings("li").css({color:"#000"})

// var goodLi = $("li").eq(0).siblings("li");
// var colorK = {color:"#000"};
// goodLi.css(colorK)

// //부모선택자
// $(".three").parent().css({backgroundColor:"#ed3424"})
// $(".four").parents().css({backgroundColor:"#aaa12a"})
// $(".four").parent().css({backgroundColor:"#dddd12"})
// $(".four").parentsUntil("ul").css({backgroundColor:"#ff2d12"})

// $("li").odd().css({backgroundColor:"#ddd"})
// $("li").even().css({backgroundColor:"#bbb"})
// $("span").even().css({backgroundColor:"#aaa"})

// 두번째 짝수 선택은 어떻게 함????????????

$(".three").prev().css({border:"1px solid #f55"})
$(".three").prevAll().css({backgroundColor:"#ccc"})
$(".three").next().css({border:"1px solid #f55"})
$(".three").nextAll().css({backgroundColor:"#aca"})


$(".other_01").next().css({backgroundColor:"#ada"})
$(".other_01").siblings().css({marginTop:"10px"})

$(".four").parents().css({padding:"1rem" , backgroundColor:"#333" , borderRadius:"3rem"})

var fourI = $(".four").parent().index();
$("li").eq(fourI-2).children().css({backgroundColor:"#daa"})

$("li").children().css({backgroundColor:"#3dd"})










})(jQuery);