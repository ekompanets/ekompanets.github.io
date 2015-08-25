$(document).ready(function() {

	// Slider settings
	var owl = $("#owl-demo");

	owl.owlCarousel({
		autoPlay: true,
		navigation : true,
		singleItem : true,
		transitionStyle : "fade"
	});
	// Slider settings end

	// Mask for phone field
	$("#phone").mask("(999) 999-9999");

	//Open popup
	$(".call-link").click(function(){
		$(".modal").fadeIn(500);
	});

	//Close popup by clicking on "cross" or "shadow"
	$(".call-popup-close, .shadow").click(function(){
		$(".modal").fadeOut(500);
	});
 	
	// Close popup by Esc
	$(this).keydown(function(eventObject){
        if (eventObject.which == 27)
            $('.modal').fadeOut(500);
    });

	// Validation
	$("button[type='submit']").click(function(){

		var validated = true;
		$(this).parents("form").find("input, textarea").not("[type='submit']").each(function(){
			if ($(this).val() == '' ) {
				$(this).css('border','1px solid red');
			} 
			else {
				$(this).css('border', '1px solid #969696');
			}
			validated = validated && ($(this).val() !== '' );
		});
		return validated;
	})
 
});