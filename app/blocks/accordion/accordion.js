/* Accordions Begin */

const DURATION = 250;

$(document).on('click', '.accordion__header', function(e) {
  e.preventDefault();
  const button = $(this),
    block = button.parents('.accordion'),
    body = block.find('.accordion__body'),
    isMultiple = block.parents('.accordions').data('accordion-multiple');

  body.slideToggle(DURATION);
  setTimeout(function () {block.toggleClass('is-active')}, DURATION);

  if(!isMultiple) {
    const siblings = block.siblings('.accordion');

    siblings.find('.accordion__body').slideUp(DURATION);

    setTimeout(function () {siblings.removeClass('is-active')}, DURATION);
  }
});

/* Accordions End */