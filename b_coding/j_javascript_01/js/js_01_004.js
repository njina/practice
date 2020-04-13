// js_01_004.js

/** =====================================================
* javascript 자료형  

*/

var n = 7;
var t = typeof(n);
console.log(n + '은' + t + '이다.'); //7은number이다.

    n = 'text';
    t = typeof(n);
    // console.log(t); //string

    n = 1 > 10 // < 비교 연산자
    // console.log(n); //false

    n = 1 < 10 
    t = typeof(n);
    // console.log(t); //boolean 불리언

    n = null //기존의 값들을 지우고 다시 설정하겠다.
    console.log(n); //null
    t = typeof(n);
    // console.log(t); //

    t2 = typeof(r);
    // console.log(t);
 
// ====================배열 array


var arr = [1,2,10,5,100,70,'apple', 'grape', 'banana', '집'];
// 위와 같은 형태를 '배열'이라고 한다.
t = typeof(arr); 
console.log(t);

var fruit = ['apple', 'banana', 'grape']; //대괄호에 있는 아이가 하나로 처리
console.log(fruit[0]);


// ====================객체 object
var obj = {
  "apple"  : "red",
  "banana" : "yellow",
  "grape"  : "green",
  "melon"  : "mint"
};

console.log(obj.banana);
console.log(obj["banana"]);

t = typeof(obj);
console.log(t);

console.log(obj);

// ====================함수
var Fn = function(){}; //함수 표현식
function Fn1(){}; //함수 선언식

function F1(i, d){
  return i * d * 8570;
}
t = typeof(F1);
console.log(t);

console.log(F1(8, 4));

