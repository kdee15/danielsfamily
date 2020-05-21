// 1. JAVASCRIPT LAYER [ 1.02 SHOW/HIDE FUNCTIONS ] ###################################################################
// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initCarouselFunctions() {

// A.2. CAROUSEL SCRIPTS ----------------------------------------------------------------------------------------------

  // A.2.1. TESTIMONIAL CAROUSEL ------------------------

  $('.family-00').owlCarousel({
    autoplay: true,
    loop:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed:2000,
    autoplaySpeed: 2000,
    margin:0,
    nav:false,
    items: 1
  })

  $('.family-ma').owlCarousel({
    autoplay: true,
    loop:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed:150,
    // autoplaySpeed: 200,
    margin:0,
    nav:false,
    items: 1
  })

  $('.family-kd').owlCarousel({
    autoplay: true,
    loop:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed:250,
    // autoplaySpeed: 400,
    margin:0,
    nav:false,
    items: 1
  })

  $('.family-cd').owlCarousel({
    autoplay: true,
    loop:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed:150,
    autoplaySpeed: 200,
    margin:0,
    nav:false,
    items: 1
  })

  $('.family-rd').owlCarousel({
    autoplay: true,
    loop:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed:150,
    autoplaySpeed: 200,
    margin:0,
    nav:false,
    items: 1
  })

  // A.2.1. END -----------------------------------------

// A.2. END -----------------------------------------------------------------------------------------------------------

// A.3. CAROUSEL SCRIPTS ----------------------------------------------------------------------------------------------

  // A.3.1. DESTROY CAROUSEL ------------------------------

  // function owlInitialize() {
  //   if ($(window).width() < 768) {
  //     $('.classname').addClass("owl-carousel");
  //     $('.owl-carousel').owlCarousel({
  //       loop:true,
  //       margin: 0,
  //       nav: true,
  //       dots: true,
  //       items: 1,
  //     });
  //   }else{
  //     $('.owl-carousel').owlCarousel('destroy');
  //     $('.classname').removeClass("owl-carousel");
  //   }
  // }
  // $(document).ready(function(e) {
  //   owlInitialize();
  // });
  // $(window).resize(function() {
  //   owlInitialize();
  // });

  // A.3.1. END -----------------------------------------

// A.3. END -----------------------------------------------------------------------------------------------------------

}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. JAVASCRIPT LAYER [ 1.02 END ] ###################################################################################