/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(u){var f,d,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in window.document||9<=window.document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],w=Array.prototype.slice;if(u.event.fixHooks)for(var i=e.length;i;)u.event.fixHooks[e[--i]]=u.event.mouseHooks;var c=u.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],n,!1);else this.onmousewheel=n;u.data(this,"mousewheel-line-height",c.getLineHeight(this)),u.data(this,"mousewheel-page-height",c.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],n,!1);else this.onmousewheel=null;u.removeData(this,"mousewheel-line-height"),u.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=u(e),i=t["offsetParent"in u.fn?"offsetParent":"parent"]();return i.length||(i=u("body")),parseInt(i.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return u(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function n(e){var t,i=e||window.event,n=w.call(arguments,1),o=0,l=0,s=0;if((e=u.event.fix(i)).type="mousewheel","detail"in i&&(s=-1*i.detail),"wheelDelta"in i&&(s=i.wheelDelta),"wheelDeltaY"in i&&(s=i.wheelDeltaY),"wheelDeltaX"in i&&(l=-1*i.wheelDeltaX),"axis"in i&&i.axis===i.HORIZONTAL_AXIS&&(l=-1*s,s=0),o=0===s?l:s,"deltaY"in i&&(o=s=-1*i.deltaY),"deltaX"in i&&(l=i.deltaX,0===s&&(o=-1*l)),0!==s||0!==l){if(1===i.deltaMode){var a=u.data(this,"mousewheel-line-height");o*=a,s*=a,l*=a}else if(2===i.deltaMode){var h=u.data(this,"mousewheel-page-height");o*=h,s*=h,l*=h}if(t=Math.max(Math.abs(s),Math.abs(l)),(!d||t<d)&&g(i,d=t)&&(d/=40),g(i,t)&&(o/=40,l/=40,s/=40),o=Math[1<=o?"floor":"ceil"](o/d),l=Math[1<=l?"floor":"ceil"](l/d),s=Math[1<=s?"floor":"ceil"](s/d),c.settings.normalizeOffset&&this.getBoundingClientRect){var r=this.getBoundingClientRect();e.offsetX=e.clientX-r.left,e.offsetY=e.clientY-r.top}return e.deltaX=l,e.deltaY=s,e.deltaFactor=d,e.deltaMode=0,n.unshift(e,o,l,s),f&&window.clearTimeout(f),f=window.setTimeout(m,200),(u.event.dispatch||u.event.handle).apply(this,n)}}function m(){d=null}function g(e,t){return c.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}u.fn.extend({mousewheel:function(e){return e?this.on("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.off("mousewheel",e)}})});


/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if("function"==typeof define&&define.amd)define(["module","exports"],b);else if("undefined"!=typeof exports)b(module,exports);else{var c={exports:{}};b(c,c.exports),a.WOW=c.exports}}(this,function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)&&a["on"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]}function k(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,"__esModule",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:"get",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:"set",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return n(a,[{key:"observe",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\-([a-z]){1})/g;return{getPropertyValue:function(c){"float"===c&&(c="styleFloat"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:"init",value:function(){this.element=window.document.documentElement,d(document.readyState,["interactive","complete"])?this.start():i(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,"scroll",this.scrollHandler),i(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,"scroll",this.scrollHandler),j(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){p.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(a){if("undefined"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll("."+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:"show",value:function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,"animationend",this.resetAnimation),i(a,"oanimationend",this.resetAnimation),i(a,"webkitAnimationEnd",this.resetAnimation),i(a,"MSAnimationEnd",this.resetAnimation)),a}},{key:"applyStyle",value:function(a,b){var c=this,d=a.getAttribute("data-wow-duration"),e=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:"resetStyle",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility="visible"}}},{key:"resetAnimation",value:function(a){if(a.type.toLowerCase().indexOf("animationend")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a}},{key:"vendorSet",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[""+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:"vendorCSS",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue("-"+f+"-"+b)}return d}},{key:"animationName",value:function(a){var b=void 0;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=q(a).getPropertyValue("animation-name")}return"none"===b?"":b}},{key:"cacheAnimationName",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:"cachedAnimationName",value:function(a){return this.animationNameCache.get(a)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:"isVisible",value:function(a){var b=a.getAttribute("data-wow-offset")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:"disabled",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b["default"]=r,a.exports=b["default"]});



'use strict';


	


(function () {

	function isElementInCenterViewport(el) {

	    //special bonus for those using jQuery
	    if (typeof jQuery === "function" && el instanceof jQuery) {
	        el = el[0];
	    }

	    var rect = el.getBoundingClientRect();
	    var elH = rect.bottom - rect.top;

	    return (
	        (rect.top + elH/2) >= ($(window).height()/4) &&
	        (rect.top + elH/2) <= ($(window).height()*3/4) /*or $(window).height() */
	    );
	};

	function isElementInViewport (el3) {
	  var docViewTop = $(window).scrollTop(),
	      docViewBottom = docViewTop + $(window).height(),
	      elemTop = el3.offset().top,
	      elemBottom = elemTop + el3.outerHeight(true);
	      
	  return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) );
	}

	function isElementInTopViewport (el3) {
	  var docViewTop = $(window).scrollTop(),
	  		docViewHalf = docViewTop + $(window).height()/2,
	      docViewBottom = docViewTop + $(window).height(),
	      elemTop = el3.offset().top,
	      elemBottom = elemTop + el3.outerHeight(true);
	      
	  return ((elemBottom >= docViewTop) && (elemBottom <= docViewHalf) );
	}

	function isInFirstViewport (title) {
	  var docViewTop = $(window).scrollTop(),
	  		docViewHalf = docViewTop + $(window).height()/2,
	      docViewBottom = docViewTop + $(window).height(),
	      elemTop = title.offset().top,
	      elemBottom = elemTop + title.outerHeight(true);
	      
	  return ((elemBottom >= docViewTop));
	}

	function splitLines($block) {

	  var text = $block.html(function(i, h){
	    return h.replace(/(\S+\s*)/g, '<span>$1</span>');
	  });

	  var  pt = 0,
	  obj = {},
	  curPt = 0,
	  k = 0,
	  output = '';

	  $('span', $block).each(function(i, el){
	    curPt = $(el).offset().top;
	    var text = $(this).html();

	    if(curPt > pt) {
	      pt = curPt;
	      obj[++k] = [];
	    };

	    try {
	      obj[k].push(text);
	    } catch(error) {}

	  });

	  var layout = "";

	  $.each(obj, function(i, line){
	    layout += '<span class="line">' +  line.join('')  + '</span>';
	  });

	  $block.html(layout);

	};


	function prepareElements($splitLettersBig) {

		$splitLettersBig.each(function(){

	    var $letters = $(this);

	    splitLines($letters);

	    var $lines = $letters.find('.line');

	    var isSpace = 0;

	    $lines.each(function() {
	      var $l = $(this);
	      var arrayLetters = $l.text().split('');
	      var string = '';
	      var delay = arrayLetters.length * .1;
	      var step = -.1;
	      var tr = 1;
	      var trStep = .03;

	      for (var i = 0; i < arrayLetters.length; i++) {

	        var transition = tr+trStep;
	        
	        delay = delay+step;
	        tr = tr+trStep;

	        var element = '<span class="letter" data-step="'+transition+'">'+ arrayLetters[i] +'</span>';

	        var next = i+1;

	        if (next < arrayLetters.length && arrayLetters[next] == ' ') {
	          element = '<span class="letter" data-step="'+transition+'">'+ arrayLetters[i] +'&nbsp;</span>';

	        }

	        if (arrayLetters[i] == ' ') {
	          element = '';
	        }

	        string += element;

	      };

	      $l.html(string);

	    });

	  });

	};

	function showElement($els){


	  $els.each(function() {
	    var $el = $(this);
	    if (isElementInViewport($el)) {
	      var delay = $el.data('split-letters');

	      setTimeout(function(){
	        $el.addClass('show');
	      }, delay);

	    }
	  });
	};

  var getOrientation = function () {
    if ($(window).width() > $(window).height()) {
      $('body').removeClass('screen-portrait').addClass('screen-land');
    }
    else {
      $('body').removeClass('screen-land').addClass('screen-portrait');
    }
  }

  $(document).ready(function () {

  	$('input.phone').mask('+38 (099) 999 - 99 - 99');

  // 	var video = document.querySelector('video');

  // 	video.addEventListener('click',function(){
		//   video.play();
		// },false);
		// $(video).click();
		// video.play();

  	if ($(window).width() < 768) {
  		$('.menu').addClass('scrolled');

  		$('.category').each(function(){

  			var section = $(this).find('img').attr('src');
	      
	      if(section == true){
	          $(this).css({'background-color':'#fff'});
	  
	      }
	      else{
	          $(this).css({'background-image':'url(' + section + ')'});
	          $(this).find('img').css('opacity:0;')
	    
	      }

  		});

  		$('.gallery-pic .inner:not(.empty)').each(function(){
  			$(this).closest('.gallery-pic').addClass('pic-'+($('.gallery-pic .inner:not(.empty)').index($(this)) % 3));

  			var section = $(this).find('img').attr('src');
	      
	      if(section == true){
	          $(this).find('.img').css({'background-color':'#fff'});
	  
	      }
	      else{
	          $(this).find('.img').css({'background-image':'url(' + section + ')'});
	    
	      }

  		});
  	}

  	SmoothScroll({ keyboardSupport: false })

    getOrientation(); 
    new WOW().init();

    if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
	    $('body').addClass('browser-safari');
	  }


	  if ($(window).width() <= 1200) {
	    $('[data-wow-delay]').each(function() {
	      // $(this).attr('data-wow-delay', '0s');
	    });

	    $('[data-split-letters]').each(function() {
	      $(this).attr('data-split-letters', '0');
	    });

	    $('[data-button]').each(function() {
	      $(this).attr('data-button', '0');
	    });
	  }

	  // animations.init();
	  // animations.start();

	  var $splitLettersBig = $("[data-split-letters-big]");

	  prepareElements($splitLettersBig)

	  showElement($splitLettersBig);


  	var offset = 0;

    $(".scroll-link").on("click", "a", function (event) {

      event.preventDefault();
      var id  = $(this).attr('href'),      
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 600);
      $('.menu').removeClass('show');
    });

    
    $('.nav-button').on('click',function () {
       $('.menu').toggleClass('show');

    });

    $('.menu-close').on('click',function () {
        $('.menu').removeClass('show')
    });


    $('.service-title').on('click', function(){
    	// $(this).closest('.service-tab').toggleClass('open').siblings().removeClass('open')
    	$(this).closest('.service-tab').toggleClass('open').find('.text').slideToggle(300).parent().siblings().removeClass('open').find('.text').slideUp(300)

    })

    $('.input-wrap input, .input-wrap textarea').on('focus', function() {
      $(this).parent().addClass('focus')
    })

    $('.input-wrap input, .input-wrap textarea').on('blur', function() {
      $(this).parent().removeClass('focus')
    })

    $(window).on('resize', function () {
      getOrientation();

    })

    if (($(window).width() > 767) && ($('.video-inner').length > 0)) {
    	$('.video-wrapper').css('height', Math.floor($('.video-inner').outerHeight()));
    	$('.video-inner').css('height', Math.floor($('.video-inner').outerHeight()));
    
    

	    constH = $('.video-inner').outerHeight();
	    difY = $('.screen-second').outerHeight();
	    difH =  $('.video-inner').outerHeight() - $(window).height() * 0.75;
	    topH = $('.video-inner').offset().top;
	    s1H = $('.screen-first').outerHeight() - topH;
	    partY = (difY +difH) / s1H;
	    s1H = $('.screen-first').outerHeight() - topH;
	    scaleY = difH / s1H;

	    difX = $('.video-wrapper').outerWidth() - $('.video-wrapper').outerHeight();
	    s1H = $('.screen-first').outerHeight();
	    partX =  difX / s1H;

    };

  });

 
  
var constH = 0,
		topH = 0,
		difY = 0,
		difH = 0,
		s1H = 0,
		partY = 0,
		scaleY = 0,

		difX = 0,
		s1H = 0,
		partX = 0;

	

	function throttle(func, delay=500) {
	  let timeout = null
	  return function(...args) {
	    if (!timeout) {
	      timeout = setTimeout(() => {
	        func.call(this, ...args)
	        timeout = null
	      }, delay)
	    }
	  }
	}


  $(window).on('scroll', function(){
  	if ($(window).width() > 767) {
	  	if ($(window).scrollTop() > $('header').height()) {
	  		$('.menu').addClass('scrolled');
	  	} else {
	  		$('.menu').removeClass('scrolled');
	  	};
	  };

		 if ($(window).width() > 1023) {
  			var st = $(window).scrollTop(),  	
  			elIn = $('.video-inner'),
  			
  			leftX = partX * st * 3 / 4,
  			leftXr = partX * st / 4;



	  	if (st < s1H) {
	  		elIn.css('right', leftXr + 'px');
	  		elIn.css('left', leftX  + 'px');


	  		if (st >= (topH)) {

					var topY = partY * (st - topH),
							heightY = constH - scaleY * (st - topH);

		  		elIn.css('top', topY + 'px');

		  		elIn.css('height', heightY  + 'px');

				}

				if (st == 0) {
					elIn.css('right', '0px');
	  			elIn.css('left', '0px');
	  			elIn.css('top', '0px')
				}

	  	}
	  }


		$('.banner-title__line').each(function() {
  		if (isInFirstViewport($(this))) {
  			$(this).addClass('inview-first')
  		} else {
  			$(this).removeClass('inview-first')

  		}
		});


		$('.inview-first').each(function(){
			var el = $(this),
					st = $(window).scrollTop(),
					stb = $(window).scrollTop() + $(window).height(),
					lengthL = el.find('.letter').length;
					// deg = (stb - el.offset().top - el.height() ); // / $(window).height();
					var deg = st;

					if (el.hasClass('slideInLeft')) {
						var qLeft = 1,
							  qRight = 0;
					} else {
						var qLeft = 0,
							  qRight = 1;
					}


						for (var i = 0; i < lengthL; i++) {
							var diffX = (i - qLeft * lengthL + qRight ) * deg  ;
							el.find('.letter').eq(i).css('transform','translate3d('+diffX+'px, 0px, 0px)')
						}

		});


		if ($(window).width() < 768) {

			$('.category, .gallery-pic').each(function() {
				if (isElementInViewport($(this))) {
					$(this).addClass('cat-inview');

		  		if (isElementInCenterViewport($(this))) {
		  			$(this).addClass('cat-incenter')
		  		} else {
		  			$(this).removeClass('cat-incenter')
		  		}
	  		} else {
	  			$(this).removeClass('cat-inview')
	  		}
			});
		}


		$('.persons-title').each(function() {
  		if (isElementInTopViewport($(this))) {
  			$(this).addClass('inview-top')
  		} else {
  			$(this).removeClass('inview-top')

  		}
		});

		$('.inview-top').each(function(){
			var el = $(this),
					st = $(window).scrollTop(),
					stb = $(window).scrollTop() + $(window).height()/2,
					lengthL = el.find('.letter').length,
					deg = (stb - el.offset().top - el.height() ); // / $(window).height();

					if (el.hasClass('slideInLeft')) {
						var qLeft = 1,
							  qRight = 0;
					} else {
						var qLeft = 0,
							  qRight = 1;
					}

					for (var i = 0; i < lengthL; i++) {
						var diffX = (i - qLeft * lengthL + qRight ) * deg  ;
						el.find('.letter').eq(i).css('transform','translate3d('+diffX+'px, 0px, 0px)')
					}

		});

		$('.person-img').each(function() {
  		if (isElementInViewport($(this))) {
  			$(this).addClass('inview-img')
  		} else {
  			$(this).removeClass('inview-img')

  		}
		});

		$('.inview-img').each(function(){
			var el = $(this),
					elImg = el.find('img'),
					// difW = (elImg.width() - el.width()) / 2,
					difW = (elImg.width() - el.width()) / 6,

					partH = difW * 2 / ($(window).height() + el.height()),
					st = $(window).scrollTop(),
					stb = $(window).scrollTop() + $(window).height() / 2,
					deg = (stb - el.offset().top - el.height() / 2 ); // / $(window).height();

					var diffX = partH * deg  ;
					elImg.css('left', diffX)

		});




		$('.screen-second').each(function() {
  		if (isElementInViewport($(this))) {
  			$(this).addClass('inview-screen')
  		} else {
  			$(this).removeClass('inview-screen')

  		}
		});
  
  
  	
  });

  // mousemove
  $(window).mousemove(function(event) {

  	var left = -(event. clientX * 0.03),
        top = -(event.clientY * 0.03);

    $(".mousemove").css({
      "left": -(event. clientX * 0.03),
      "top": -(event.clientY * 0.03)
    });

  });

  

  $('.button-nav').click(function(){
    $(this).parents('.header').toggleClass('active').find('.menu').slideToggle(300); 
    return false;
  });

})();