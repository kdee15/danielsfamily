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