(function () {

  var getOrientation = function () {
    if ($(window).width() > $(window).height()) {
      $('body').removeClass('screen-portrait').addClass('screen-land');
    }
    else {
      $('body').removeClass('screen-land').addClass('screen-portrait');
    }
  }

  var setMainBgHeight = function () {
    var hBg = $(window).height() + 170;
    $('.top-bg').css('height', hBg);
    $('.main-grid').css('height', hBg);
  }

  $(document).ready(function () {
    // $('.main-wrapper').onepage_scroll({
    //   beforeMove: function(index) {
    //     $('.menu li.active').removeClass('active');
    //     if (index > 1) {$('.menu li').eq(index-2).addClass('active');}
    //   }
    // });
    getOrientation(); 
    setMainBgHeight();  

    $('.new-carousel').slick({
      dots:true

    });

    $(".scroll-link").on("click", "a", function (event) {

      event.preventDefault();
      var id  = $(this).attr('href'),      
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 600);
    });

    $(window).on("scroll", function (event) {

      
    });

    // $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
    //   delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
    //   if (delta < 0) {
    //     var top = $('#themeBlock').offset().top;
    //     if ($('body').scrollTop() < top) {
    //       $('body,html').animate({scrollTop: top}, 600);
    //     }
    //   }
    // });

    // var scrollPos = 0;
    // $(window).scroll(function(event){
    //    var st = $(this).scrollTop();
    //    var top = $('#themeBlock').offset().top;
    //    if ((st > scrollPos)){
    //      console.log(top)
    //      console.log(st)

    //      console.log('down')
    //      if ($(event.target).closest('.screen--main').length || $(event.target).closest('header').length  ) {
    //         $('body,html').animate({scrollTop: top}, 600);
    //        }

    //    } 
    //    scrollPos = st + 10;
    // });

    $(window).bind('mousewheel swipe', function(event) {
      var delta = event.originalEvent.wheelDelta
      if (delta < 0) {
        // down
        var top = $('#themeBlock').offset().top;
        console.log(top)
           console.log(delta)

           console.log('down')
           console.log(event.target)
           console.log($(event.target).closest('.screen--main').length)
           if ($(event.target).closest('.screen--main').length || $(event.target).closest('header').length  ) {
            $('body,html').animate({scrollTop: top}, 600);
           }
      }
      else {
           console.log(delta)

      }
  });


    $('ul.tabs__caption li').on('click', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    
    $('.nav-button').on('click',function () {
       $('.menu').toggleClass('show');

    });

    $('.menu-close').on('click',function () {
        $('.menu').removeClass('show')
    });

    $(window).on('resize', function () {
      getOrientation();
      setMainBgHeight();   

    })
  });

  

  $('.button-nav').click(function(){
    $(this).parents('.header').toggleClass('active').find('.menu').slideToggle(300); 
    return false;
  });

  $('.payform').click(function(){
    $(this).parents('.payform-select').toggleClass('active').find('.payform-menu').slideToggle(300); 
    return false;
  });

  $('.payform-item').click(function(){
    if (!($(this).find('.submenu').length)) {
      $(this).parents('.payform-select').find('.payform').html($(this).html()); 
      $(this).parents('.submenu').slideToggle(0);
      $(this).parents('.payform-select').toggleClass('active').find('.payform-menu').slideToggle(300); 
    }
    else {
      $(this).find('.submenu').slideToggle(300);
    }
    return false;
  });
})();