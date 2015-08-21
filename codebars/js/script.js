
// Popup
(function(){
	var link = document.querySelector('.call-link');
	var popup = document.querySelector('.call-popup');
	var close = popup.querySelector('.call-popup-close');
	var fade = document.querySelector(".shadow");
	var name = document.querySelector("#name");
	var phone = document.querySelector("#phone");
	var msgText = document.querySelector("#msg");

	link.addEventListener('click', function(event) {
		event.preventDefault();
		name.value = '';
		fade.classList.add('shadow-show');
	}, false);

	close.addEventListener('click', function(event) {
		event.preventDefault();
		fade.classList.remove('shadow-show');
	}, false);

	// fade.addEventListener('click', function(event) {
	// 	event.preventDefault();
	// 	fade.classList.remove('call-shadow-show');
	// }, false);

})();
// Popup end


// Slider settings
$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
  	autoPlay: true,
    navigation : true,
    singleItem : true,
    transitionStyle : "fade"
  });
 
});
// Slider settings end


// Phone mask
jQuery(function($){
   $("#phone").mask("(999) 999-9999");
});
// Phone mask end