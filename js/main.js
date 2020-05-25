$(document).ready(function() {
	$('.menu-opener').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('mobile-menu-active')
	});

	function activateResixeHandler () {
		var win = $(window),
				doc = $('html'),
				resizeClass = 'resize-active',
				flag, timer;
		var removeClassHandler = function () {
				flag = false;
				doc.removeClass(resizeClass);
		};
		var resizeHandler = function () {
				if(!flag) {
					flag = true;
					doc.addClass(resizeClass);
				}
				clearTimeout(timer);
				timer = setTimeout(removeClassHandler, 500);
		};
		win.on('resize orientationchange', resizeHandler);
	}
	activateResixeHandler();

	$('.main-carousel').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		autoplaySeed: 1000,
		speed: 500,
		adaptiveHeight: true,
		arrows: true,
	});

	$('.commentary').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		centerMode: true,
		centerPadding: 20,
		asNavFor: '.users',
	});
	$('.users').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true,
		asNavFor: '.commentary',
		arrows: false,
	});
});