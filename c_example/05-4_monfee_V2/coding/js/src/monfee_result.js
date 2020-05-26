//monfee_result.js
//몽피커피 선생님 풀이
//파일 쪼개기


(function($){
	// jQuery 시작 

var win = $(window);
var winH = win.height();

var wrap = $('#wrap');
wrap.height( winH );

// headBox 감싸기==================
//headBox를 감싸는 div를 하나 생성해준 것. why? 디바이스 커졌을 때 가운데 정렬하게하려구
//제작자 성향에 따라 다르지만, 
var headBox = $('#headBox');
headBox.wrap('<div class="headBox_wrap"></div>');

var headBoxWrap = headBox.parent('div');
var headBoxH = headBox.css('height');
var headBoxBg = headBox.css('backgroundColor');
headBoxWrap.css({position:'fixed', top:0, left:0, zIndex:1000, width:'100%', height:headBoxH, backgroundColor:headBoxBg});
headBox.css({width:'940px', margin:'auto', backgroundColor:'transparent'});
// ==================


// bestNewsBox 감싸기==================
var bestNewsBox = $('#bestNewsBox');
bestNewsBox.wrap('<div class="bestNewsBox_wrap"></div>');

var bestNewsBoxWrap = $('.bestNewsBox_wrap');
var bestNewsBoxBg = bestNewsBox.css('backgroundColor');
bestNewsBoxWrap.css({width:'100%', backgroundColor: bestNewsBoxBg});
bestNewsBox.css({width:'940px', backgroundColor:'transparent'});
// ==================


// gnb 메뉴==================
//배열 > 객체 > 배열 > 객체 로 처리
var gnbArr = [
	{title : 'story',      //gnbArr[0].title
	subList : [              //gnbArr[0].subList
		{linkName : '몽피이야기', link : 'storyMonfee.html'},	   //gnbArr[0].subList[0].linkName
		{linkName : '회사소개', link : 'aboutCompany.html'},     //gnbArr[0].subList[1].linkName
		{linkName : '후원업체', link : 'sponCompany.html'}		   //gnbArr[0].subList[2].linkName
	]},
	{title : 'menu',        //gnbArr[1].title
	subList : [              //gnbArr[1].subList
		{linkName : '커피류', link : 'storyMonfee.html'},
		{linkName : '기타음료', link : 'aboutCompany.html'},
		{linkName : '음식 및 디저트', link : 'sponCompany.html'},
		{linkName : '선물용 상품', link : 'sponCompany.html'},
		{linkName : '기타', link : 'sponCompany.html'}
	]},
	{title : 'store',        //gnbArr[2].title
	subList : [
		{linkName : '신규매장', link : 'storyMonfee.html'},
		{linkName : '매장찾기', link : 'aboutCompany.html'},
		{linkName : '창업설명회', link : 'sponCompany.html'},
		{linkName : '창업스토리', link : 'sponCompany.html'}
	]},
	{title : 'news',        //gnbArr[3].title
	subList : [
		{linkName : '이벤트', link : 'storyMonfee.html'},
		{linkName : '공지사항', link : 'storyMonfee.html'},
		{linkName : '프로모션', link : 'aboutCompany.html'},
		{linkName : '미디어광고', link : 'sponCompany.html'}
	]}
];
// ==================
var gnbBox = $('#gnbBox');
gnbBox.append('<ul class="gnb_area clearfix"></ul>');
// console.log(gnbArr.length);
var gnbArea = gnbBox.children('.gnb_area');

//변수를 for문 밖에서 선언하는 이유: var 같은 경우는 for문 밖이나 안이나 서로 호출이 가능한데, var만 그렇고, let이나 다른 건 좀 달라
var i = 0;
var gnbDt, gnbTitle, gnbSub, gnbSubLength, gnbSubLink, gnbSubText, gnbSubHref;
for( ; i < gnbArr.length ; i ++){
	gnbArea.append('<li><dl> <dt></dt> <dd></dd> </dl></li>');
		//dt에 메뉴명 넣기
	gnbDt = gnbArea.children('li').eq(i).find('dt');
	gnbDt.attr({tabIndex:0});   //tabIndex는 html보다 js에서 제어하는 게 맞다
	gnbTitle = gnbArr[i].title;
	gnbDt.text( gnbTitle );
	
		//dd에 메뉴명 넣기
	gnbArea.find('dd').eq(i).append('<ul class="gnb_sub"></ul>');
	gnbSub = gnbArea.find('.gnb_sub');
	gnbSubLength = gnbArr[i].subList.length;
	
		//for문 안에 for(이중for문)
	for(var j = 0 ; j < gnbSubLength ; j++ ){
		gnbSub.eq(i).append('<li><a href=""></a></li>');
		gnbSubLink = gnbSub.eq(i).find('li').eq(j).find('a');
		gnbSubText = gnbArr[i].subList[j].linkName;
		gnbSubHref = gnbArr[i].subList[j].link;
		gnbSubLink.text( gnbSubText );
		gnbSubLink.attr({ href:gnbSubHref });
	}
}


var gnbList = gnbArea.children('li');
var gnbListLength = gnbList.length;
gnbList.css({width: 100 / gnbListLength + '%'});
// ==================

//서브메뉴 영역 나타나기
gnbArea.find('dd').hide();

gnbArea.on('mouseenter',function(){
	gnbArea.find('dd').stop().slideDown();
});

headBox.on('mouseleave',function(){
	gnbArea.find('dd').stop().slideUp();
});

// ===================
// bestNewsBox영역===================

var newsList = [
	{img:'menu_01.png', imgNarr:'이미지 설명', title:'title_01', content:'lor3eaa kdkd'},
	{img:'menu_02.png', imgNarr:'이미지 설명', title:'title_02', content:'losfs5xx sfs df as dfkdkd'},
	{img:'menu_03.png', imgNarr:'이미지 설명', title:'title_03', content:'lorses fs53d sc2f sdddkdkdkd'},
	{img:'menu_04.png', imgNarr:'이미지 설명', title:'title_04', content:'ld orv342 34dms v sdv as235ddv advsdv kdkdk d'},
	{img:'menu_05.png', imgNarr:'이미지 설명', title:'title_05', content:'lorsem2fdkdkd'},
	{img:'menu_06.png', imgNarr:'이미지 설명', title:'title_06', content:'lorsem2fdkdkd'},
	{img:'menu_07.png', imgNarr:'이미지 설명', title:'title_07', content:'lors123essdfsfdkd'}
];

//js에서 가져오는 url은 본인 js 기준이 아니라 html기준이다.!!!
var imgUrl = '../img/new_menu/';

var bestNews = $('#bestNewsBox');
bestNews.append('<ul class="clearfix"></ul>');
var bestNewsUl =  bestNews.children('ul');

// var listEl = '	<li><a href="#">\
// <div class="img_bg">\
// <span class="hidden">'+ newsList[i].imgNarr + '</span></div>\
// 	<dl>\
// 		<dt>'+ newsList[i].title +'</dt>\
// 		<dd>'+ newsList[i].content +'</dd>\
// 	</dl>\
// </a>\
// </li>';

//1. for문 안에 삽입하기
//2. 함수변수만들어서 그 변수를 for문 안에 삽입하기
var textEl = function(i){
	var listEl = '	<li><a href="#">\
									<div class="img_bg">\
									<span class="hidden">'+ newsList[i].imgNarr + '</span></div>\
										<dl>\
											<dt>'+ newsList[i].title +'</dt>\
											<dd>'+ newsList[i].content +'</dd>\
										</dl>\
									</a>\
									</li>';
									return listEl;
};


var i=0;
for(; i < newsList.length ; i++){
	bestNewsUl.append( textEl(i) );
	bestNewsUl.children('li').eq(i).find('.img_bg').css({backgroundImage:'url('+ imgUrl + newsList[i].img + ')',
								backgroundRepeat:'no-repeat',
								backgroundPosition:'50% 50%',
								backgroundSize:'cover'
});
}




	// jQuery 종료
})(jQuery);