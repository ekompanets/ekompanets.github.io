(function () {

  var getOrientation = function () {
    if ($(window).width() > $(window).height()) {
      $('body').removeClass('screen-portrait').addClass('screen-land');
    }
    else {
      $('body').removeClass('screen-land').addClass('screen-portrait');
    }
  }

  $(document).ready(function () {
    $('.main-wrapper').onepage_scroll({
      beforeMove: function(index) {
        $('.menu li.active').removeClass('active');
        if (index > 1) {$('.menu li').eq(index-2).addClass('active');}
      }
    });
    getOrientation();    

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.onepage-pagination li').each(function(){
      $(this).find('a').html($('.onepage-custom li').eq($(this).index()).html());
    });

    $('.nav-button').on('click',function () {
       $('.menu').toggleClass('show')
    });

    $('.menu-close').on('click',function () {
        $('.menu').removeClass('show')
    });

    $('.menu li').on('click', function() {
       $(".main").moveTo($(this).index()+2);
       $('.menu').removeClass('show');
       $('.menu li.active').removeClass('active');
       $(this).addClass('active');
    })

    $(window).on('resize', function () {
      getOrientation();
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