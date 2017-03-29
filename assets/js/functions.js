// (function ($) {

  var $carouWrap = $('section.carousel'),
      $carouInner = $carouWrap.find('.carousel-inner'),
      $carouSlide = $carouInner.find('.carousel-slide'),
      slideWidth = $carouSlide.width(),
      slideLength = $carouSlide.length,
      $prev = $carouWrap.find('.prev'),
      $next = $carouWrap.find('.next'),
      sliderInterval,
      settings = {
        duration : 700
      };

  //function for auto slide show
  function slideNext () {

    var slideWidth = $carouSlide.width();

    if (parseInt($carouInner.css('margin-left')) <= (slideWidth * (slideLength - 1) * -1)) {

      $carouInner.css('margin-left', '0');

    }

    $carouInner.animate({'margin-left': '-='+ slideWidth +''}, settings.duration);

  }

  function slidePrev () {

    var slideWidth = $carouSlide.width();

    clearInterval(sliderInterval);

    if (parseInt($carouInner.css('margin-left')) >= 0) {

      $carouInner.css('margin-left', -(slideWidth * (slideLength - 1)));

    }

    $carouInner.animate({'margin-left': '+='+ slideWidth +''}, settings.duration);


  }


  $(document).ready(function () {


    //Enabling auto scroll
    sliderInterval = setInterval(slideNext, settings.duration * 4);

    //next button click handler
    $next.on('click', function() {

      clearInterval(sliderInterval);

      slideNext();

    });

    //previous button click handler
    $prev.on('click', slidePrev);

    // window resizing function
    $(window).resize(function() {

      $carouInner.css('margin-left', '0');

    });

  });


}) (jQuery);
