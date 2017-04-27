(function ($) {

  var $carouWrap = $('section.carousel'),
      $carouInner = $carouWrap.find('.carousel-inner'),
      $prev = $carouWrap.find('.prev'),
      $next = $carouWrap.find('.next'),
      sliderInterval,
      settings = {
        duration : 500
      };


  //function for opening mobile-nav
  function mobileNavOpen () {

    $('.site-nav').toggleClass('is-open');

  }


  //function for toggling Drop-Down Button
  function toggleDropDown(e) {

    e.stopPropagation();

    $('.home-wrap').on('click', function() {

      $('.drop-down').removeClass('is-open');

    });


    $(this).toggleClass('is-open').siblings().removeClass('is-open');

  }


  //function for auto slide show
  function slideNext () {

    $carouInner.animate({'left': '-200%'}, settings.duration - 200, function() {  //moving the slider wrapper to the right by

      $carouInner.css('left', '-100%');

      $carouInner.children().last().after($carouInner.children().first());

    });

  }

  function slidePrev () {

    clearInterval(sliderInterval);

    $carouInner.animate({'left': '0%'}, settings.duration - 200, function() {

      $carouInner.css('left', '-100%');

      $carouInner.children().first().before($carouInner.children().last());

    });

  }


  $(document).ready(function () {

    //Mobile-nav Toggle
    $('.mobile-nav-toggle').on('click', mobileNavOpen);

    //Drop Down menu Toggle
    $('.drop-down').on('click', toggleDropDown);


    //overlay stuff
    $('.ovl-tgr').on('click', function() {

      $('.overlay').addClass('is-open');

    });


    $('.close-btn').on('click', function() {

      $('.overlay').removeClass('is-open');

    });




    //Enabling auto scroll
    sliderInterval = setInterval(slideNext, settings.duration * 8);

    //next button click handler
    $next.on('click', function() {

      clearInterval(sliderInterval);

      slideNext();

    });

    //previous button click handler
    $prev.on('click', slidePrev);

    $(window).on('scroll', function() {

      var wScroll = $(this).scrollTop();

      if($('.top-stories').offset().top/4 < wScroll) {
        $('.top-stories').addClass('is-active');
      }

      if($('.activities-wrapper').offset().top/1.5 < wScroll) {
        $('.activities-wrapper').addClass('is-active');
      }

      console.log(wScroll);

    });

    // window resizing function
    $(window).resize(function() {

      $carouInner.css('margin-left', '0');

    });

  });


}) (jQuery);
