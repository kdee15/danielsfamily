// 0. JAVASCRIPT LAYER [ 0.00 PRELOAD SCRIPTS ] #######################################################################

// 0.1. PRELOADER -----------------------------------------

$('html').addClass('preloader');

// 0.1. END -----------------------------------------------

// 0.2 LOAD FUNCTIONS -------------------------------------

// 0.2. END -----------------------------------------------
// 0. JAVASCRIPT LAYER [ 0.01 GLOBAL DEFINE ] #########################################################################

;(function ($) {
  'use strict'
  var tmpl = function (id, data) {
    var f = tmpl.cache[id]
    return data ? f(data, tmpl) : function (data) {
      return f(data, tmpl)
    }
  }
  tmpl.cache = {}
  tmpl.encReg = /[<>&"'\x00]/g // eslint-disable-line no-control-regex
  tmpl.encMap = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;'
  }
  tmpl.encode = function (s) {
    return (s == null ? '' : '' + s).replace(
      tmpl.encReg,
      function (c) {
        return tmpl.encMap[c] || ''
      }
    )
  }
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return tmpl
    })
  } else if (typeof module === 'object' && module.exports) {
    module.exports = tmpl
  } else {
    $.tmpl = tmpl
  }
}(this))
// 0. JAVASCRIPT LAYER [ 0.02 DEVICE CHECK ] ##########################################################################
    
// 0.1. DEVICE CHECK --------------------------------------------------------------------------------------------------

function initDeviceCheck() {

  var deviceAgent = navigator.userAgent.toLowerCase();

  $('html').addClass('desktop');

  if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
    $('html').removeClass('desktop');
    $('html').addClass('ios');
    $('html').addClass('mobile');
  }

  if (deviceAgent.match(/android/)) {
    $('html').removeClass('desktop');
    $('html').addClass('android');
    $('html').addClass('mobile');
  }

  if (deviceAgent.match(/blackberry/)) {
    $('html').removeClass('desktop');
    $('html').addClass('blackberry');
    $('html').addClass('mobile');
  }

  if (deviceAgent.match(/(symbianos|^sonyericsson|^nokia|^samsung|^lg)/)) {
    $('html').removeClass('desktop');
    $('html').addClass('mobile');
  }

}

// 0.1. END -----------------------------------------------------------------------------------------------------------
  
// 0.0 END ############################################################################################################
// 0. JAVASCRIPT LAYER [ 0.03 EQUAL HEIGHTS ] #########################################################################
    
// 0.1. EQUAL HEIGHTS -------------------------------------------------------------------------------------------------

/*
    http://codepen.io/micahgodbolt/pen/FgqLc

    Thanks to CSS Tricks for pointing out this bit of jQuery
    http://css-tricks.com/equal-height-blocks-in-rows/
    It's been modified into a function called at page load and then each time the page is resized.
    One large modification was to remove the set height before each new calculation.
*/

