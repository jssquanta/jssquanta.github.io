var ul = $('ul');
var li = $('li')
var resultCard = $('.result-card');
var line = $('.line');
var loader = $('#loader');

li.on('click', function() {
	var newIndex = $(this).index();
	var currentIndex = ul.find('li.active').index();
	li.removeClass('active');
	$(this).addClass('active');
	resultCard.toggleClass('active');
	line.toggleClass('active');
	loader.toggleClass('active');
	$('.result-card-two').toggleClass('active');
})