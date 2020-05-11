// jq_display_test2.js

(function(){
// jQuery 시작

// 1.탭메뉴======================== !!!해결못함
$('.tab_title').find('button').on('click', function(e){
	e.preventDefault();

	var i = $(this).parent('li').index();

	$(this).parent('li').addClass('action');
	$(this).parent('li').siblings().removeClass('action');
	
	$('.tab_content').children('div').eq(i).hide();
	$('.tab_content').children('div').eq(i).stop().fadeIn();



});


// 2.탭메뉴(dl)======================== 
$('.tab_plus');




// jQuery 종료
})();