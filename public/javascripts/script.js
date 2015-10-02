$(document).on('ready', function() {
	/**
	 * Insert Id's Dinamically 
	 */
	// (function(window, jQuery) {
	// 	// array of id's
	// 	sectionIds = [
	// 		'#sectionHome',
	// 		'#sectionResume',
	// 		'#sectionAbout',
	// 		'#sectionContact'
	// 	];

	// 	// obtain anchor tags where the id's will be inserted
	// 	var $menuAnchor = $('li a');
		
	// 	// forEach method to insert each id on each anchor tag
	// 	$.each(sectionIds, function(i, sectionId) {
	// 		// $menuAnchor.attr("href", sectionId);
	// 		$($menuAnchor[i]).attr("href", sectionId);
	// 	});
	// })(window, $);

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
		$github.fadeIn(1200);
		$linkedin.fadeIn(900);
		$googleplus.fadeIn(600);
		$twitter.fadeIn(300);
	});
	// after 5 sec., hide icons assuming user will or will not click on it
	$('#connect').mouseleave(function() {
		$github.fadeOut(5000);
		$linkedin.fadeOut(5000);
		$googleplus.fadeOut(5000);
		$twitter.fadeOut(5000);
	});

});