/*TABS*/
$(document).on('click','.js-mobile-tab-link', function(e) {
	e.preventDefault();
	var $this = $(this),
		$block = $this.closest('.js-tabsblock');
		$tabLinkBlock = $block.find('.js-mobiletabs');

	$tabLinkBlock.toggleClass('visible');
	$this.toggleClass('active');
});

$(document).on('click','.js-tab-link', function(e) {
	e.preventDefault();
	var $this		= $(this),
		thisText	= $this.text(), 
		classBlock	= $this.data('href'),
		$block		= $this.closest('.js-tabsblock'),
		$mobileBlock = $block.find('.js-mobile-tab-link'),
		$tabLinkBlock = $block.find('.js-mobiletabs'),
		tabBlock	= $block.find('.js-tab');

	$('.js-tab-link').each(function(){
		$(this).removeClass('-active');
	});

	tabBlock.each(function() {
		$(this).hide();
	});

	$tabLinkBlock.removeClass('visible');
	$this.addClass('-active');
	$('.js-tab__' + classBlock).show();
	$mobileBlock.text(thisText).removeClass('active');
});
/*TABS*/