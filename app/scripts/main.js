// jshint devel:true
// console.log('\'Allo \'Allo!');


$(function() {
	//adds .active to the navigation menu item
	$('.navbar-toggle').on('click', function () {
		$(this).toggleClass('active');
	});


	// Smooth scrolling to internal anchor
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
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
