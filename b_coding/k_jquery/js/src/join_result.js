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

//현재 시간 알려주는 메소드
var date = new Date ();
console.log(date);








	// jQuery 종료
})(jQuery);