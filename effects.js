/* menu accordion animation*/

$(document).ready(function($) {
	$('#accordion').find('.accordion-toggle').click(
		function(){

		//Expand or collapse this panel
		$(this).next().slideToggle('medium');

		//Hide the other panels
		$(".accordion-content").not($(this).next()).slideUp('fast');
	});
});

$(document).ready(function($) {
	$('#accordion').find('.accordion-inner-toggle').click(
		function(){

		//Expand or collapse this panel
		$(this).next().slideToggle('fast');

		//Hide the other panels
		$(".accordion-inner-content").not($(this).next()).slideUp('fast');
	});
});

