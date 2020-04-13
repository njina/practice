// js_01_003.js

// const, let, var 

var a,b,c;
  a = 10;
  b = '10';

  //console.log(a);
  //console.log(b);

  //console.log( typeof(a) );   //a는 어떤 형식이니? 숫자 number야~
  //console.log( typeof(b) );   //b는 어떤 형식이니? 문자 string 이야~

  //c = a + 10 ; //a는 10이므로 10+10  숫자+숫자는 연산처리가 되어 결과값을 보여준다.
  //console.log(c);

  //c = 'x' + 'i';
  //console.log (c);  //문자+문자는 연산할 수 없으므로, 이어서 쓰라는 뜻으로 처리되어 xi라고 결과값을 보여준다.

  //c = 10 + 'i';
  //console.log (c);  //숫자+문자는 연산할 수  없으므로, 문자로 변환되면서 이어서 쓰라는 뜻으로 받아들인다.

  //c = 1 + '1000';
  //console.log (c, typeof(c));

  c = a + b;
  //console.log (c);

  c = parseInt(c) + 10;  //parseInt: ()안에 문자인 것을 강제로 숫자화 시켜라. 정수로 변화시킨다.
  //console.log (c);

  c = c + 10;
  //console.log(c);

  c = 'a' + c;   //a1030
  // console.log(c);

  c = parseInt(c);
  // console.log(c);  //NaN : Not a Number 숫자화 시킬 수 없다

   c = 1 + 'a' + c;   //1a1030
  // console.log(c);

    c = parseInt(c);  //1    
  // console.log(c);


//parseInt() = 앞에서부터 순서대로 정수로 변환. 중간에 문자가 오면 이전 숫자까지만 처리. 첫글자가 문자이면 NaN(숫자가 아님)도출
//문자의 연산은 나열을 뜻하는 +만 사용한다. / * - % 연산은 없다.
// ------------------------------------------------------------------

// +(더하기), -(빼기), *(곱셈), /(나눗셈), %(나머지값)

var d, e, f, g;

d = 10 + 100;
console.log(d); //110

d = 10 - 5;
console.log(d); //5

d = 10 * 2;
console.log(d); //20

d = 10 / 3;
console.log( Math.round(d) ); //3

// Math.abs() 절대값
// Math.round() 반올림
// Math.ceil() 버림
// Math.PI() 원주율
// Math.random() 0~1 랜덤 ex.로또
// Math.sign() 값이 양수/음수 구분
// Math.max([a,b,c,d,e...])  []내부 값 중 가장 큰 수
// Math.min([a,b,c,d,e...])  []내부 값 중 가장 작은 수

// parseInt ()  강제로 정수화(소수점을 가질 수 없다.)
// parsefloot ()  강제로 숫자화(소수점을 가질 수 있다.)

d = 10 % 3; // 10을 3으로 나눈 후 정수 몫을 제외한 나머지 값
console.log(d); //1

// 홀수,짝수, 요일 계산할 때 사용한다.


e = 11 % 2;
(e == 1)? console.log('홀수값') : console.log('짝수값');
// a==b  a와 b가 서로 비교해서 참(true)/거짓(false)을 도출
// (조건비교) ?  조건이 참인 경우 : 조건이 거짓인 경우 ;

//---------------------------------------------------------

e = 10;
console.log(e); //10

e = e + 5;
console.log(e); //15

e = e + 20;
console.log(e); //35


e += 10; //자기 자신에게 10을 추가로 더한다.
console.log(e) //45

e += 300;
console.log(e); //345

e -= 100;
console.log(e); //245

e *= 10;
console.log(e); //2450

e /= 100;
console.log(e); //24.5

console.log( Math.round(e)); //25

e %= 4;
console.log(e); //0.5

f = 7;
console.log(f); //7

f = f + 1;
console.log(f); //8

f += 1;
console.log(f); //9

f ++; //1을 더한다.
console.log(f); //10

f++;
console.log(f); //11

++f;
console.log(f); //12

console.log(++f); //13
console.log(++f); //14
console.log(++f); //15
console.log(++f); //16
console.log(++f); //17
console.log(f); //17

console.log(f++); //17
console.log(f++); //18
console.log(f++); //19
console.log(f++); //20
console.log(f++); //21
console.log(f); //22

//(++f)전치 연산자랑 (f++)후치 연산자랑 엇비슷하게 다르다. 1씩 증가하게 하는 연산자
//증감 연산자: 1씩 증가 또는 감소하게 하는 연산자
//++ --만 있고, **,//,%%는 없어 