//moreView.js
//더보기 기능


(function($){
	// jQuery 시작 

var content = $('.content');
var moreBtn = $('.more').find('button');
var sampleCode = '<div class="person">\
										<span class="num"></span>\
										<div class="img"></div>\
										<dl>\
											<dt>name</dt>\
											<dd class="peopleName">jjjjjjjina</dd>\
											<dt>email</dt>\
											<dd class="email">ddd@naver.com</dd>\
										</dl>\
									</div>';
// content.append(sampleCode);

//실시간으로 외부파일 불러오기
$.ajax({
	url:"../data/people.json",
}).done(function(data){
	// console.log(data);
	var i = 0;
	var person;
	var myView = 5;
	var maxN = 30;
	// 위의 숫자는 목록이 너무 많아서 임의로 쓴 숫자.
	// var maxN = data.length; 실제로 쓴다면 이렇게 되겠지
	var LoadData = function(n){
		// if(n > 0){k=n} else {k=myView}
		// 바로 위 문장이 바로 아래 문장과 같은 뜻
		var k  = n || myView;
		var j = i + k;
		for(; i < j ;i++){
			content.append(sampleCode);
			person = $('.person');
			person.eq(i).find('span.num').text(i+1);
			person.eq(i).find('.peopleName').text(data[i].name);
			person.eq(i).find('.email').text(data[i].email);
		};
		//최대 갯수이상되면 더보기 버튼 없애기
		if( i >= maxN ) { moreBtn.hide(); }
	};

	//첫 로딩시 보여지는 갯수
	LoadData(10);

	//더보기버튼 클릭시
	moreBtn.on('click',function(e){
		// e.preventDefault();
		// ( i >= maxN ){
		// 	moreBtn.hide();
		// }
		// 삼항연산자로 쓰면 아래와 같다.
		// ( i >= maxN ) ? moreBtn.hide() : LoadData();
		LoadData();
	});
});








	// jQuery 종료
})(jQuery);












