/*Popups Begin eslint-disable*/

$(document).on('click', '.js-popup', function(){
	let popupTarget = $(this).attr('data-popup');
	$('.popups').addClass('popups_open');
	$('.popups__overlay').addClass('js-active');
	$(`.${popupTarget}`).show().removeClass('popup_close').addClass('popup_open');
	freeze();
	return false;
});

$(document).on('click', '.popup__close, .popups__overlay', function(){
	$('.popup').addClass('popup_close').removeClass('popup_open');
	$('.popups__overlay').removeClass('js-active');
	setTimeout(function(){$('.popup').hide()}, 500);
	setTimeout(function(){$('.popups').removeClass('popups_open')}, 500);
	unfreeze();
	return false;
});

/*Popups End eslint-enable*/