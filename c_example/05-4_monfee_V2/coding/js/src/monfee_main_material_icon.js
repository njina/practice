//monfee_main_material_icon.js
//몽피커피 아이콘


(function($){
	// jQuery 시작 

var materialBtnArea = $('.material_btn');
var materialBtn = materialBtnArea.children('button');

var materialArea = $('.material_area');
var materialUl = materialArea.find('ul');
var materialLi = materialUl.find('li');
// matLiLast.eq(-1).prependTo(materialUl);

var mvLength = 2;

var matLiLast = materialLi.eq(-3).nextAll('li');
materialUl.prepend(matLiLast);
materialLi = materialUl.find('li');
materialUl.css({width:250+'%'});

/*
var matFirst_01 = parseInt( materialLi.eq(0).css('width') );
var matFirst_02 = parseInt( materialLi.eq(0).css('marginLeft') );
var matFirst_03 = parseInt( materialLi.eq(0).css('paddingLeft') );
var matFirst_04 = parseInt( materialLi.eq(0).css('paddingRight') );
var  matFirstSize = matFirst_01 + matFirst_02 +  matFirst_03 + matFirst_03 + matFirst_04;
*/ 
var matFirstSize = materialLi.eq(1).outerWidth(true) * 2;
materialUl.css({marginLeft  : -matFirstSize + 'px'});
materialUl.css({position:'relative'});

/* 
//버튼 클릭할 때마다 버튼 사라지게해서 못 누르게 하는 거
var n = 0;
materialUl.css({width:250+'%'});
materialBtn.on('click',function(e){
	e.preventDefault();
	var thisIt = $(this)[0]
	var nextBtn = materialBtnArea.children('.next')[0];
	var btnView = function(){
		if( n <= 0){
			materialBtnArea.children('.prev').hide();
			materialBtnArea.children('.prev').show();
		} else if ( n >= 5 ){
			materialBtnArea.children('.prev').show();
			materialBtnArea.children('.prev').hide();
		}	else {
			materialBtn.show();
		}
	};

	if( thisIt === nextBtn ){
		materialBtn.hide();
		n+=1;
		materialUl.animate({left: -n * matFirstSize + 'px'},function(){
			// materialBtn.show();
			btnView();
		});
	} else {
		materialBtn.hide();
		n-=1;
		materialUl.animate({left: -n * matFirstSize + 'px'},function(){
			// materialBtn.show();
			btnView();
		});
	}
});
*/

//클릭시 양끝 요소를 마지막 요소를 끝으로 붙여서 무한 이동하게 만들기
// materialUl.css({marginLeft  : -matFirstSize + 'px'});
var thisOk = true;
materialBtn.on('click',function(e){
	e.preventDefault();
	var thisIt = $(this)[0]
	var nextBtn = materialBtnArea.children('.next')[0];
	if( thisIt === nextBtn && thisOk ){
		thisOk  = false;
		materialUl.animate({left:-matFirstSize + 'px'},function(){
			materialLi.eq(2).prevAll('li').appendTo(materialUl);
			materialUl.css({left:0});
			materialLi = materialUl.find('li'); //li구조가 바뀌었으니까 재선언
			thisOk = true;
		});
	} else if ( thisOk ) {
		thisOk  = false;
		materialUl.animate({left: matFirstSize + 'px'},function(){
			materialLi.eq(-3).nextAll().prependTo(materialUl);
			materialUl.css({left:0});
			materialLi = materialUl.find('li');
			thisOk = true;
		});
	}
});











	// jQuery 종료
})(jQuery);