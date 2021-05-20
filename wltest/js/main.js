(function () {

  $(document).ready(function () {
    $('.steps__inner').jScrollPane();

    $(window).on('resize', function () {
      $('.steps__inner').jScrollPane();

    });

    if ($('.banner').length > 0) {
        var section = $('.banner__img').find('img').attr('src');
        if(section == true){
            $('.banner__img').css({'background-color':'#fff'});
    
        }
        else{
            $('.banner__img').css({'background-image':'url(' + section + ')'}).addClass('bg-img');
        }
    }



    var setTotal = function () {
      var sum = 0;
      $('.cart__item-total').each(function(){
        sum += Number($(this).text());
      })

      $('.summary__subtotal .sum').text(sum);

      sum += Number($('.summary__shipping .sum').text()) + Number($('.summary__tax .sum').text())

      $('.summary__total .sum').text(sum);
    }


    $('.cart__item-remove').on('click',function () {
        $(this).closest('.cart__line').remove();

        setTotal();
    });

    $('.cart__qty input').on('keyup',function () {
        $(this).closest('.cart__line').find('.cart__item-total').text($(this).val() * Number($(this).closest('.cart__line').find('.cart__item-price').text()));


        setTotal();
    });

  });  

})();