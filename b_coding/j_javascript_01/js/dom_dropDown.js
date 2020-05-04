//dom_dropdown.js
//js로 드롭다운 메뉴 제어하기 기초

var domDropDown = document.getElementsByClassName('drop_menu')[0];
var domDt = document.getElementsByTagName('dt');
//지금 css에서 dt에 a태그를 삽입안했거든? 그러면 tab이 안 잡히는데, tab을 잡히게 하고 싶을 때.
var domDd = document.getElementsByTagName('dd');
// dd 선택자
console.log(domDt.length); //배열요소


// domDt[0].setAttribute('tabindex','0');
// domDt[1].setAttribute('tabindex','0');
// domDt[2].setAttribute('tabindex','0');
// domDt[3].setAttribute('tabindex','0');
// 아래의 코드는 위의 4줄을 한꺼번에 처리하는 코드(반복문)
var i = 0;
for(; i < domDt.length ; i++){
	domDt[i].setAttribute('tabindex','0');
}

var DomDdFn = function(action){
	var j = 0;
	for(; j < domDd.length; j++){
	domDd[j].style.display = action;
	}
};

// 마우스오버했을 때의 나타나기  - 함수메소드를 활용하여
domDropDown.addEventListener('mouseenter',function(){
	//---각각 처리하기
	// domDd[0].style.display = 'block';
	// domDd[1].style.display = 'block';
	// domDd[2].style.display = 'block';
	// domDd[3].style.display = 'block';
	//---각각 처리한 걸 반복문으로 처리하기
	// 	var j = 0;
	// 	for(; j < domDd.length; j++){
	// 	domDd[j].style.display = 'block';
	// }
	//---반목문을 변수와 함수로 처리하기
	DomDdFn('block');
});

//마우스오버 벗어날 때 사라지기
domDropDown.addEventListener('mouseleave',function(){
	// domDd[0].style.display = 'none';
	// domDd[1].style.display = 'none';
	// domDd[2].style.display = 'none';
	// domDd[3].style.display = 'none';
	//---위의 mouseleaver를 반복문으로 처리하기
	// var k = 0;
	// for(; k < domDropDown.length; k++){
	// domDd[k].style.display = 'none'; 
	// }
	//반복문을 변수와 함수로 처리하기
	DomDdFn('none');
});


//tab했을 때 서브메뉴(dd) 나타나게
domDt[0].addEventListener('focus', function(){
	domDd[0].style.display = 'block';
	domDd[1].style.display = 'block';
	domDd[2].style.display = 'block';
	domDd[3].style.display = 'block';
});


