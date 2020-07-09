//moreModal.js
//더보기 버튼 클릭시 더 많은 이미지 보이게 만들기, 모달창 생성

var listData;
var colorArr = [];
var NowListLen;

(function($){
	// jQuery 시작 

var listView = $('#listViewBox');
var listUl = listView.find('ul');
var moreBtn = listView.find('.more_btn');
// var listData;
var liCode = '<li><a href="#"><span></span></a></li>';

var i = 0;
var InsertLi = function(db, color){
	NowListLen = i + 3;

	for(;  i < NowListLen ; i+=1){

		if(i >= db.length){
			moreBtn.hide();
			break;
		}

		listUl.append( liCode );
		// console.log(i)
		listUl.find('li').eq(i).children('a').css({backgroundColor:color[i]});
		listUl.find('li').eq(i).find('span').text(db[i].displayName);
	}
};




//외부문서 불러오기
$.ajax({
	url:'../data/people2.json',
	async: false, //외부에 공개할 경우에만 작성하기!
	success: function(data){
		listData = data;

		//컬러차트만들기
		var dataLen = listData.length;
		colorArr = [];
		for(var colorI = 0; colorI < dataLen ; colorI++){
			//hsla( 각도(색상), 50%(채도), 50%(명도), 1(투명도) )
			colorArr[colorI] = 'hsla(' + parseInt(Math.random() * 360) + ', 50%, 50%, 1)';
			// console.log(colorArr);
		}

		InsertLi(listData, colorArr);

		moreBtn.on('click',function(){
			InsertLi(listData, colorArr);
		}); //--//moreBtn
	}
})
//$.ajax는 이 기능말고 외부에 있는 기능을 수행한 다음에 내부 기능을 수행한다.
// --//










	// jQuery 종료
})(jQuery);