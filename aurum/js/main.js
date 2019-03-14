(function () {

  $('.button-nav').click(function(){
    $(this).parents('.header').toggleClass('active').find('.menu').slideToggle(300); 
    return false;
  });

  
if ($(window).width() >767) {
  $('#navMainLinks').hover(function() {
  }, 
  function() {
    $('#defaultLink').addClass('open');
    $('#defaultSubLink').addClass('open');

  });
}

})();

$(document).ready(function(){

// функции для окна Спросить эксперта (главная) / Консультация (категория)

  $('#expertQuest').on('click', function(){
    $(this).closest('.dropdown').find('.second-step').hide().siblings('.first-step').show();
  })

  $('#questSubmit').on('click', function(){
    $(this).closest('.first-step').hide().siblings('.second-step').show();
  })

// EOF функции для окна Спросить эксперта (главная) / Консультация (категория)

// 
  $('#btnGetSubs').on('click', function() {
    $(this).hide().closest('.get-subscribe').find('.first-step').show();
  });
  $('.get-subscribe .first-step .btn-custom').on('click', function() {
    $(this).closest('.first-step').hide().closest('.get-subscribe').find('.second-step').show();
  })
// EOF


  

  if ($(window).width() >767) {
    $('.dropdown.hovered').hover(function() {
      $(this).addClass('open')
    }, 
    function() {
      $(this).removeClass('open')

    });

    // Переход по ссылке в меню
    $('.nav .dropdown.hovered a[data-toggle="dropdown"]').on('click', function () {
      var href = $(this).attr('href')
      document.location.href = href;
    })

    // 
    $(function(){
      $('.custom-scroll').jScrollPane();
    });

  } else {

    $('.more-text').on('click', function() {
      $(this).parent().addClass('full-text');
    })

    $('#burger-button').on('click', function(e) {
      $(this).closest('.dropdown').toggleClass('open');
    })

    $('body').on('click', function (e) {
      if (!$('li.dropdown.mega-dropdown').is(e.target) 
          && $('li.dropdown.mega-dropdown').has(e.target).length === 0 
          && $('.open').has(e.target).length === 0
      ) {
          $('li.dropdown.mega-dropdown').removeClass('open');
      }
    });


    

    $('.navbar-toggle.collapsed').on('click', function () {
      $(this).closest('.navbar').find('.subcat-open').each(function(){
        $(this).removeClass('subcat-open')
      });
      setTimeout(function() {$('#defaultLink').addClass('open')}, 200)
    });


    $('.header .nav-level.first > .nav-level__items > li > .dropdown-menu').on('click', function (e) {
      e.stopPropagation();
    });

    $('.header .nav-level.first > .nav-level__items > li > .dropdown-menu .nav-level__items > .dropdown > a').on('click', function(e) {
      e.preventDefault;
      e.stopImmediatePropagation;
      if ($(this).parent().hasClass('open')) {
        $(this).parent().removeClass('open');
        $(this).closest('.first').removeClass('subcat-open')
      } else {
        $(this).parent().parent().find('.open').removeClass('open')
        $(this).parent().toggleClass('open');
        $(this).closest('.first').addClass('subcat-open')
        // $(this).closest('.second').parent().addClass('slide-left');
        
      }
      return false;
    })

    

  }

  $('.search__toggle').on('click', function(){
    $(this).closest('.search').addClass('opened');
  })

  $('.search__close').on('click', function(){
    $(this).closest('.search').removeClass('opened');
  })


  $('#burger-button').on('click', function () {
    // $(this).toggleClass('active').closest('.header__toggle').toggleClass('active');
    // $('#burger-menu').slideToggle();
    // if ($(window).width() < 992) {
    //     $('.header__nav').slideToggle();
    // }
  });

  window.addEventListener("orientationchange", function() {
    $('#burger-button').removeClass('active');
    $('#burger-menu').hide();
    $('.header__nav').hide();
  }, false);



  $(window).bind('scroll', function() {
   if ($(window).scrollTop() > 100) {
     // $('.header').addClass('fixed');
          
   } else {
     // $('.header').removeClass('fixed');
      }
  });

  $('.phone-masked').mask('+38999-999-99-99');


  $('.goto-reg').on('click', function(){
    $(this).closest('.dropdown-menu').find('.dropdown-menu__content').addClass('step-hidden').closest('.dropdown-menu').find('.step-reg').removeClass('step-hidden');
  });

  $('.goto-auth').on('click', function(){
    $(this).closest('.dropdown-menu').find('.dropdown-menu__content').addClass('step-hidden').closest('.dropdown-menu').find('.step-auth').removeClass('step-hidden');
  });

  $('.goto-psw').on('click', function(){
    $(this).closest('.dropdown-menu').find('.dropdown-menu__content').addClass('step-hidden').closest('.dropdown-menu').find('.step-psw').removeClass('step-hidden');
  });

  $('#worktimeItem').on('click', function(){
    $(this).closest('.dropdown').find('.second-step').addClass('step-hidden').siblings('.first-step').removeClass('step-hidden');
  })

  $('#phoneSubmit').on('click', function(){
    $(this).closest('.dropdown-menu').find('.first-step').addClass('step-hidden').closest('.dropdown-menu').find('.second-step').removeClass('step-hidden');
  });


// Кнопка вверх
  $(document).scroll(function(){
    if ($(this).scrollTop() >500) {
      $('.btn-up').show()
    }

    else {
      $('.btn-up').hide()
    }
  })

  $('.btn-up').on('click',function(){
    $('html, body').animate({scrollTop:0});
  });

})