var equalheight;
equalheight = function (container) {
  var currentTallest = 0,
    currentRowStart = 0,
    topPosition = 0,
    currentDiv = 0,
    rowDivs = [],
    $el;
  $(container).each(function () {

    $el = $(this);
    $($el).height('auto');
    topPosition = $el.position().top;

    if (currentRowStart != topPosition) {
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0; // empty the array
      currentRowStart = topPosition;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
};

// 0.1. END -----------------------------------------------------------------------------------------------------------

// 0.0 END ############################################################################################################

// 0.2 LOAD FUNCTIONS -------------------------------------

initDeviceCheck();

// 0.2. END -----------------------------------------------

// 0. JAVASCRIPT LAYER [ 0.00 PRELOAD SCRIPTS END ] ###################################################################
// 1. JAVASCRIPT LAYER [ 1.00 WINDOW READY START ] ####################################################################

$(window).on('load', function() {

  // PRELOADER --------------------------------------------

  $('html').removeClass('preloader');
  $('html').addClass('lab-app');

  // LOAD FUNCTIONS ---------------------------------------

  initToggleFunctions();
  initCarouselFunctions();
  initEqualheightsFunctions();
  initScrollIntoView();
  initStickyBlocks();

// 1. JAVASCRIPT LAYER [ 1.01 GLOBAL FUNCTIONS ] ######################################################################

// A.1. SCREEN SIZE CHECK ---------------------------------------------------------------------------------------------

var screen = $( window ).width();
console.log('screen-width: ' + screen);
    
// A.1. END -----------------------------------------------------------------------------------------------------------
    
// A.2. RESOURCE PATHS ------------------------------------------------------------------------------------------------
    
var icons = 'assets/includes/icons/';
    
// A.2. END -----------------------------------------------------------------------------------------------------------

// 1. JAVASCRIPT LAYER [ 1.01 END ] ###################################################################################
// 1. JAVASCRIPT LAYER [ 1.02 SHOW/HIDE FUNCTIONS ] ###################################################################
// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initToggleFunctions() {

// A.1. BURGER MENU ---------------------------------------------------------------------------------------------------

    $('.reveal').click(function(e) {

        var target = $(this).attr('href');

        if ($(target).hasClass('hidden') ) {

            $(target).removeClass('hidden');
            $('.reveal').addClass('close');

        } else {

            $(target).addClass('hidden');
            $('.reveal').removeClass('close');

        }
        e.preventDefault();

    });

// A.1. END -----------------------------------------------------------------------------------------------------------

// A.2. GENERAL SHOW --------------------------------------------------------------------------------------------------

    $('.showhide').click(function(e) {

        var target = $(this).attr('href');

        if ($(target).hasClass('hidden') ) {

            $(target).removeClass('hidden');
            $('.showhide').addClass('close');

        } else {

            $(target).addClass('hidden');
            $('.showhide').removeClass('close');

        }

        e.preventDefault();

    });

// A.2. END -----------------------------------------------------------------------------------------------------------

// A.3. END -----------------------------------------------------------------------------------------------------------

    // A.2.1. TOGGLE DIV ----------------------------

    var currentContent = '';
    $('.toggle-div').on('click', function(){
        currentContent = $(this).attr('name');
        if($('#'+currentContent).hasClass('on')){
            $('#'+currentContent).removeClass('on');
            $('body').removeClass('modal-open');
        }else{
            hideAllContent();
            showCurrentContent(currentContent);
        }
    });

    function hideAllContent(){
        $('.toggle-content').removeClass('on');
        $('body').removeClass('modal-open');
    };

    function showCurrentContent(currentContentDiv){
        $('#'+currentContentDiv).addClass('on');
        $('body').addClass('modal-open');
    };

    // A.2.1. END -----------------------------------------

// A.3. END -----------------------------------------------------------------------------------------------------------

// A.4. SCROLL TO LINK ------------------------------------------------------------------------------------------------

    $(".textLink").click(function(event){

        event.preventDefault();

        //calculate destination place
        var dest=0;
        if($(this.hash).offset().top > $(document).height()-$(window).height()){
            dest=$(document).height()-$(window).height();
        }else{
            dest=$(this.hash).offset().top;
        }

        //go to destination
        $('html,body').animate({scrollTop:dest}, 1000,'swing');

        //add class to burger
        $('#mobi-nav').addClass('hide-nav');

        //add active class
        $('.textLink').removeClass('active');
        $(this).addClass('active');

    });

// A.4. END -----------------------------------------------------------------------------------------------------------

// A.5. SHOW HIDE LOGO ------------------------------------------------------------------------------------------------

    var t = $('html').offset().top;

    $(document).scroll(function(){

        if (document.documentElement.clientWidth > 640) {

            // Hide the logo, and show as you scroll
            if($(this).scrollTop() > t)
            {
                $('.logo').css({"display":'block'});

            }else{
                $('.logo').css({"display":'none'});
            }


        } else {}

    });

// A.5. END -----------------------------------------------------------------------------------------------------------

}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. JAVASCRIPT LAYER [ 1.02 END ] ###################################################################################
// 1. JAVASCRIPT LAYER [ 1.02 SHOW/HIDE FUNCTIONS ] ###################################################################
// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initCarouselFunctions() {

// A.3. CAROUSEL SCRIPTS ----------------------------------------------------------------------------------------------

  // A.2.1. DESTROY CAROUSEL ------------------------------

  function owlInitialize() {
    if ($(window).width() < 768) {
      $('.classname').addClass("owl-carousel");
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 0,
        nav: true,
        dots: true,
        items: 1,
      });
    }else{
      $('.owl-carousel').owlCarousel('destroy');
      $('.classname').removeClass("owl-carousel");
    }
  }
  $(document).ready(function(e) {
    owlInitialize();
  });
  $(window).resize(function() {
    owlInitialize();
  });

  // A.2.1. END -----------------------------------------

// A.3. END -----------------------------------------------------------------------------------------------------------

}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. JAVASCRIPT LAYER [ 1.02 END ] ###################################################################################
// 1. JAVASCRIPT LAYER [ 1.02 SHOW/HIDE FUNCTIONS ] ###################################################################
// A. EQUAL HEIGHTS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initEqualheightsFunctions() {

  equalheight('.classname');

  if($(window).width() > 767) {

    equalheight('.classname');

  }

}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. JAVASCRIPT LAYER [ 1.02 END ] ###################################################################################
// 1. JAVASCRIPT LAYER [ 1.10 SCROLL FUNCTIONS ] ######################################################################

