// js_01_005_if_exam.js

// var messageBox = prompt('수업을 듣고 있는 요일을 입력하세요(1글자)');
// console.log( messageBox );

function Mes(){
  return prompt('수업을 듣고 있는 요일을 입력하세요(1글자)');
};

var messageBox = Mes();

var mLen = messageBox.length;  //글자의 갯수를 세어주는 거야.
console.log(mLen);

if( mLen !== 1){
 alert('다시 입력하세요');
 Mes();

} else {

  switch(messageBox){
    case '월':
      console.log('공부하러 갑니다!');
      break;
    case '화':
    case '수':
    case '목':
      console.log('일어나..공부해야지..!');
      break;
    case '금':
      console.log('주말 잘 보내요!')
    
    default:
      console.log('돌아다니지말고 일어나.. 공부해야지..!');

  }
}
