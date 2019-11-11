// Feedback Begin

$('.btn-check input').on('change', function(){
  let target = $(this).val(),
      btn = $(`.btn-${target}`);

  $(this).prop('checked') ? btn.removeClass('disabled') : btn.addClass('disabled');

})

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
        //sendmail();
      }
        else {
          boxLoad.fadeIn(animTime);
          //sendmail();
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

/*function sendmail(data, form) {
  
  data = {

  }

  $.ajax({
		type: "POST",
		url: "../sendermail.php",
		data: data,
		cache: false,
		success: function(response){
			if(response == 1){
				$(`.feedback__load-wrap-form-1`).fadeOut(500);
				$('.feedback__done-form-1').delay(500).fadeIn(500);
			} else {
				$('.feedback__load-wrap-form-1').fadeOut(500);
        $('.feedback__error-form-1').delay(500).fadeIn(500);
	 		}
		}
	});
}*/

let form1 = mainForm('form-1');

// Feedback End