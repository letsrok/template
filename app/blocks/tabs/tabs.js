/*Tabs Begin*/

$('.tabs__tab').on('click', function() {
	let tabParent = $(this).parent('ul').attr('data-tabs'),
			tabNumber = $(this).index(),
			tabTarget = $(document).find('[data-tab="' + tabParent + '"]');

	$(this).addClass('tabs__tab_active')
					.siblings().removeClass('tabs__tab_active');

	tabTarget.children().removeClass('tabs__content_active');
	tabTarget.children().eq(tabNumber).addClass('tabs__content_active');
});

$('.tabs-filters__tab').on('click', function(){
	let tabParent = $(this).parent('ul').attr('data-tabs'),
		tabFilter = $(this).attr('data-tab-filter'),
		tabTarget = $(document).find('[data-tab="' + tabParent + '"]');

		$(this).addClass('tabs-filters__tab_active')
			.siblings().removeClass('tabs-filters__tab_active');

	tabTarget.children().not(`.${tabFilter}`).fadeOut(300);

		setTimeout(function () {
			tabTarget.children(`.${tabFilter}`).fadeIn(300);
		}, 300)
});

/*Tabs End*/