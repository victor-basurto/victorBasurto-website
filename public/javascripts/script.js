$(document).on('ready', function() {
	/**
	 * Insert Id's Dinamically 
	 */
	(function(window, jQuery) {
		// array of id's
		sectionIds = [
			'#sectionHome',
			'#sectionResume',
			'#sectionAbout',
			'#sectionContact'
		];

		// obtain anchor tags where the id's will be inserted
		var $menuAnchor = $('li a');
		
		// forEach method to insert each id on each anchor tag
		$.each(sectionIds, function(i, sectionId) {
			// $menuAnchor.attr("href", sectionId);
			$($menuAnchor[i]).attr("href", sectionId);
		});
	})(window, $);

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
	$('a[href*=#]:not([href=#])').click(function() {
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
});