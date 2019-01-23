// Menu Begin

const point = 800,
      animDuratoion = 250;

$(document).ready(() => {
  $('.nav__item').each(function(){
    if($(this).has('ul').length ) {
      $(this).addClass('nav__item_parent');
    }
  })
});

$('.nav__item').hover(
  function () {
    let ww = $(window).width();
    if( ww >= point) {
      $(this).children('.nav__drop').stop().show(animDuratoion);
    }
  },
  function () {
		let ww = $(window).width();
		if( ww >= point) {
			$(this).children('.nav__drop').stop().hide(animDuratoion);
		}
  }
);

$('.nav__item_drop').hover(
  function () {
    let ww = $(window).width();
    if( ww >= point) {
      $(this).children('.nav__sub').stop().show(animDuratoion);
    }
  },
  function () {
		let ww = $(window).width();
		if( ww >= point) {
			$(this).children('.nav__sub').stop().hide(animDuratoion);
		}
  }
);

$('.nav__link').on('click', function(e){
	let ww = $(window).width();
	if( ww < point && $(this).parent().hasClass('nav__item_parent')) {
		e.preventDefault();
		if( $(this).next('ul').hasClass('nav__drop')){
			$(this).next('ul').addClass('nav__drop_active');
			$('.nav__prev').addClass('nav__prev_active');
			$('.nav__prev').fadeIn(animDuratoion)
		} else if ($(this).next('ul').hasClass('nav__sub')){
			$(this).next('ul').addClass('nav__sub_active');
		}
	}
});

$('.nav__prev').on('click', function() {
	if( $('.nav__sub').hasClass('nav__sub_active') ) {
		$('.nav__sub').removeClass('nav__sub_active')
	} else if ($('.nav__drop').hasClass('nav__drop_active')) {
		$('.nav__drop').removeClass('nav__drop_active');
		$(this).fadeOut(animDuratoion);
	}
});


$('.burger').on('click', () => {
  $('.nav').toggleClass('nav_active');
  $('.burger').toggleClass('burger_active');
  $('body').toggleClass('body_freeze');
});


// Menu End