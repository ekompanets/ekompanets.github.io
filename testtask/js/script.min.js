(function(){
  //   меню

  var menuElements=document.querySelectorAll(".main-nav__item");
  for (var i=0; i<menuElements.length; i++) {
    OpenSubMenu(menuElements[i])
  }

  function OpenSubMenu(iMenu) {
    iMenu.addEventListener("mouseover", function(event) {
        event.preventDefault();
        iMenu.classList.add("show");
    })

    iMenu.addEventListener("mouseout", function(event) {
      event.preventDefault();
      if (iMenu.classList.contains("show")) {
        iMenu.classList.remove("show");
      };
  })
  }


  //  --  выбор языка

  var langElement=document.querySelector(".lang__change");
    OpenLangList(langElement); 

  function OpenLangList(iLang) {
    iLang.addEventListener("mouseover", function(event) {
      event.preventDefault();
      iLang.classList.add("lang__show");
    })

    iLang.addEventListener("mouseout", function(event) {
      event.preventDefault();
      if (iLang.classList.contains("lang__show")) {
        iLang.classList.remove("lang__show");
      };
  })
  }

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