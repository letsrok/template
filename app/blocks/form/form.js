/*Form Begin*/

$('.js-datepicker').each(function () {
	const el = $(this);

	el.datepicker();
});

if ($('.js-select').length) {
	const choices = new Choices('.js-select', {
		searchEnabled: false,
		itemSelectText: '',
	});
}

$(document).on('click', '.js-numberbox-minus, .js-numberbox-plus', function (e) {
	e.preventDefault();

	const input = $(this).parent().find('.js-numberbox-input');
	let val = +input.val();
	const minus = $(this).attr('class').includes('minus') || false;

	if (!val.length) {
		input.val(1);
	}

	if (minus) {
		input.val(val > 0 ? (val -= 1) : 0);
	} else {
		input.val(val += 1);
	}
});

$(document).on('keyup change', '.js-numberbox-input', function () {
	this.value = this.value.replace(/[^\d]/, '');
	if ($(this).val() < 0) $(this).val(0);
});

/*Form End*/