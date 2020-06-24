//apple.js
//애플 맥북 페이지 따라하기


(function($){
	// jQuery 시작 
//공통 변수
	var win          = $(window);
	var winH         = win.innerHeight();
	var winHPart     = winH / 3 * 2;

// #openLaptop 변수
	var openLaptop   = $('#openLaptop');
	var openH2       = openLaptop.find('h2');
	var macbook      = openLaptop.find('.macbook');
	var macbookInImg = '<img src="" alt="맥북이미지" />';
	var url          = '../img/mac/';
	var j='0000';
	var imgLength = 92;

// #laptopSize 변수
	var laptopSize  = $('#laptopSize');
	var laptopSizeOffset = laptopSize.offset().top;
	var laptopSizeMacbook = laptopSize.find('.macbook');
	var macbookDiv = laptopSizeMacbook.children('div').children('div');
	var macbookDl = macbookDiv.find('dl');
	var macbookVideo = laptopSize.find('.macbook_video');

//retina display 변수
	var retinaDisplay = $('#retinaDisplay');
	var retinaImg = retinaDisplay.find('.retina_image');
	var people = retinaImg.find('.people');
	var artwork = retinaImg.find('.artwork');




	// #openLaptop영역 처리  ---------------------------------------------------

	openH2.animate({opacity:1, top:0}, 800);
	openLaptop.find('p').delay(200).animate({opacity:1, top:0}, 800);

	for(var i=0; i<imgLength; i++){
		
		if(i < 10){
			j = '000' + i;
		}else if(i < 100){
			j = '00' + i;
		}else if(i < 1000){
			j = '0' + i;
		}else{
			j = i;
		}

		macbook.append(macbookInImg);
		macbook.find('img').eq(i).attr({'src':url + 'large_' + j + '.jpg'});
	}
	// macbook.find('img').not( macbook.find('img').eq(0)  ).hide();
	macbook.find('img').hide();
	macbook.find('img').eq(0).show();

// -------------------------------------------
var secondScrollStart = 850;

	win.on('scroll', function(){
		var thisScroll = $(this).scrollTop();
		// 상단 제목, 스크롤이 이동 + 점점 투명해지게하기
		var myop = 1 - thisScroll / 400;		
		openH2.css({top: -thisScroll, opacity:myop});		
		
		// 스크롤시 노트북 이미지 변경되게 하기
		var imgSelect = parseInt( thisScroll / 600 * imgLength );
		if (imgSelect >= imgLength){
			imgSelect = imgLength-1;			
		}

		console.log(secondScrollStart);

		macbook.find('img').eq( imgSelect ).show();
		macbook.find('img').eq( imgSelect ).siblings().hide();

		// 일정 스크롤이 지난시점에서 openLaptop의 위치를 이동처리
		if(thisScroll >= secondScrollStart){
			openLaptop.css({top : secondScrollStart - thisScroll});
		}

	});	
	// #openLaptop영역 처리 끝 ---------------------------------------------------

	// #laptopSize 영역 처리 ------------------------------------------------
	//두번째 영역 비디오영역에 .active 입력
	// macbookVideo.addClass('active');
	macbookDl.css({opacity:0});

	//dl의 offset을 각각 파악
	var dlOffset = [];
	for(var i = 0; i < macbookDl.length ; i++){
		dlOffset[i] = macbookDl.eq(i).offset().top;
	}
	console.log(dlOffset);

	win.on('scroll', function(){
		var winScroll = $(this).scrollTop();
		var winScrollPlus = winScroll + winHPart;
		var op;

		if(winScrollPlus >= laptopSizeOffset){
			for(var i = 0; i< macbookDl.length; i++){
				if( winScrollPlus >= dlOffset[i] ){
					op = (winScrollPlus - dlOffset[i]) / 400;
					macbookDl.eq(i).css({opacity:op});
				}
			}
			//동영상 동작하게
			if( !macbookVideo.hasClass('active') ){
				macbookVideo.addClass('active');
				macbookVideo.find('video').get(0).play();
			}
		}
	});

//retina display
var retinaImgOffset = retinaImg.offset().top;
var retinaImgWidth = retinaImg.outerWidth();
var winWidth = win.outerWidth();
var retinaImgPercent = retinaImgWidth / winWidth * 100;
// console.log(retinaImgPercent);
retinaImg.css({width: retinaImgPercent + 'vw'});
var rep = 0;
var rep2 = 100;
var rep3 = 0;
var retinaLaptopGo = false;
retinaImg.css({height:winH + 'px'});
win.on('scroll',function(){
	var winScroll = $(this).scrollTop();
	var winScrollPlus = winScroll + winHPart;

	if( winScrollPlus >= retinaImgOffset && rep <= 30){
		rep = (winScrollPlus - retinaImgOffset) / winH * 30;		
		retinaImg.css({width:retinaImgPercent + rep + 'vw'});
	}

	if( winScroll >= retinaImgOffset ){
		rep2 = 100 - (winScrollPlus - retinaImgOffset) / winH * 100;
		// console.log(rep2);
		retinaImg.css({position:'fixed',top:0});
		people.css({height:rep2 + '%'});
		if( rep2 <= 0 ){
			retinaLaptopGo = true;
		}
	} else {
		retinaImg.css({position:'relative', top:'auto'});
	}
	if( retinaLaptopGo === true ){
		rep3 = winScrollPlus - retinaImgOffset / winH * 30;
		// retinaImg.css({width:, height:});
	}
});











	
	
	})(jQuery);