// A. SCROLL FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling

function initScrollIntoView() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {

    // A.1.1.1. FADE IN UP --------------------------------
    $('.a-siv-fiu').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('is-in-view');
        $(this).addClass('fadeInUp');
      }
    });
    // A.1.1.1. END ---------------------------------------

    // A.1.1.2. FADE IN -----------------------------------
    $('.a-siv-fi').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('is-in-view');
        $(this).addClass('fadeIn');
      }
    });
    // A.1.1.2. END ---------------------------------------

    // A.1.1.3. FADE IN FROM LEFT -------------------------
    $('.a-siv-fil').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('is-in-view');
        $(this).addClass('fadeInLeft');
      }
    });
    // A.1.1.3. END ---------------------------------------

    // A.1.1.4. FADE IN FROM RIGHT ------------------------
    $('.a-siv-fir').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('is-in-view');
        $(this).addClass('fadeInRight');
      }
    });
    // A.1.1.4. END ---------------------------------------

    // A.1.1.5. FADE IN FROM RIGHT ------------------------
    $('.a-siv-fis:nth-child(odd)').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('is-in-view');
        $(this).addClass('fadeInLeft');
      }
    });
    // A.1.1.5. END ---------------------------------------

    // A.1.1.5. FADE IN FROM RIGHT ------------------------
    $('.a-siv-fis:nth-child(even)').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('is-in-view');
        $(this).addClass('fadeInRight');
      }
    });
    // A.1.1.5. END ---------------------------------------


  });


// A.3. END -----------------------------------------------------------------------------------------------------------

// A.5. SCROLL TO TOP AND BOTTOM --------------------------------------------------------------------------------------

  var t = $('html').offset().top;

  $(document).scroll(function(){

    // Hide the logo, and show as you scroll
    if($(this).scrollTop() > t)
    {
      $('body').addClass('sticky');

    }else{
      $('body').removeClass('sticky');
      $('.animated').removeClass('is-in-view');
      $('.animated').removeClass('fadeInLeft');
      $('.animated').removeClass('fadeInRight');
      $('.animated').removeClass('fadeInUp');
      $('.animated').removeClass('fadeIn');
    }

  });

  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      $('.animated').removeClass('is-in-view');
      $('.animated').removeClass('fadeInLeft');
      $('.animated').removeClass('fadeInRight');
      $('.animated').removeClass('fadeInUp');
      $('.animated').removeClass('fadeIn');
    }
  };

