//audio.js
//오디오 기능이해
//브라우저마다 다른 컨트롤러 버리고, 나만의 음악 컨트롤러 만들기


(function($){
	// jQuery 시작 

var audio = $('.media_music');
var audioSrc = audio.find('source');
var play = $('.play');
var pause = $('.pause');
var next = $('.next');

var playList = [];
playList[0] = 'Gustav_Landin_Elatan';
playList[1] = 'Kai_Engel_Moonlight_Reprise';
playList[2] = 'Chad_Crouch_Headwaters_Instrumental';
playList[3] = 'Koona_Starkey';

var url = '../media/audio/';
var playTitle = function(i){
	audio.attr({src : url + playList[i] + '.mp3'}); //audio 태그에 직접적으로 부여

	//아래는 따로 배열을 만들어서 하는 거
	// audioSrc.eq(0).attr({src : url + playList[i] + '.mp3', type:'audio/mp3'});
	// audioSrc.eq(1).attr({src : url + playList[i] + '.ogg', type:'audio/ogg'});
};
var n = 0;
playTitle(n);

play.on('click',function(e){
	e.preventDefault();
	audio.get(0).play();
	//audio[0].play();  //위의 코드와 같은 뜻임
});

pause.on('click',function(e){
	e.preventDefault();
	audio.get(0).pause();
});

// 플레이리스트 ???
next.on('click',function(e){
	e.preventDefault();
	if(n >= playList.length){ n = 0; } else {n += 1 ;}
	console.log(n);
	audio[0].pause();
	playTitle(n);
	audio[0].play();
	
});

	// jQuery 종료
	})(jQuery);