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