// A.5. END -----------------------------------------------------------------------------------------------------------

}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. JAVASCRIPT LAYER [ 1.02 END ] ###################################################################################
// 1. JAVASCRIPT LAYER [ 1.02 SHOW/HIDE FUNCTIONS ] ###################################################################
// A. EQUAL HEIGHTS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initStickyBlocks() {

  $.fn.stickyBlocks = function() {
      //Variables
      var perspective = '500px',
      delta = 20,
      width = this.width(),
      height = this.height(),
      midWidth = width / 2,
      midHeight = height / 2;

      //Events
      this.on({
        mousemove: function(e) {
          var pos = $(this).offset(),
          cursPosX = e.pageX - pos.left,
          cursPosY = e.pageY - pos.top,
          cursCenterX = midWidth - cursPosX,
          cursCenterY = midHeight - cursPosY;

          $(this).css('transform','perspective(' + perspective + ') rotateX('+ (cursCenterY / delta) +'deg) rotateY('+ -(cursCenterX / delta) +'deg)');
          $(this).removeClass('is-out');
        },
        mouseleave: function() {
          $(this).addClass('is-out');
        }
      });
      
      //Return
      return this;
  };

  //Set plugin on cards
  $('.o-fam').stickyBlocks();

  var $layer_0 = $('.layer-0'),
      $layer_1 = $('.layer-1'),
      $layer_2 = $('.layer-2'),
      $layer_3 = $('.layer-3'),
      $layer_4 = $('.layer-4'),
      $container = $('body'),
      container_w = $container.width(),
      container_h = $container.height();

  $(window).on('mousemove.parallax', function(event) { 
    var pos_x = event.pageX,
        pos_y = event.pageY,
        left  = 0,
        top   = 0;

    left = container_w / 2 - pos_x;
    top  = container_h / 2 - pos_y;

    TweenMax.to(
      $layer_4,
      1,
      {
        css: {
          transform: 'translateX(' + left / 15 + 'px) translateY(' + top / 10 + 'px)'
        },
        ease:Expo.easeOut,
        overwrite: 'all'
      });


    TweenMax.to(
      $layer_3,
      1,
      {
        css: {
          transform: 'translateX(' + left / 5 + 'px) translateY(' + top / 15 + 'px)'
        },
        ease:Expo.easeOut,
        overwrite: 'all'
      });

    TweenMax.to(
      $layer_2,
      1,
      {
        css: {
          transform: 'translateX(' + left / 25 + 'px) translateY(' + top / 20 + 'px)'
        },
        ease:Expo.easeOut,
        overwrite: 'all'
      });
    
    TweenMax.to(
      $layer_1, 
      1, 
      { 
        css: {
          transform: 'translateX(' + left / 10 + 'px) translateY(' + top / 15 + 'px)'
        },
        ease:Expo.easeOut, 
        overwrite: 'all' 
      });
    
    TweenMax.to(
      $layer_0,
      1,
      {
        css: { 
          transform: 'translateX(' + left / 100 + 'px) translateY(' + top / 100 + 'px)'
        },
        ease: Expo.easeOut,
        overwrite: 'none'
      }
    )
  });
}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. JAVASCRIPT LAYER [ 1.02 END ] ###################################################################################

console.log( "ready!" );

});

// 1. JAVASCRIPT LAYER [ 1.00 WINDOW READY END ] ######################################################################
// 2. JAVASCRIPT LAYER [ 2.00 AJAXCOMPLETE ] ##########################################################################

$( document ).ajaxComplete(function() {
// 2. JAVASCRIPT LAYER [ 2.01 GLOBAL FUNCTIONS ] ######################################################################

// A.1. SCREEN SIZE CHECK ---------------------------------------------------------------------------------------------

// code goes here ...

// A.1. END -----------------------------------------------------------------------------------------------------------

// 2. JAVASCRIPT LAYER [ 2.01 END ] ###################################################################################

});

// 2. JAVASCRIPT LAYER [ 2.00 END ] ###################################################################################