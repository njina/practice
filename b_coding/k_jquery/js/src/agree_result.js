//agree_result.js
//회원가입 제어

(function($){
	var ac = $('#allCheck');
	var ts = $('#termService');
	var tp = $('#termPrivacy');
	var tl = $('#userLocation');
	var ta = $('#promotionalEmail');

	var tsTerms = ts.nextAll('.terms').eq(0);
	var tpTerms = tp.nextAll('.terms').eq(0);
	var tlTerms = tl.nextAll('.terms').eq(0);
	var taTerms = ta.nextAll('.terms').eq(0);
/*
	var termsService;
	$.ajax({
		url:'../terms/termsService.txt',
		dataType:'txtv',	async:false,
		success: function(data){
			termsService = data;
			return termsService;
		}
	});
	
	ts.append(termsService);
*/
tsTerms.load('../terms/termService.html');
tpTerms.load('../terms/termPrivacy.html');
tlTerms.load('../terms/userLocation.html');
// =======================================================
var inputCk = $('input[type="checkbox"]');
var inputCheckList = [ts, tp, tl, ta];

// 전체 동의 체크 사항 ---------------------------------
ac.on('click', function(e){
	var acAttr = ac.is(':checked');
	AllCk(acAttr);

	if(acAttr){
		inputCk.addClass('check');
		inputCk.attr({'checked': true});
	}else{
		inputCk.removeClass('check');
		inputCk.attr({'checked': false});
	}	
});
// -----------------------------------------------------

//내용상에서 맨 위에 전체선택 버튼
var allState;
var AllCk = function(state){
	if(state === true){
		ac.attr({'checked':true});
		ac.addClass('check');
	}else {
		ac.attr({'checked': false});
		ac.removeClass('check');
	}
};

var EachCk = function(){
	var nowState;
	for(var i=0; i< inputCheckList.length;  i++){
		var hasCheck = inputCheckList[i].hasClass('check') == false;
		if(hasCheck){	nowState = false; break; }else{	nowState = true; }
	}
	return nowState;
}

// 각각의 요소파악

$.each(inputCheckList, function(){
	$(this).on('click', function(e){
		var thisIt = $(this);
		var nowCk = thisIt.is(':checked');
		
		//선택요소에 대해 체크상태 파악
		if(nowCk === false){
			thisIt.attr({'checked':false});
			thisIt.removeClass('check');
		}else{
			thisIt.attr({'checked':true});
			thisIt.addClass('check');
			allState = false;
		}

		allCk = EachCk();
		AllCk(allCk);
		
	});	
});

// 확인버튼 클릭시 체크사항
$('[type="submit"]').on('click', function(e){
	e.preventDefault();

	(function($){
		var ac = $('#allCheck');
		var ts = $('#termsService');
		var tp = $('#termsPrivacy');
		var tl = $('#termsLocation');
		var ta = $('#termsAlert');
	
		var tsTerms = ts.nextAll('.terms').eq(0);
		var tpTerms = tp.nextAll('.terms').eq(0);
		var tlTerms = tl.nextAll('.terms').eq(0);
		var taTerms = ta.nextAll('.terms').eq(0);
	
		tsTerms.load('../terms/termsService.html');
		tpTerms.load('../terms/termsPrivacy.txt');
		tlTerms.load('../terms/termsLocation.txt');
		taTerms.load('../terms/termsAlert.txt');
	// =======================================================
	var inputCk = $('input[type="checkbox"]');
	var inputCheckList = [ts, tp, tl, ta];
	
	
	// 전체 동의 체크 사항 ---------------------------------
	ac.on('click', function(e){
		var acAttr = ac.is(':checked');
		AllCk(acAttr);
	
		if(acAttr){
			inputCk.addClass('check');
			inputCk.attr({'checked': true});
		}else{
			inputCk.removeClass('check');
			inputCk.attr({'checked': false});
		}	
	});
	// -----------------------------------------------------
	
	var allState;
	var AllCk = function(state){
		if(state === true){
			ac.attr({'checked':true});
			ac.addClass('check');
		}else {
			ac.attr({'checked': false});
			ac.removeClass('check');
		}
	};
	
	// 각각의 상태 파악 ----------------------------------------
	var EachCk = function(){
		var nowState;
		for(var i=0; i< inputCheckList.length;  i++){
			var hasCheck = inputCheckList[i].hasClass('check') == false;
			if(hasCheck){	nowState = false; break; }else{	nowState = true; }
		}
		return nowState;
	}
	// -------------------------------------------------------
	// 각각의 요소 클릭 ----------------------------------------
	
	// $.each() : 선택자 여러개를 각각 수행하게 만들기위한 jQuery 반복수행구문(for와 유사)
	// $('input[type="checkbox"]').not('#allCheck').on('click' ...)
	
	$.each(inputCheckList, function(data){
		$(this).on('click', function(e){
			var thisIt = $(this);
			var nowCk = thisIt.is(':checked');
			
			// 선택요소에 대해 체크상태 파악
			if(nowCk === false){
				thisIt.attr({'checked':false});
				thisIt.removeClass('check');
			}else{
				thisIt.attr({'checked':true});
				thisIt.addClass('check');
				
				allState = false;
			}	
		// 각각 상태 파악, 
		 allCk = EachCk();
		// 하나라도 false처리되면 false를 반환하여, 전체 해제
		// true를 반환시 전체체크 
			AllCk(allCk);
		});	
	});
	
	// ---------------------------------------------------------
	// 확인버튼 클릭시 체크사항
	$('[type="submit"]').on('click', function(e){
		e.preventDefault();
		
	});




//제이쿼리 종료태그
})(jQuery);

/*
단순하게 얘기하면,
내가 일일히 시작부터 끝까지 설정을 해줘야하는 아이는 for.
그치만, 시작부터 끝까지 알아서 처리하게 하는 건 forEach.
forEach는 배열요소만 한다는거.

forEach를 개량한 게, 제이쿼리에서 $.each()

선생님이 뭐라 열심히 설명을 해주셨지만 하나도 이해못했다고 한다....

전체가 아니라 안에 있는 4개를 하나라도 클릭할 때마다 4개의 상태를 모두 확인하는거야. 1개라도 체크가 안 되어있으면, 전체선택 체크 안돼.

최종적으로 결과가 true냐  false냐 ....

1. 하나라도  false 처리되면 false를 반환하고, 전체 체크 해제
2. true를 반환하면 전체체크.
*/