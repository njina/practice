// js_01_006_for.js


// ------------------------------------------------
// while
// 변수를 먼저 선언
// while(조건의 비교){기능수행   변수값의 변화}
// ------------------------------------------------

/*var i = 0;  //변수선언
while(i < 10){ //조건비교

  console.log(i);
  
  i += 1;  //1을 더한다.
}*/


// ------------------------------------------------
//do-while
//최초의 변수를 선언
//do{기능수행   변수의 변화} while(조건 비교)
// ------------------------------------------------

/*var i = 100;

do{
  console.log(i);
  i+=1;
}while (i < 10 )*/



// ------------------------------------------------
//최초의 변수값
//for(;조건비교;){기능  변수의변화}


/*var i = 0;

for(; i<10 ;){

  console.log(i);

  i += 1;
}*/

//------------------
//for(최초  변수값; 조건비교; 변수의 변화){ 기능 }
/*for(var i = 0; i < 10 ; i+= 1){
  console.log(i);
}
*/


var arr = ['월','화','수','목','금','토','일'];
var obj = {
  'kf94':'한국인증마스크',
  'kn95':'중국인증마스크',
  'kf80':'황사마스크'
};


// console.log(arr[2]);
/*var j;
for(j = 0 ; j < 7 ; j ++){
  console.log(arr[j]);
}*/

// ------------------------------------------------
//for-in
/*
for( var k in obj){
  console.log(obj[k]);
}
*/
// ------------------------------------------------

// ------------------------------------------------
//forEach
//forEach()
// ------------------------------------------------

arr.forEach(function(a){
  console.log(a)
});