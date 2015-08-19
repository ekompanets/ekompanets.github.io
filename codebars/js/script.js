(function(){
  var link = document.querySelector('.call-link');
  var popup = document.querySelector('.call-popup');
  var close = popup.querySelector('.call-popup-close');
  var fade = document.querySelector(".shadow");

  link.addEventListener('click', function(event) {
    event.preventDefault();
    fade.classList.add('call-shadow-show');
  }, false);

  close.addEventListener('click', function(event) {
    event.preventDefault();
    fade.classList.remove('call-shadow-show');
  }, false);



})();