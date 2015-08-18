(function(){
  var link = document.querySelector('.call-link');
  var popup = document.querySelector('.call-popup');
  var close = popup.querySelector('.call-popup-close');
  var form = popup.querySelector('form');
  var login = form.querySelector('.login-field');
  var password = form.querySelector('.password-field');
  var storage = localStorage.getItem('login');

  link.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('call-popup-show');
    if (storage) {
  }, false);

  close.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.remove('call-popup-show');
  }, false);



})();