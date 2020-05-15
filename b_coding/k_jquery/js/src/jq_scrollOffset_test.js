(function($){




	$('.title').on('scroll')
	senten
	image

	$(document).on('scroll', function(){
		var topBtn = $('.top_btn');
		var btnOff = topBtn.offset().top;
		var docSt = $(document).scrollTop();

		if ( btnOff < docSt ){
			topBtn.css({'position':'fixed', 'top':'0'});
		}
		

	});






})(jQuery);