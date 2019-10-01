// Feedback Begin


function verifyForm (target){
  const value = target.val().trim().length;

  if(value < 1) {
    target.addClass('input_error');
    target.prev('.input__title').addClass('input__title_error');
    return false;
  } else {
    target.removeClass('input_error');
    target.prev('.input__title').removeClass('input__title_error');
    return 1;
  }
}

function mainForm(id) {
  const animTime = 500,
        input = $(`#${id} input`),
        button = $(`.btn-${id}`),
        boxDone = $(`.feedback__done-${id}`),
        boxError = $(`.feedback__error-${id}`),
        boxLoad = $(`.feedback__load-wrap-${id}`);

  input.on('input', function(){
    if($(this).hasClass('input_number')) {
      $(this).val($(this).val().replace (/\D/, ''));
    }
  })

  input.on('change', function(){
    if($(this).hasClass('input_required'))  verifyForm($(this));
  })

  button.on('click', function(){
    input.each(function(){
      if($(this).hasClass('input_required'))  verifyForm($(this));
    })

    if(!input.hasClass('input_error')) { // All OK

      if(boxDone.is(':visible') || boxError.is(':visible')){
        boxLoad.delay(animTime).fadeIn(animTime);
        $(boxError, boxDone).fadeOut(animTime);
      }
        else {
          boxLoad.fadeIn(animTime);
      }
    } 
    
    else { 

      if(boxDone.is(':visible') || boxLoad.is(':visible')){
        boxError.delay(animTime).fadeIn(animTime);
        $(boxDone, boxLoad).fadeOut(animTime);
      } 
        else {
          boxError.fadeIn(animTime);
        }
    }
  })
}

let form1 = mainForm('form-1');

// Feedback End