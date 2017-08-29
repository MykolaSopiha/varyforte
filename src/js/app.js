import $ from 'jquery';
import 'slick-carousel';

// WEB FONT LOADER begin
var WebFont = require('webfontloader');
WebFont.load({
	google: {
		families: ['Acme:400']
	}
});
// WEB FONT LOADER end


$(document).ready(function () {

	// $('.slick-carousel').each(function () {
	// 	$('this').find('.slides').slick({
	// 		nextArrow: $('this').find('.arrow-next'),
	// 		prevArrow: $('this').find('.arrow-prev')
	// 	});
	// });


	// --- slick.js initialization begin ---
	$('.slick-carousel').each(function (idx, item) {
	    var carouselId = "carousel" + idx;
	    $(this).find('.slides').id = carouselId + "items";
	    $(this).find('.arrow-prev').id = carouselId + "arrow-prev";
	    $(this).find('.arrow-next').id = carouselId + "arrow-next";

	    $(this).find('.slides').slick({
			prevArrow: $(this).find('.arrow-prev'),
			nextArrow: $(this).find('.arrow-next')
	    });
	});
	// --- slick.js initialization end ---


});