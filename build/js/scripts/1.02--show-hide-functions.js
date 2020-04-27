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