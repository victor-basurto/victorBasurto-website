$(document).on('ready', function() {
	/**
	 * Activate Animation-Wow.js
	 */
	new WOW().init();
	

	/**
	 * Activate ScrollSpy Menu
	 */
	$('body').scrollspy({
		target: '.navbar',
		offset: 50
	});
	/**
	 * Smooth Scrolling Sections
	 */
	$('a[href*=#]:not([href=#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 50
				}, 1000);
				return false;
			}
		}
	});

	/**
	 * Resume Area
	 */
	// resume button variable
	var $buttonShowHide = $('#show-hide');
	// resume hideInfo class from table
	var $hideInfo = $('.hide-info');
	// hide table content
	$hideInfo.addClass('hide');

	/**
	 * On Click Toggle Method to show and hide information from table on Resume Section
	 */
	$buttonShowHide.on('click', function() {
		$hideInfo.toggleClass('hide');
		// add text to button to show more info on table
		if($hideInfo.hasClass('hide')) {
			$buttonShowHide.text('More Information...');		
		} else {
			// if full table is shown, add following text to button
			$buttonShowHide.text('<-- Less');
		}
	});


	/**
	 * Contact Area
	 */
	// github, linkedin, googleplus and twitter icons.
	var $github 	= $('#git-hub'),
		$linkedin 	= $('#linked-in'),
		$googleplus = $('#google-plus'),
		$twitter 	= $('#twitter');

	// show icons when hover
	$('#connect').mouseover(function() {
		$github.fadeIn(300);
		$linkedin.fadeIn(600);
		$googleplus.fadeIn(900);
		$twitter.fadeIn(1200);
	});
	// after 5 sec., hide icons assuming user will or will not click on it
	$('#connect').mouseleave(function() {
		$github.fadeOut(5000);
		$linkedin.fadeOut(5000);
		$googleplus.fadeOut(5000);
		$twitter.fadeOut(5000);
	});

	/**
	 * Enabling Tooltip and Options
	 */
	$(function () {
		$('[data-toggle="tooltip"]').tooltip({
			delay: {
				'show': 200,
				'hide': 1000
			}
		});
	});

	/**
	 * CountDown Comments
	 */
	$('#user-desc').keyup(function() {
		$('.comment-prompt').show();
		// set max character length
		var max = 300;

		// value length
		var len = $(this).val().length;

		if ( len >= max ) {
			// if its more than the specified then show message
			$('.comment-prompt').text(' You Have Reach the Limit');
		} else {
			// set 300 - user input
			var character = max - len;
			// show message
			$('.comment-prompt').text(character + ' Characters Left');
		}
	});

});