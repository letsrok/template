/* Scroll to Top Begin */

$(window).scroll(() => {
	if( $(window).scrollTop() > 200 ) {
		$('.scroll-top').stop().fadeIn(300);
	} else {
		$('.scroll-top').stop().fadeOut(300);
	}
});

$('.scroll-top').on('click', () => {
	$('html, body').animate({
		scrollTop: 0
	}, 700)
});

/* Scroll to Top End */