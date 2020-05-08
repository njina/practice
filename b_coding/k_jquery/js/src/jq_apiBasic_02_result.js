// jq_apiBasic_02_result.js
// jq_apiBasic_02 의  선생님 해석

(function($){


var  h1 = $('h1');
var headBox = $('#headBox');
// h1.prependTo( gnbBox );
headBox.prepend( h1 );

//====================

$('#viewBox').prepend('<h2>제목</h2>');
$('#conBox').prepend('<h2>제목</h2>');
$('#footBox').prepend('<h2>제목</h2>');

var h2 = $('h2');
h2.attr({'class':'hidden'});

// $('#conBox').find('h2').removeAttr('class');
// $('#conBox').find('h2').removeClass('hidden');

//====================li 만들고, a 만들고, 링크 만들기
// ===link의 첫번째방법(배열)
var  gnbUl = $('#gnbBox').find('ul');
gnbUl.empty();
var  gnbLinkText = [
	'네이버','다음','구글','시도','애플','삼성','11번가','g마켓','홈플러스','롯데마트'
];
var  gnbLink = [
	'http://naver.com',
	'http://daum.net',
	'http://google.com',
	'http://xidoweb.com',
	'http://apple.com',
	'http://samsung.co.kr',
	'http://11st.co.kr',
	'http://gmarket.com',
	'http://homeplus.com',
	'http://lotte.co.kr',
];

var linkText;

for( var i = 0 ; i < gnbLink.length ; i+= 1 ){
	linkText = '<li><a href="' + gnbLink[i] + '">' + gnbLinkText[i] + '</a></li>';
	gnbUl.append( linkText );
}

// ===link의 두번째방법(배열과 객체)
var gnbLinkMore = [
	{'text':네이버, 'link':'http://naver.com'},
	{'text':다음, 'link':'http://daum.net'},
	{'text':구글, 'link':'http://google.com'},
];

for( var i = 0 ; i < gnbLinkMore.length ; i+= 1 ){
	linkText = '<li><a href="' + gnbLinkMore[i].link + '">' + gnbLinkMore[i].text + '</a></li>';
	gnbUl.append( linkText );
}





//====================

var vBtn = $('.view_btn');
vBtn.append('<button class="next_btn" type="button">다음</button>');
vBtn.append('<button class="prev_btn" type="button">이전</button>');

//====================

$('#headBox').after('<div class="test_wrap"></div>');
var testW = $('.test_wrap');

for(i=0; i<5; i+=1){
	testW.append('<p>*******************</p>');
}





// 종료태그 
})(jQuery);