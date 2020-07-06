//letterView.js
//한글자씩 나타나기


(function($){
	// jQuery 시작 

	//-----------
	// 첫번째 - '반갑습니다' - 한글자씩 시간흐름에 따라 나타나게하기
	var endBox = '<span class="end_box"></span>';
	var inputText1 =  $('.text_01');
	var text1Con = inputText1.text();
	//글자 사라지게하기
	inputText1.empty();
	
	
	var t1Arr = text1Con.split('');
	// '' 안에 아무것도 안 쓰면(심지어 띄어쓰기도 없으면) 한글자씩 떨어지게 된다.
	// console.log(t1Arr);
	// 즉시실행함수에 담기
	(function(){
		var i = 0;
		var textGo;
		//첫번째 '반갑습니다'
		var StartText = function(){
			textGo =	setInterval(
			function(){
				//한글자씩 나타나게
				if( i < t1Arr.length ){
					inputText1.append( t1Arr[i] );
					
					//글자 끝나면 커서 나타나게
				}else if( i == t1Arr.length ){
					inputText1.append(endBox);
					
				} else if ( i >= t1Arr.length){
					
					//커서가 깜빡이게 만들기
					inputText1.find('.end_box').remove();
					i = t1Arr.length-1;
					
					//내용 모두 작성시 종료
					// clearInterval(textGo);
				}
				i+=1;
			},300);
		};
		StartText();
	})();
	
	
	//-----------
	//두번째 'design portfolio' - 글자 일정시간 만들고 사라지기
	var inputText2 =  $('.text_02');
	var text2Con = inputText2.text();
	var t2Arr = text2Con.split('');
	// console.log(t2Arr);
	inputText2.empty();
	//즉시실행함수에 담기
	(function(){
		var i = 0;
		var j = 0;
		setInterval(
			function(){
				
				if( i < t2Arr.length ){
					inputText2.append(t2Arr[i]);
					
				} else if( i == t2Arr.length ){
					inputText2.append(endBox);
					
				} else if ( i >= t2Arr.length ){
					inputText2.find('.end_box').remove();
					i = t2Arr.length-1;

					j+=1;
					//아래의 조건문에서 다른 수 (j >= 숫자) 로 바꾸면 커서가 깜빡이는 숫자 조절 가능
					if( j >= 5 ){
						//커서가 없어지고 난 다음에 글자가 다시 나타날 때 일정시간 텀을 주기 위해서 i값을 조절함.
						i = -3;
						j = 0;
						inputText2.empty();
					}
				}
				i+=1;
			},300)
	})();


	//-----------
	//세번째 'portfolio' - 글자글자마다 커서 깜빡이는 거
	inputText2.after('<p class="input_text text_03"></p>');

	var inputText3 =  $('.text_03');
	var t3Text = "글자마다 깜빡";
	var t3Arr = t3Text.split('');
	console.log(t3Arr);
	(function(){
		var i = 0;
		var j = true;
		setInterval(
			function(){
				//글자하나씩 나타나고, 커서도 나타나고
				if( i < t3Arr.length && j == true ){
					inputText3.append( t3Arr[i] );
					i+=1;
					if( i >= t3Arr.length ){
						j = false;
					}

					//글자 하나씩 뒤에서부터 없어지는 거
				} else if ( i > 0 && j == false ){
					// inputText3.empty();
					// i = 0;
					i -=1;
					var samt = inputText3.text().slice(0,-1);
					inputText3.text(samt);
				} else {
					j = true;
				}
			},500)
	})();






	// jQuery 종료
})(jQuery);