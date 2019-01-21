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
    $(this).children('.nav__drop').stop().hide(animDuratoion);
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
    $(this).children('.nav__sub').stop().hide(animDuratoion);
  }
);

$('.burger').on('click', () => {
  $('.nav').toggleClass('nav_active');
  $('.burger').toggleClass('burger_active');
  $('body').toggleClass('body_freeze');
});


// Menu End