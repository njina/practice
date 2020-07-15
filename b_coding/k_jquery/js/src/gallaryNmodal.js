//gallaryNmodal.js
//갤러리 + 모달창


(function($){
	// jQuery 시작 


	// list버튼 생성
	var galleryModalData;
	$.ajax({
		url:'../data/galleryModalData.json',
		async:false,
		success:function(data){
			galleryModalData = data;
		}
	});
console.log(galleryModalData)
	// ----------------
	var cardCon = '\
	<li><a href="#">\
		<figure class="img_wrap">\
			<img src="" alt="">\
			<figcaption class="hidden"></figcaption>\
		</figure>\
		<dl>\
			<dt></dt>\
			<dd></dd>\
		</dl>\
	</a></li>'
	var imgUrl = '../img/dog_gallery/thum/';

	// ----------------
	var conBox = $('#conBox');
	var conUl = conBox.children('ul');
	var selectLi;
	// ----------------
	//jason파일에 있는 데이터 삽입하기
	// 카드내용삽입
	for(var i = 0; i < galleryModalData.length ; i++){
		conUl.append(cardCon);
		selectLi = conUl.children('li').eq(i);
		selectLi.find('img').attr({src: imgUrl + galleryModalData[i].thumb.img.src, alt: galleryModalData[i].thumb.img.src});
		selectLi.find('figcaption').text(galleryModalData[i].thumb.img.narr);
		selectLi.find('dt').text(galleryModalData[i].thumb.title);
		selectLi.find('dd').text(galleryModalData[i].thumb.content);
	}	
	
	// ----------------
	var conLi = conBox.find('li');
	
	
	var gallery = $('.gallery_wrap');
	var galleryClose = gallery.find('.close_btn');
	var galleryLink = gallery.find('a');
	
	var detail = $('.detail_wrap');
	var detailClose = detail.find('.detail_close_btn').find('button');
	var detailBackground = detail.find('.detail_background');
	
	var cardIndex;
	// ----------------
	//gallary 창에 내용 삽입
	
	
	// ----------------
	// card 클릭시 갤러리 창 띄우기
	conLi.on('click', 'a', function(e){
		e.preventDefault();
		// !!!!카드를 클릭하면 데이터를 불러오는 게 가장 큰 핵심!!!!!
		var thisIndex = $(this).parent('li').index();
		cardIndex = thisIndex;
		// 갤러리창 삽입------
		var gDataI = galleryModalData[cardIndex].gallery;
		gallery.find('.img_bg').css({backgroundImage:'url(' + imgUrl + gDataI.image + ')', backgroundRepeat:'no-repeat'});
		// ------
	
		gallery.addClass('active');
	});

	//갤러리 창 들어가기
	galleryClose.on('click','button', function(e){
		e.preventDefault();
		gallery.removeClass('active');
	});
	
	galleryLink.on('click',function(e){
		e.preventDefault();
		detail.fadeIn(function(){
			detail.find('button').focus();
		});
	});


	var detailHide = function(e){
		e.preventDefault();
		detail.fadeOut();
		gallery.removeClass('active');
		conLi.eq(cardIndex).find('a').focus();
	};

	detailClose.on('click',detailHide);
	detailBackground.on('click',detailHide);











	// jQuery 종료
})(jQuery);