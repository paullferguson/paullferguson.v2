window.onload = function () {
	var container = $('div.sliderGallery');
	var ul = $('ul', container);

	var itemsWidth = ul.innerHeight() - container.outerHeight();

	$('.slider', container).slider({
		orientation: "vertical",
		minValue: 0,
		maxValue: itemsWidth,
		handle: '.handle',
		stop: function (event, ui) {
			ul.animate({'top' : ui.value * -1}, 300);
		},
		slide: function (event, ui) {
			ul.css('top', ui.value * -1);
		}
	});
};