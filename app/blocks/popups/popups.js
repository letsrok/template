/*Popups Begin*/

$(document).on('click', '.js-popup', function(){
	let popupTarget = $(this).attr('data-popup');
	$('.popups').addClass('popups_open');
	$(`.${popupTarget}`).show().removeClass('popup_close').addClass('popup_open');
	$('body').addClass('body_freeze');
	return false;
});

$(document).on('click', '.popup__close, .popups__overlay', function(){
	$('.popup').addClass('popup_close').removeClass('popup_open');
	setTimeout(function(){$('.popup').hide()}, 500);
	setTimeout(function(){$('.popups').removeClass('popups_open')}, 500);
	$('body').removeClass('body_freeze');
	return false;
});

/*Popups End*/