"use strict";

/* Accordions Begin */
var DURATION = 250;
$(document).on('click', '.accordion__header', function (e) {
  e.preventDefault();
  var button = $(this),
      block = button.parents('.accordion'),
      body = block.find('.accordion__body'),
      isMultiple = block.parents('.accordions').data('accordion-multiple');
  body.slideToggle(DURATION);
  setTimeout(function () {
    block.toggleClass('is-active');
  }, DURATION);

  if (!isMultiple) {
    var siblings = block.siblings('.accordion');
    siblings.find('.accordion__body').slideUp(DURATION);
    setTimeout(function () {
      siblings.removeClass('is-active');
    }, DURATION);
  }
});
/* Accordions End */
// Feedback Begin

$('.btn-check input').on('change', function () {
  var target = $(this).val(),
      btn = $(".btn-".concat(target));
  $(this).prop('checked') ? btn.removeClass('disabled') : btn.addClass('disabled');
});

function verifyForm(target) {
  var value = target.val().trim().length;

  if (value < 1) {
    target.addClass('input_error');
    target.prev('.input__title').addClass('input__title_error');
    return false;
  } else {
    target.removeClass('input_error');
    target.prev('.input__title').removeClass('input__title_error');
    return 1;
  }
}

function mainForm(id, funcSend) {
  var animTime = 500,
      input = $("#".concat(id, " input")),
      button = $(".btn-".concat(id)),
      boxDone = $(".feedback__done-".concat(id)),
      boxError = $(".feedback__error-".concat(id)),
      boxLoad = $(".feedback__load-wrap-".concat(id));
  input.on('input', function () {
    if ($(this).hasClass('input_number')) {
      $(this).val($(this).val().replace(/\D/, ''));
    }
  });
  input.on('change', function () {
    if ($(this).hasClass('input_required')) verifyForm($(this));
  });
  button.on('click', function () {
    input.each(function () {
      if ($(this).hasClass('input_required')) verifyForm($(this));
    });

    if (!input.hasClass('input_error')) {
      // All OK
      if (boxDone.is(':visible') || boxError.is(':visible')) {
        boxLoad.delay(animTime).fadeIn(animTime);
        $(boxError, boxDone).fadeOut(animTime);
        funcSend();
      } else {
        boxLoad.fadeIn(animTime);
        funcSend();
      }
    } else {
      if (boxDone.is(':visible') || boxLoad.is(':visible')) {
        boxError.delay(animTime).fadeIn(animTime);
        $(boxDone, boxLoad).fadeOut(animTime);
      } else {
        boxError.fadeIn(animTime);
      }
    }
  });
}

function sendmail(data, form) {
  data = {};
  $.ajax({
    type: "POST",
    url: "../sendermail.php",
    data: data,
    cache: false,
    success: function success(response) {
      if (response == 1) {
        $(".feedback__load-wrap-form-1").fadeOut(500);
        $('.feedback__done-form-1').delay(500).fadeIn(500);
      } else {
        $('.feedback__load-wrap-form-1').fadeOut(500);
        $('.feedback__error-form-1').delay(500).fadeIn(500);
      }
    }
  });
}

var form1 = mainForm('form-1', sendmail); // Feedback End

/*Form Begin*/

$('.js-datepicker').each(function () {
  var el = $(this);
  el.datepicker();
});

if ($('.js-select').length) {
  var choices = new Choices('.js-select', {
    searchEnabled: false,
    itemSelectText: ''
  });
}

$(document).on('click', '.js-numberbox-minus, .js-numberbox-plus', function (e) {
  e.preventDefault();
  var input = $(this).parent().find('.js-numberbox-input');
  var val = +input.val();
  var minus = $(this).attr('class').includes('minus') || false;

  if (!val.length) {
    input.val(1);
  }

  if (minus) {
    input.val(val > 0 ? val -= 1 : 0);
  } else {
    input.val(val += 1);
  }
});
$(document).on('keyup change', '.js-numberbox-input', function () {
  this.value = this.value.replace(/[^\d]/, '');
  if ($(this).val() < 0) $(this).val(0);
});
/*Form End*/

/* eslint-disable */

function freeze() {
  var h = $('html');

  if (h.css('position') !== 'fixed') {
    var top = h.scrollTop() ? h.scrollTop() : $('body').scrollTop();

    if (window.innerWidth > h.width()) {
      h.css('overflow-y', 'scroll');
    }

    h.css({
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: -top
    });
  }
}

function unfreeze() {
  var h = $('html');

  if (h.css('position') === 'fixed') {
    h.css('position', 'static');
    $('html, body').scrollTop(-parseInt(h.css('top'), 10));
    h.css({
      position: '',
      width: '',
      height: '',
      top: '',
      'overflow-y': ''
    });
  }
}
/* eslint-enable */

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
});
$(window).on('resize', function () {
  if ($(window).width() >= point) {
    $('.nav').removeClass('nav_active');
    $('.burger').removeClass('burger_active');
  }
});
/* Menu End */

/*Popups Begin eslint-disable*/

$(document).on('click', '.js-popup', function () {
  var popupTarget = $(this).attr('data-popup');
  $('.popups').addClass('popups_open');
  $('.popups__overlay').addClass('js-active');
  $(".".concat(popupTarget)).show().removeClass('popup_close').addClass('popup_open');
  freeze();
  return false;
});
$(document).on('click', '.popup__close, .popups__overlay', function () {
  $('.popup').addClass('popup_close').removeClass('popup_open');
  $('.popups__overlay').removeClass('js-active');
  setTimeout(function () {
    $('.popup').hide();
  }, 500);
  setTimeout(function () {
    $('.popups').removeClass('popups_open');
  }, 500);
  unfreeze();
  return false;
});
/*Popups End eslint-enable*/

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
  var slider = new Swiper('.js-slider_main', {
    slidesPerView: 1,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 50000000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.slider__button_next',
      prevEl: '.slider__button_prev'
    }
  });
}); // Slider End

/*Tabs Begin*/

$('.tabs__tab').on('click', function () {
  var tabParent = $(this).parent('ul').attr('data-tabs'),
      tabNumber = $(this).index(),
      tabTarget = $(document).find('[data-tab="' + tabParent + '"]');
  $(this).addClass('tabs__tab_active').siblings().removeClass('tabs__tab_active');
  tabTarget.children().removeClass('tabs__content_active');
  tabTarget.children().eq(tabNumber).addClass('tabs__content_active');
});
$('.tabs-filters__tab').on('click', function () {
  var tabParent = $(this).parent('ul').attr('data-tabs'),
      tabFilter = $(this).attr('data-tab-filter'),
      tabTarget = $(document).find('[data-tab="' + tabParent + '"]');
  $(this).addClass('tabs-filters__tab_active').siblings().removeClass('tabs-filters__tab_active');
  tabTarget.children().not(".".concat(tabFilter)).fadeOut(300);
  setTimeout(function () {
    tabTarget.children(".".concat(tabFilter)).fadeIn(300);
  }, 300);
});
/*Tabs End*/

$(document).ready(function () {
  function sum(x) {
    var buff = 0;

    function f(x) {
      if (x && +x !== undefined) {
        buff += +x;
        return f;
      } else {
        return buff;
      }
    }

    return f(x);
  }

  console.log(sum(1)(2)(-1)(2)(4)(2)(4)());
});