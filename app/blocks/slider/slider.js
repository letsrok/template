// Slider Begin

$(document).ready(function(){
  const slider = new Swiper('.js-slider_main', {
    slidesPerView: 1,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.slider__button_next',
      prevEl: '.slider__button_prev',
    }
  });
});

// Slider End
