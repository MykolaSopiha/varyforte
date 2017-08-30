import $ from 'jquery';
import 'slick-carousel';


// WEB FONT LOADER begin
var WebFont = require('webfontloader');
WebFont.load({
	google: {
		families: ['Acme:400', 'Catamaran:700']
	}
});
// WEB FONT LOADER end


$(document).ready(function () {

	// --- slick.js initialization begin ---
	$('.slick-carousel').each(function (idx, item) {
	    var carouselId = "carousel" + idx;
	    $(this).find('.slider__items').id = carouselId + "items";
	    $(this).find('.slider__arrow--prev').id = carouselId + "arrow--prev";
	    $(this).find('.slider__arrow--next').id = carouselId + "arrow--next";

	    $(this).find('.slider__items').slick({
			prevArrow: $(this).find('.slider__arrow--prev'),
			nextArrow: $(this).find('.slider__arrow--next'),
			adaptiveHeight: true,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
	    });
	});
	// --- slick.js initialization end ---

});