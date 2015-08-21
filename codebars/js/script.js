
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


//Form validation
(function( $ ){

$(function() {

  $('.call-popup').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
	var form = $(this),
        btn = form.find('.btn--form');

    // Добавляем каждому проверяемому полю, указание что поле пустое
	form.find('.rfield').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('.rfield').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
		$(this).removeClass('empty_field');
        } else {
          // Если поле пустое добавляем класс-указание
		$(this).addClass('empty_field');
        }
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){
      form.find('.empty_field').css({'border-color':'#d8512d'});
      // Через полсекунды удаляем подсветку
      // setTimeout(function(){
      //   form.find('.empty_field').removeAttr('style');
      // },500);
    }

    // Проверка в режиме реального времени
    setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
	  checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = form.find('.empty_field').size();
      // Вешаем условие-тригер на кнопку отправки формы
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },500);

    // Событие клика по кнопке отправить
    btn.click(function(){
      if($(this).hasClass('disabled')){
        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
		lightEmpty();
        return false
      } else {
        // Все хорошо, все заполнено, отправляем форму
        form.submit();
      }
    });
  });
});

})( jQuery );