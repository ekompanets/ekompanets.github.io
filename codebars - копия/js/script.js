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
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
  }, false);

  close.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.remove('call-popup-show');
  }, false);

  form.addEventListener('submit', function(event) {
    if (!login.value || !password.value) {
      event.preventDefault();
      popup.classList.add('call-popup-error');
    } else {
      localStorage.setItem('call', login.value);
    }
  }, false);

  window.addEventListener('keydown', function(event) {
    if (event.keyCode == 27 && popup.classList.contains('login-popup-show')) {
      popup.classList.remove('login-popup-show');
    }
  }, false);



  //  мобильное меню

  var toggle=document.querySelector(".toggle");
  var navClose=document.querySelector(".toggle-close");
  var mainNav=document.querySelector(".main-nav");

  toggle.addEventListener("click", function(event) {
      event.preventDefault();
      mainNav.classList.add("main-nav__show");
      navClose.classList.add("toggle-close--show");
      toggle.classList.add("hidden");
  })

  navClose.addEventListener("click", function(event) {
    event.preventDefault();
     if (mainNav.classList.contains("main-nav__show")) {
      mainNav.classList.remove("main-nav__show");
     }
     if (toggle.classList.contains("hidden")) {
      toggle.classList.remove("hidden");
     }
     if (navClose.classList.contains("toggle-close--show")) {
      navClose.classList.remove("toggle-close--show");
     }
  })

  //  -- мобильное меню
})();