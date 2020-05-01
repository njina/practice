//arrayMethod.js
//배열메소드에 대한 이해

//배열을 선언할 때 var new Array 라는 표현이 있기 때문에, 그냥 array라고 안 쓰는 선생님의 방식 

/* 
	변수.length              -> 갯수파악   *()소괄호없음
	변수.push(['요소'])      -> 뒤에 첨부
	변수.unshift(['요소'])   -> 앞에 첨부
	변수.pop()              -> 배열상의 마지막 요소를 제거
	변수.shift()            -> 배열상의 첫번째 요소를 제거
	
	변수.indexOf(['요소'])   -> 몇번째인지 순서를 알려줌
	변수.splice(n번째,갯수)  -> n번째부터 갯수를 지워라(0이 첫번째)
	변수.slice(순서위치, 순서위치)       -> 별도의 변수에 카피본을 만드는 것 
													배열의 범위를 지정하여 해당 영역만큼을 별도로 복제하여 사용한다.
	
	변수.concat([배열])        -> 배열요소 합치기
	변수.sort()                -> 배열요소 알파벳순으로 정렬
	변수.reverse()              -> 배열요소 순서 앞뒤 뒤집기        
	*알파벳역순으로 순서를 바꾸고 싶다면, sort와  reverse 둘다 사용해야한다.

*/

/*
 js 배열에서 
 var fruit = ['사과', '배', '오렌지']; 
 
 위에서 선언한 배열에서 사과는 첫번째이지만, 0이라고 표기를 해야 js언어가 알아먹어
 그래서 만약에 사과를 부르고 싶으면, 
 console.log(fruit[0]); 하면 결과값으로 사과가 나와.

 '첫번째'라고 말을 하고, 표기는 '0'이라고 표기를 하면 되고!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 
 */

var array_01 = ['html','css','javascript'];

console.log(array_01);
console.log(array_01[0]);
console.log(array_01[1]);
console.log(array_01[2]);
console.log(array_01[3]); //결과값: undefined : 선언은 했는데 해당값은 없다
console.log(array_01.length); //.length : .(콤마)를 이용해서 기능을 추가하는 것이라고 생각해

array_01.push('sass'); //push: 뭔가를 밀어넣는 것 -> 기존에 선언한 배열에다가 추가하는 것
array_01.push('ejs'); 
array_01.push('typescript'); 
console.log(array_01.length); //결과값: 6

array_01.pop();   //pop: 마지막 요소를 제거하는 것.
console.log(array_01);

array_01.unshift('bash');
array_01.unshift('editor');
console.log(array_01);

array_01.shift();
console.log(array_01);

array_01.shift();
array_01.shift();
console.log(array_01);

var i = array_01.indexOf('css');
console.log( i );

array_01.splice(1,1);  //첫번째부터 1개 지워라
console.log( 'array_01', array_01 );

var ar_02 = array_01.slice();
console.log( 'ar_02',ar_02 );

array_01.push('elm');
console.log( 'array_01', array_01 );
console.log( 'ar_02',ar_02 );

var a = '1234';
var b = a;
console.log(a , b);

a = '5678'; //한번 선언한 변수는 다시 var 라고 안쓴다.
console.log(a , b);

var a = '1234';
var b = a;
console.log(a , b);

a = '5678'; //한번 선언한 변수는 다시 var 라고 안쓴다.
console.log(a , b);

var c = a.slice(); //slice 소괄호 안에 아무것도 안 쓰면 전체를 복사한다는 개념. 복사/붙여넣기 개념.

console.log(a , b , c);


// =============================================

var program1 = ['photoshop','illustrator'];
var program2 = ['html','css','javascript'];
var myEdu = program1.concat(program2);  //concat : 합산하는 것.

var program3 = ['scss','nodejs','express']
var myEdu = program1.concat(program2,program3);
console.log(myEdu);

myEdu.sort();  //알파벳순으로 a부터 순차적으로 정렬
myEdu.reverse();  //원래의 순서에서 앞뒤만 바뀌는거
console.log(myEdu); 


// ==============
var bodyEl = document.getElementsByTagName('body')[0];
var creatP = document.createElement('p');
bodyEl.appendChild(creatP);
var p1 = document.getElementsByTagName('p')[0];
p1.setAttribute('class','par');
var classNamePar = document.getElementsByClassName('par')[0];
classNamePar.textContent = myEdu;
// ==============

var t = '웹 언어를 잘 파악해서 익혀보세요';
console.log( t );
var tArr = t.split(' ');  //빈칸을 인식해서 문장을 배열로 바꾼다. 문장을 쪼갠다
console.log( tArr );
var arrToStr = myEdu.join();  //배열화되어있는 거를 문장화하는 것
console.log( myEdu ); //배열
console.log( arrToStr ); //문장(string)으로 바뀜
