// familysite.js
// 문서설명

(function($){
// jQuery 시작

var dd = $('dd');
dd.hide();

var select = $('#linkpage');

select.on('change',function(){
	var val = $(this).val();
	console.log(val);
	window.location = val;
});


	// ------

	var t2 = $('.type_02');
	var t2Dt = t2.find('dt');

	t2Dt.on('click',function(){
		t2.find('dd').show();
	});

// -------

var t3 = $('.type_03');
var t3Dt = t3.find('dt');
var t3Dd = t3.find('dd');
var go = $('.page_go').find('a');

t3Dt.on('click',function(){
	t3.find('dd').stop().slideToggle();
});

t3Dd.find('button').on('click',function(){
	var dataHref = $(this).attr('data-href');
	// console.log(dataHref);
	go.attr({'href':dataHref, 'target':'_blank'});
});


// jQuery 종료
})(jQuery);