// Slider Begin

$(document).ready(function(){
  const slider = new Swiper('.slider-example', {
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.slider__button_next',
      prevEl: '.slider__button_prev',
    }
  });
});

// Slider End
