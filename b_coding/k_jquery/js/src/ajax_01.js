//ajax_01.js
//jQuery 외부파일 불러오기
//ajax 기능 이해하기1

// var d;

(function($){
	// jQuery 시작 

	//ajax 안의 내용은 밖에서 침투 불가
	/*
	$.ajax({
		url:'../data/ajaxTest.json',   //html 위치기준
		dataType: 'json',
		async:false, 									//외부에서 내용 확인을 가능하게할거냐말거냐
		success:function(data){
			d = data;
			return d;
		}
	});
	console.log(d);
*/
	// =====================

	// $.load()
	
	var wrap = $('#wrap');
	
	wrap.append('<div class="headBox_wrap"></div>');
	wrap.append('<div class="footBox_wrap"></div>');
	
	
	var headWrap = wrap.find('.headBox_wrap');
	var footWrap = wrap.find('.footBox_wrap');
	
	//1번
	//headBox 자제에서만 쓰는 기능이만 괜찮아...........
	headWrap.load('../page/common/headBox.html',function(){
		var headBox = $('#headBox');
	});
	footWrap.load('../page/common/footBox.html');
	


	
	// 2번
	// headWrap.load('../page/common/headBox.html');
	// setTimeout(function(){
	// 	var headBox = $('#headBox');
	// 	console.log(headBox);
	// }, 100);
	





	// jQuery 종료
})(jQuery);