//join_result.js
//회원가입 페이지 선생님 풀이


(function($){
	// jQuery 시작 

var countryCode  = $('#countryCode');
var contry = [
	'니제르 +227',
	'나카라과 +505',
	'대한민국 +82',
	'덴마크 +45',
	'덴마크령그린란드 +299',
	'덴마크령페로제도 +298',
	'도미니카공화국 +1 809',
	'독일 +49',
	'라오스 +856'
];

var contryText = '<option></option>';
var valueResult;
console.log(contry[0].split('+'));
var koreaSelect = contry.indexOf('대한민국 +82');

var i  = 0;
for( ; i < contry.length ; i++ ){
	countryCode.append(contryText);
	countryCode.find('option').eq(i).text(contry[i]);
	valueResult = contry[i].split('+')[1];
	countryCode.find('option').eq(i).attr( {value:valueResult} );
}
countryCode.find('option').eq(koreaSelect).attr({selected:'selected'});
//기본값을 대한민국 국가번호로 설정하기

//현재 시간 알려주는 메소드 - 내장함수
// new : 기존에 있는 함수를 쓸수있게 해준다.
var date = new Date ();
console.log(date);
//연도만 파악하는 메소드
var yy = date.getFullYear();
// console.log(yy);
//월은 1을 더해야한다.
var mm = date.getMonth()+1;
// console.log(mm);
var dd = date.getDate();
// console.log(dd);


//아이디 확인============================
//input 박스에 값 있는지 없는지 확인하기
//메소드명:   .val()
//1.값을 작성하는 와중에도 결과를 알려주고 있다.
// var userId = $('#userId');
// userId.on('keyup',function(e){
// 	e.preventDefault();
	
// 	var val = $(this).val();
// 	console.log( val );
// });


//2. blur - input 박스에서 포커스가 나가는 순간 결과를 알려준다.
// userId.on('blur',function(e){
// 	e.preventDefault();
	
// 	var val = $(this).val();
// 	console.log( val );
// });

//3. 중복 확인 버튼시 확인

//비밀번호================= 문자열 일치여부 확인
//정규표현식

// var exp = new RegExp("^abc");
//위의 식과 같은 말이다. 위->생성자 함수. 아래->
var exp = /^abc/;
// console.log(exp);

var myRe = /d(b+)/g;
var myArray = myRe.exec('cdbbdbsbz');
// console.log(myArray);





//아이디 확인
//영문(대소문자구분x),숫자,특수문자(-)(_) 5~20글자
$('#userId').on('blur',function(){
	var rel = $(this).val();
	var ck = /^[a-z0-9-_]{5,20}$/i;
	var relTest = ck.test(rel);
	var conDl = $(this).parents('dl');
	var conT = $(this).parents('dd').eq(0).next('.confirm_text');

	if(rel == ""){
		conDl.addClass('error');
		conDl.removeClass('success');
		conT.text('필수정보라능');
	} else if( !relTest ){
		conDl.addClass('error');
		conDl.removeClass('success');
		conT.text('제대로된 id입력해');
	} else {
		conDl.addClass('success');
		conDl.removeClass('error');
		conT.text('id 좋앙');
	}
});


//비밀번호 확인
//() {} [] /\ + 은 제한
var pwResult;     //비밀번호 재확인

$('#userPw').on('blur',function(){
	var rel = $(this).val();
	pwResult = rel;
	var ck = /^[A-Za-z0-9]|[~!@#$%^&*-_]{8,16}$/;
	var relTest = ck.test(rel);
	var conDl = $(this).parents('dl');
	var conT = $(this).parents('dd').eq(0).next('.confirm_text');
	// console.log(relTest);
	if(rel == ""){
		conDl.addClass('error');
		conDl.removeClass('success');
		conT.text('필수정보라능');
	} else if( !relTest ){
		conDl.addClass('error');
		conDl.removeClass('success');
		conT.text('8~16자 영문 대 소문자, 숫자, 특수문자를 사용');
	} else {
		conDl.addClass('success');
		conDl.removeClass('error');
		conT.text('pw 좋앙');
	}
});

//비밀번호 눈 켜면 확인하는 기능
var pwIcon = $('#userPw').parents('dl').find('i');
pwIcon.on('mousedown',function(e){
	e.preventDefault();
	//마우스 왼버튼
	if(e.button == 0){
		$('#userPw').attr({type:'text'});
	}
});
pwIcon.on('mouseup',function(e){
	e.preventDefault();
	//마우스 왼버튼
	if(e.button == 0){
		$('#userPw').attr({type:'password'});
	}
});



//비밀번호 재확인
$('#userPw2').on('blur',function(e){
	var rel = $(this).val();
	var conDl = $(this).parents('dl');
	var conT = $(this).parents('dd').eq(0).next('.confirm_text');

	if( rel !== pwResult ){
		conDl.addClass('error');
		conDl.removeClass('success');
		conT.text('비밀번호가 다릅니다');
	} else {
		conDl.addClass('success');
		conDl.removeClass('error');
		conT.text('비밀번호가 확인되었다.');
	}
});




//이름 확인
$('#userName').on('blur',function(){
	var ck = /^[가-힣]{1,20}|[a-zA-Z0-9]{1,20}$/;
	var thisName = ck.test( $(this).val() );
	console.log(thisName);
});


//생년월일 중 연도 4자리 확인
$('#birthYear').on('blur',function(){
	var ck = /^[1-2]{1}[0-9]{3}$/;
	var thisYear = ck.test( $(this).val() );
			//경고 메시지 작성해야해
});



//본인 확인 이메일 확인
$('#userOtherEmail').on('blur',function(){
 var ck = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/g;
 var thisEmail = ck.test( $(this).val() );
 console.log(thisEmail);
});



//휴대전화 번호 확인
$('#userPhone').on('blur',function(){
	var ck = /^01.{1}\[0-9]{3,4}\[0-9]{4}$/;
	var relTest = ck.test(rel);
	var rel = $(this).val();
	var conDl = $(this).parents('dl');
	var conT = $(this).parents('dd').eq(0).nextAll('.confirm_text');

	if(rel == ""){
		conDl.addClass('error');
		conDl.removeClass('success');
		conT.text('전화번호를 입력해주세요');
	} else if( !relTest ){
		conDl.addClass('error');
		conDl.removeClass('success');
		conT.text('올바른 전화번호를 입력하세요');
	} else {
		conDl.addClass('success');
		conDl.removeClass('error');
		conT.text('확인되었습니다.');

		$('#certiNum').css({display:'block', transform:'translateY(-26px)'});
	}
	
});


//인증번호 입력 칸 활성화


	// jQuery 종료
})(jQuery);


