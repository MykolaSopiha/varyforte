import $ from 'jquery';
import 'slick-carousel';


// WEB FONT LOADER begin
var WebFont = require('webfontloader');
WebFont.load({
	google: {
		families: ['Acme:400', 'Catamaran:400,700']
	}
});
// WEB FONT LOADER end


$(document).ready(function () {

	// SMOOTH SCROLL begin
	$(document).on('click', 'a.ask-btn', function(event){
		event.preventDefault();

		$("html, body").animate({ scrollTop: $('#order-form').offset().top - ($(window).height()-$("#order-form").outerHeight() +10)}, 500);
	});
	// SMOOTH SCROLL end

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
			slidesToShow: 1,
			slidesToScroll: 1,
	    });
	});
	// --- slick.js initialization end ---

});