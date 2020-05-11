//jq_display_test.js
//jq_display 예제 연습


var title = $('.noti_title').find('button');

var li1 = $('.list_01');
var li2 = $('.list_02');
var li3 = $('.list_03');

li2.css({'display':'none'});
li3.css({'display':'none'});

title.eq(1).on('mouseenter', function(){
	title.eq(1).css({backgroundColor:'#333'});
	// title.eq(2).css({backgroundColor:'#333'});
	// title.eq(3).css({backgroundColor:'#333'});
});


title.eq(1).on('click', function(e){
	e.preventDefault();
	title.eq(1).css({ backgroundColor:'#333' });
	title.eq(2).css({ backgroundColor:'transparent' });
	title.eq(3).css({ backgroundColor:'transparent' });
	li1.show();
	li2.hide();
	li3.hide();
});

title.eq(2).on('click', function(e){
	e.preventDefault();
	title.eq(1).css({ backgroundColor:'transparent' });
	title.eq(2).css({ backgroundColor:'#333' });
	title.eq(3).css({ backgroundColor:'transparent' });
	li1.hide();
	li2.show();
	li3.hide();
});

title.eq(3).on('click', function(e){
	e.preventDefault();
	title.eq(1).css({ backgroundColor:'transparent' });
	title.eq(2).css({ backgroundColor:'transparent' });
	title.eq(3).css({ backgroundColor:'#333' });
	li1.hide();
	li2.hide();
	li3.show();
});

// =================================


var accordion = $('.accordion');
var question = $('.question');

question.find('dd').hide();

question.children('dt').eq(0).on('click', function(){
	question.children('dd').eq(0).slideDown();
	// question.children('dd').eq(1).hide();
	// question.children('dd').eq(2).hide();
});

question.children('dt').eq(1).on('click', function(){
	// question.children('dd').eq(0).hide();
	question.children('dd').eq(1).slideDown();
	// question.children('dd').eq(2).hide();
});

question.children('dt').eq(2).on('click', function(){
	// question.children('dd').eq(0).hide();
	// question.children('dd').eq(1).hide();
	question.children('dd').eq(2).slideDown();
});


// =================================

var tabMenu = $('tab_menu');
var tabDt = $( tabMenu.children('dt') );
var tabDd = $( tabMenu.children('dd') );

tabDt.on('click',function(){
	
});



// =================================
$('.tab_04').find('dt').children('button').on('click', function(){
	$(this).parent('dt').next('dd').show();

});

