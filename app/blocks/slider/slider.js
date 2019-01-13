$(document).ready(function(){
  const slider = new Swiper('.js-slider', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    centerInsufficientSlides: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.slider__button_next',
      prevEl: '.slider__button_prev',
    }
  });
});
