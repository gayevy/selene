(function($){
	'use strict';

	$('.ba-slider').slick({
		infinite: true,
		prevArrow: $('.ba-slider__arrow--left'),
		nextArrow: $('.ba-slider__arrow--right'),
		dots: true,
	});

		$('.ba-banner').on('afterChange', function(e) {
			updateCurrentSlide();
		});

		$('.ba-banner .slick-dots li').each(function() {
			$(this).find('button').text( '0' + $(this).find('button').text() );
		});

		function updateCurrentSlide() {
		var currentSlideIndex = $('.ba-banner .slick-active').data('slick-index') + 1;
		$('.ba-banner .ba-current-position').text(currentSlideIndex);
	}


})(jQuery);