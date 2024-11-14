$(function(){
	// location
    var $tabContainers = $('div.tabs > div');
	var $tabLinks = $('div.tabs ul.tabNavigation a[href^=#]');
	var hash = location.hash || $tabLinks.filter(':first').get(0).hash;
	window.scrollTo(0,0);
	$tabLinks.click(function(e){
		switchTabs(this.hash);
		e.preventDefault();
		return false;
	}).filter('a[href=' + hash + ']').click();
	
	function switchTabs(hash) {
		$tabContainers.hide().filter(hash).animate({ opacity: 'show' }, 'slow');
		return false;
	}
	
	//work slides
	
		$("div.scrollable").scrollable({ 
		size: 2, 
		items: '#thumbs',   
		hoverClass: 'hover', 
		loop: false
	});     
	
	//mail cover

	var spt = $('span.mailme');
	var at = / at /;
	var dot = / dot /g;
	var addr = $(spt).text().replace(at,"@").replace(dot,".");
	$(spt).after('<a href="mailto:'+addr+'" title="mail me" >'+ addr +'</a>')
	.hover(function(){window.status="Send a letter!";}, function(){window.status="";});
	$(spt).remove();

});

