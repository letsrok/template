/* eslint-disable */
function freeze() {
	var h = $('html');

	if (h.css('position') !== 'fixed') {
		var top = h.scrollTop() ? h.scrollTop() : $('body').scrollTop();

		if (window.innerWidth > h.width()) {
			h.css('overflow-y', 'scroll');
		}

		h.css({
			width: '100%',
			height: '100%',
			position: 'fixed',
			top: -top,
		});
	}
}

function unfreeze() {
	var h = $('html');

	if (h.css('position') === 'fixed') {
		h.css('position', 'static');

		$('html, body').scrollTop(-parseInt(h.css('top'), 10));
		h.css({
			position: '',
			width: '',
			height: '',
			top: '',
			'overflow-y': '',
		});
	}
}

/* eslint-enable */