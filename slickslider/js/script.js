"use strict";
if ($('.js-elementSlider').length > 0 ) {
	$('.js-elementSlider').each( function (i, item) {
		$(this).slick({
			centerMode: false,
			centerPadding: '0',
			slidesToShow: 3,
			variableWidth: true,
			dots: false,
			infinite: false,
			responsive: [
				{
					breakpoint: 1280,
					settings: {
						centerMode: false,
						centerPadding: '0',
						slidesToShow: 2,
						variableWidth: true,
					}
				},
				{
					breakpoint: 768,
					settings: {
						centerMode: false,
						centerPadding: '0',
						slidesToShow: 1,
						variableWidth: true,
					}
				}
			]
		});
		$(this).addClass('visible');
	});
}