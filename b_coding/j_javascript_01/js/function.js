// function.js

// 기본 모양
// function(){}

// var Fn = function( rel ){
// 	console.log(rel/100*28 + rel);
// }

// Fn( 10 );
// Fn( 1321 );
// Fn( 421 );
// Fn( 120 );

//기명함수(함수선언식)=======================
function Fn1(n){
	return n * 10;
}
// *hoist현상: 함수를 나중에 만들어도 위치를 제일 처음으로 가버리게 되는 현상. (js에서만 나타남)
// 함수 선언 전에 호출을 해도 호출이 된다.
// 단점: 기능이 꼬일 수도 있다.

//익명함수(함수표현식)======================
//  *함수 이전에 호출하면 동작하지 않는다.(제품이 나오기도 전에 제품을 달라고 하는 것과 마찬가지)
// 보편적으로 사용할 때는 함수선언식보다는 함수표현식을 사용하는 것이 편리하다.
var Fn2 = function(n){
	return n / 2;
}

console.log('--', Fn2(5) );

var rel2 =  Fn2 (100);
console.log(rel2);

//즉시실행함수========================
(function(n){
	var rel3 = n;
	console.log(rel3);
})(1);
// * 함수 내에서 선언한 변수는, 함수 밖에서는 불러도 모른다. =>지역변수
// * 반대로, 어디서든 불러도 부를 수 있는 변수 => 전역변수
//===========================
