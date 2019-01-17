$(document).on('click', '.js__feedback', function(){
  $('.feedback').addClass('feedback_open');
  $('.feedback__form-wrap').removeClass('feedback__form-wrap_close').addClass('feedback__form-wrap_open');
  return false;
});

$(document).on('click', '.js__feedback-close, .feedback__bg', function(){
  $('.feedback__form-wrap').addClass('feedback__form-wrap_close').removeClass('feedback__form-wrap_open');
  setTimeout(function(){$('.feedback').removeClass('feedback_open')}, 500);

  return false;
});

$('.feedback__input_requied').on('change', function () {
  verifyForm($(this));
});

function verifyForm (target){
  let value = target.val().trim().length;
  if(value < 1) {
    target.addClass('feedback__input_error');
    target.prev('.feedback__placeholder').addClass('feedback__placeholder_error');
    return false;
  } else {
    target.removeClass('feedback__input_error');
    target.prev('.feedback__placeholder').removeClass('feedback__placeholder_error');
    return 1;
  }

};

$('.js-feedback-send').on('click', function(){

  $('.feedback__input_requied').each(function () {
    verifyForm($(this));
  });

  if($('.feedback__placeholder_error').length > 0) {
    if($('.feedback__done').is(':visible') || $('.feedback__load-wrap').is(':visible')){
      $('.feedback__error').delay(500).fadeIn(500);
      $('.feedback__done, .feedback__load-wrap').fadeOut(500);
    } else {
      $('.feedback__error').fadeIn(500);
    }

  } else {

    if($('.feedback__done').is(':visible') || $('.feedback__error').is(':visible')){
      $('.feedback__load-wrap').delay(500).fadeIn(500);
      $('.feedback__error, .feedback__done').fadeOut(500);
    } else {
      $('.feedback__load-wrap').fadeIn(500);
    }
  }

});