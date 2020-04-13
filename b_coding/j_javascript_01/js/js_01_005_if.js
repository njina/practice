// js_01_005.js


var num = 10;
var moreN = 1;

// 삼항 연산자
// 한 줄로 쓰는 것이 일반적
// ( 비교 ) ? 참 수행 : 거짓 수행 ;
( num < moreN ) ? console.log('변수 num이 더 작은 수 입니다.') : console.log('num이 더 큰 수 입니다.') ;


// 단수 조건문(단수 분기)
// 중괄호를 기준으로 나눠쓰는 게 일반적
// if( 비교 ) { 참 수행 } else { 거짓 수행 };
// if( 비교 ) { 참 수행 } else if (앞의 참 상황 이외의 상황에서 다시 비교){재 비교의 참} else { 거짓 수행 };
if ( num < moreN ) {
  console.log('변수 num이 더 작은 수 입니다.')
} else {
  console.log('num이 더 큰 수 입니다.')
}

var t = typeof(moreN);

if ( t === 'number') { 
  console.log('moreN은 숫자입니다.'); 
} else if(t === 'string') {
  console.log('moreN은 문자');
} else { 
  console.log('moreN은 숫자와 문자가 아닙니다.');
}




// 다수 조건문(다수 분기)
//switch() {case:; break;}
// switch( 조건 ) { case 조건부합1: 기능수행 break; case 조건부합2: 기능수행 break; case 조건부합3: 기능수행 break; default: 수행; }

switch(moreN) {
  case 1: console.log('1이다'); 
    break;
  case 2: console.log('2이다'); 
    break;
  case 3: console.log('3이다'); 
    break;
  default: console.log('조건에 맞지 않는 상황이다.')
}