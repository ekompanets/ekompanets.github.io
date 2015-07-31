/*---------------- write pop-up ---------------------------*/        
        
        
  var link = document.querySelector('.btn-mail');
  var popup = document.querySelector('.login-popup');
  var close = popup.querySelector('.login-popup-close');
  var form = popup.querySelector('form');
  var login = form.querySelector('.login-field');
  var password = form.querySelector('.password-field');
//  var storage = localStorage.getItem('login');

  link.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('login-popup-show');
/*    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }*/
      login.focus();
  }, false);

  close.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.remove('login-popup-show');
  }, false);

  form.addEventListener('submit', function(event) {
    if (!login.value || !password.value) {
      event.preventDefault();
      popup.classList.add('login-popup-error');
    } else {
      localStorage.setItem('login', login.value);
    }
  }, false);

  window.addEventListener('keydown', function(event) {
    if (event.keyCode == 27 && popup.classList.contains('login-popup-show')) {
      popup.classList.remove('login-popup-show');
    }
  }, false);

var linkRadio = document.querySelectorAll('.grid-check a');
        var linkCheck = document.querySelectorAll('.feature-list a');
        var btnSort = document.querySelector('.btn-sort');
        var itemList = document.querySelectorAll('.sort-list li');
        
        
        btnSort.addEventListener('click',function(event)
                                 { event.preventDefault(); 
                                   if (btnSort.classList.contains('sort-up'))
                                   {   btnSort.classList.remove('sort-up');
                                       btnSort.classList.add('sort-down'); }
                                  else                                
                                   {   btnSort.classList.remove('sort-down');
                                       btnSort.classList.add('sort-up'); }
                                        
                                 },false);
        
        for (var i=0; i<linkRadio.length; i++) 
        {
            linkRadio[i].addEventListener('click', function(event) {
            event.preventDefault();
            
            if (!this.classList.contains('active')) {
                this.classList.add('active');
                var link = document.querySelectorAll('.grid-check a');
                
                for (var j=0; j<link.length; j++) 
                {   console.log(link[j]);
                    if ((link[j]!=this) && (link[j].classList.contains('active')))
                    link[j].classList.remove('active');
                }
            }
                 }, false);
        }
        
    
        
        for (var i=0; i<linkCheck.length; i++)
        {   linkCheck[i].addEventListener('click', function(event) {
            event.preventDefault();
            if (this.classList.contains('active')) 
            {this.classList.remove('active');}
                else {
                    this.classList.add('active');
                }
                 }, false);
        }
        
        for (var i=0; i<itemList.length; i++)
        {   itemList[i].addEventListener('click', function(event) {
            event.preventDefault();
            console.log(this);
            var itemListActive = document.querySelector('.sort-list li.active');
            if (itemListActive)
            itemListActive.classList.remove('active');
            console.log(this);
            if (!this.classList.contains('active')) 
            {this.classList.add('active');}
               
                 }, false);
        }
        