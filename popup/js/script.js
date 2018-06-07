"use strict";
var blockUiOpen = false;

$.fn.center = function () {
	var top = ($(window).height() - this.height()) / 2;
	if (top < 0){
		top = 0; 
	}
	this.css("position","absolute");
	this.css("top", top  + "px");
	return this;
}

$(document).on('click', '.js-show-popup', function(e){
	e.preventDefault();
	var $form = $($(this).attr('href'));

	$.blockUI({ 
		message: $form,
		onOverlayClick: $.unblockUI,
		onBlock: function(){
			$('body').addClass('hidden-overflow');
			blockUiOpen = true;
			$form.addClass('visible');
		},
		onUnblock: function(){
			$('body').removeClass('hidden-overflow');
			blockUiOpen = false;
			$form.removeClass('visible');
		},
		css: { 
			border:0,
			centerY: false,
			position:'fixed',
			padding: 0,
			cursor: 'default',
			left: '0%',
			top: 0,
			right: '0%',
			width:'100%',
			height: '100%',
			marginBottom: '0',
			marginTop: '0',
			background: 'none',
			textAlign: 'left',
		},
			overlayCSS: {
				backgroundColor: 'rgba(36,27,73,0.9)',
				'cursor': 'default'
		},
		focusInput: false
	});
	if (!$form.hasClass('not-center')) {
		$form.center();
	}
});

/*CLOSE FORM*/
$(document).on('click touchstart','.js-close-form', function(e) {
	$.unblockUI();
	$('body').removeClass('hidden-overflow');
	$('.popUpForm.visible').removeClass('visible');
	blockUiOpen = false;
	e.preventDefault();
});

$(document).on('click touchstart', function(e) {
	var $target = $(e.target);
	if (!$target.is('input')) {
		if (blockUiOpen && ($target.closest('.popUpForm').length === 0)) {
			$.unblockUI();
			$('body').removeClass('hidden-overflow');
			$('.popUpForm.visible').removeClass('visible');
			blockUiOpen = false;
			e.preventDefault();
		}
	}
});

$(document).keyup(function(e) {
	if (e.keyCode == 27) { 
	$.unblockUI();
		$('body').removeClass('hidden-overflow');	
		$('.popUpForm.visible').removeClass('visible');
		blockUiOpen = false;
	}
});
/*CLOSE FORM*/