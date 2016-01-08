$('.accordion').on('click', '.control', function(e){
	e.preventDefault();
	$(this).next('.panel').not(':animated').slideToggle();
});

$('.control-hover').hover(function(e){
	e.preventDefault();
	$(this).next('.panel').not(':animated').slideToggle();
});

