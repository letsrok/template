"use strict";

// Feedback Begin
$('.feedback__input_requied').on('change', function () {
  verifyForm($(this));
});
$('.feedback__input[type="phone"]').on('keyup', function () {
  $(this).val($(this).val().replace(/\D/, ''));
});

function verifyForm(target) {
  var value = target.val().trim().length;

  if (value < 1) {
    target.addClass('feedback__input_error');
    target.prev('.feedback__placeholder').addClass('feedback__placeholder_error');
    return false;
  } else {
    target.removeClass('feedback__input_error');
    target.prev('.feedback__placeholder').removeClass('feedback__placeholder_error');
    return 1;
  }
}

$('.js-feedback-send').on('click', function () {
  $('.feedback__input_requied').each(function () {
    verifyForm($(this));
  });

  if ($('.feedback__placeholder_error').length > 0) {
    if ($('.feedback__done').is(':visible') || $('.feedback__load-wrap').is(':visible')) {
      $('.feedback__error').delay(500).fadeIn(500);
      $('.feedback__done, .feedback__load-wrap').fadeOut(500);
    } else {
      $('.feedback__error').fadeIn(500);
    }
  } else {
    if ($('.feedback__done').is(':visible') || $('.feedback__error').is(':visible')) {
      $('.feedback__load-wrap').delay(500).fadeIn(500);
      $('.feedback__error, .feedback__done').fadeOut(500);
    } else {
      $('.feedback__load-wrap').fadeIn(500);
    }
  }
}); // Feedback End

/* Menu Begin */

var point = 800,
    animDuratoion = 250;
$(document).ready(function () {
  $('.nav__item').each(function () {
    if ($(this).has('ul').length) {
      $(this).addClass('nav__item_parent');
    }
  });
});
$('.nav__item').hover(function () {
  var ww = $(window).width();

  if (ww >= point) {
    $(this).children('.nav__drop').addClass('nav__drop_desktop-active');
  }
}, function () {
  var ww = $(window).width();

  if (ww >= point) {
    $(this).children('.nav__drop').removeClass('nav__drop_desktop-active');
  }
});
$('.nav__item_drop').hover(function () {
  var ww = $(window).width();

  if (ww >= point) {
    $(this).children('.nav__sub').addClass('nav__sub_desktop-active');
  }
}, function () {
  var ww = $(window).width();

  if (ww >= point) {
    $(this).children('.nav__sub').removeClass('nav__sub_desktop-active');
  }
});
$('.nav__link').on('click', function (e) {
  var ww = $(window).width();

  if (ww < point && $(this).parent().hasClass('nav__item_parent')) {
    e.preventDefault();

    if ($(this).next('ul').hasClass('nav__drop')) {
      $(this).next('ul').addClass('nav__drop_active');
      $('.nav__prev').addClass('nav__prev_active').fadeIn(animDuratoion);
    } else if ($(this).next('ul').hasClass('nav__sub')) {
      $(this).next('ul').addClass('nav__sub_active');
    }
  }
});
$('.nav__prev').on('click', function () {
  if ($('.nav__sub').hasClass('nav__sub_active')) {
    $('.nav__sub').removeClass('nav__sub_active');
  } else if ($('.nav__drop').hasClass('nav__drop_active')) {
    $('.nav__drop').removeClass('nav__drop_active');
    $(this).fadeOut(animDuratoion);
  }
});
$('.burger').on('click', function () {
  $('.nav').toggleClass('nav_active');
  $('.burger').toggleClass('burger_active');
  $('body').toggleClass('body_freeze');
});
$(window).on('resize', function () {
  if ($(window).width() >= point) {
    $('body').removeClass('body_freeze');
    $('.nav').removeClass('nav_active');
    $('.burger').removeClass('burger_active');
  }
});
/* Menu End */

/*Popups Begin*/

$(document).on('click', '.js-popup', function () {
  var popupTarget = $(this).attr('data-popup');
  $('.popups').addClass('popups_open');
  $(".".concat(popupTarget)).show().removeClass('popup_close').addClass('popup_open');
  $('body').addClass('body_freeze');
  return false;
});
$(document).on('click', '.popup__close, .popups__overlay', function () {
  $('.popup').addClass('popup_close').removeClass('popup_open');
  setTimeout(function () {
    $('.popup').hide();
  }, 500);
  setTimeout(function () {
    $('.popups').removeClass('popups_open');
  }, 500);
  $('body').removeClass('body_freeze');
  return false;
});
/*Popups End*/

/* Scroll to Top Begin */

$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $('.scroll-top').stop().fadeIn(300);
  } else {
    $('.scroll-top').stop().fadeOut(300);
  }
});
$('.scroll-top').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 700);
});
/* Scroll to Top End */
// Slider Begin

$(document).ready(function () {
  var slider = new Swiper('.js-slider', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    centerInsufficientSlides: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.slider__button_next',
      prevEl: '.slider__button_prev'
    }
  });
}); // Slider End