//popupModal.js
//팝업 모달


(function($){
	// jQuery 시작 

	var cardData = listData;
	var colorData = colorArr;
	
	var listView = $('#listViewBox');
	var listUl = listView.find('ul');
	var modalWin = $('#modalBox');
	var modalView = modalWin.find('.modal_view');
	var modalImg = modalWin.find('.modal_image');
	var modalCloseBtn = modalWin.find('.modal_close');



	//비동기화 처리가 되어있다. 더보기 버튼을 클릭해서 새로 생성된 li는 기존 변수나 선택자에 안 담겨. 이를 해결하기 위해서, 
	//1. $(document)에서부터 찾아서 선택하는 형식을 취하면 된다.
	//document에서 불러오는 게 외부문서 불러올 때 권장.
	//2. 최종 선택자는 클릭 후에 판단하는 형식으로 취한다.
	//$(document).find(listUl).find('li').on('click',function(e){});
	//*슬라이드배너 만들때, lastClone하고  나서 li 변수 재할당 해주는 것과 같은 의미.

	var cardI;
	$(document).find(listUl).on('click','li', function(e){
		e.preventDefault();
		
		var indexCard = $(this).index();
		cardI = indexCard;
		console.log(indexCard);

		modalImg.text(indexCard);
		modalImg.css({backgroundImage:'url(' + cardData[indexCard].image + ')'});	

		modalWin.fadeIn(function(){});
	});


	//마우스 움직임(mousemove)
	modalView.on('mousemove',function(e){
		var mouseP = {x:e.clientX, y:e.clientY };
		// console.log(mouseP);
		modalView.css({transform:'translateX('+ mouseP.x/100*3 +'px)'});
	});



	//키보드 이벤트
	$(document).on('keyup',function(e){
		var key = e.key;
		var keyCase = key.toLowerCase();
		var keyTrue = true;
		// console.log(keyCase);
		
		if(keyTrue){
			keyTrue = false;
		
			switch(keyCase){
				case 'arrowup': 
				case 'arrowleft':
					cardI -= 1;
					break;
					
				case 'arrowdown':
				case 'arrowright':
					cardI += 1;
				break;

				case 'escape':
					modalWin.fadeOut(100);
					listUl.find('li').eq(cardI).find('a').focus();
				break;
			}
			if(cardI <= 0){ 
				cardI = 0;	
				modalWin.fadeOut(100);
			} else if (cardI >= NowListLen){
				modalWin.fadeOut(100);
			} else {
				modalImg.css({backgroundImage:'url(' + cardData[cardI].image + ')'});
			}
			console.log(cardI)
		} //--//if(keyTrue)
	});


	//모달 창 닫기
	modalCloseBtn.on('click',function(e){
		e.preventDefault();
		modalWin.fadeOut(100);
	});
	





	// jQuery 종료
})(jQuery);

/*
이번 예제에서 기억 할 것,
1. 이벤트 기능이 여러개일 경우, 같은 함수 안에 쓰지말고, 나눠서 쓸것. 안그러면 서로 충돌일으켜서 버그생겨
	li.click / mousemove / keyup
	처음엔 li 클릭 함수 안에 mousemove, keyup 다 썼는데, 그러니까 버그생김
2. 비동기
	외부 파일로 불러올 때, 더보기 버튼 눌르면 li를 다시 또 li를 재할당해줘야하잖아. 근데 이벤트 안에 콜백함수로 넣으면 이걸 잡아줄 수 있어.
	$(document).find(listUl).on('click','li', function(e){});

3. 변수 밖에 쓰기
	js파일이 여러개일 경우, 변수가 지역변수일 경우, 다른 파일에서 그 변수를 알지를 못해. 그래서 변수를 함수 밖에서 언질 해줘.
	또, 파일을 분리하면서 변수를 써줄 때, 변수를 한번더 변수로 해주는 이유는 a문서는 a문서대로, b문서는 b문서대로 기능 수행이 달라질 때 유지보수가 쉽게 하기 위해서.
	만약에 다른 파일에서 같은 변수명을 사용할 경우에, a파일에서 변수를 바꾸면 b파일에서도 일일이 찾아서 바꿔줘야 하는데, 파일 첫머리에 변수를 한번 바꿔주면 그 코드만 바꾸주면 더 편하지!!
*/