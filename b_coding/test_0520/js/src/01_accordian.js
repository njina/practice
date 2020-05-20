//01_accordian.js
//포트폴리오 평가- jQuery 기능


(function($){
	// jQuery 시작 

var dt = $('.accordian').find('dt');
var dd = $('.accordian').find('dd');

dt.children('button').on('click', function(e){
	e.preventDefault();
	
	var thisDt = $(this).parent('dt');
	var viewDd= thisDt.next('dd').css('display') === 'none';
	var iBtn = thisDt.find('i');

	if( viewDd ){
		thisDt.siblings('dd').slideUp();
		thisDt.next('dd').slideDown();

		thisDt.addClass('action');
		thisDt.siblings('dt').removeClass('action');
		
		iBtn.addClass('arrow_action');
		iBtn.parents('dt').siblings('dt').find('i').removeClass('arrow_action'); 
		// 화살표 돌아오는 거 해결 못함
	}
});


/* 수정해야 할 사항
1. dt 클릭해서 dd 나오고 나서, 다시 dt 클릭하면 dd가 닫혀야함.
*/


	// jQuery 종료
})(jQuery);
