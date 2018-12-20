;(function($) {
    'use strict'

    /*
      *Zoom Image
     * Sliders
     * Show Main Menu
     */

    var zoomImage = function() {
      // Get section
      var $section = $('.row-location');
      $section.find('.image-zoom').panzoom({
        $zoomIn: $section.find(".zoom-in"),
        $zoomOut: $section.find(".zoom-out"),
        startTransform: 'scale(1.1)',
        increment: 0.1,
        minScale: 1,
        contain: 'invert'
      });
    }

    // Sliders
    var sliderShow = function() {
      $('.single-item-slider').slick({
        dots: true,
        arrows: false
      });
    }

    // Show Main Menu
    var showMainMenu = function() {
      $('#hamburger').on('click', function() {
        $('#main-menu').toggleClass('is-show')
        $('#main-menu .main-menu--cls').toggleClass('is-show')
      });

      $('#main-menu .main-menu--cls').on('click', function() {
        $('#main-menu').removeClass('is-show')
        $('#main-menu .main-menu--cls').removeClass('is-show')
      })
    }

    // Scroll
    var scrollFun = function() {
      $(window).scroll(function() {
        var scroll = $(this).scrollTop(),
            overviewOffSetTop = $('#overview').offset().top,
            overviewOuterHeight = $('#overview').outerHeight(),
            windowHeight = $(window).height()

        // console.log((overviewOffSetTop - overviewOuterHeight), scroll )
        if (scroll > (overviewOffSetTop + overviewOuterHeight - windowHeight)) {
          $('.row-banner-form').addClass('fixed-form')
          $('.form-btn-fixed').addClass('show-form-btn')
        } else if (scroll < (overviewOffSetTop + overviewOuterHeight - windowHeight)) {
          $('.row-banner-form').removeClass('fixed-form')
          $('.form-btn-fixed').removeClass('show-form-btn')
          $('.row-banner-form').removeClass('is-show')
        }

        // Show Form
        $('.form-btn-fixed').on('click', function() {
          $('.row-banner-form').addClass('is-show')
          $('#fixed-form-cls').addClass('fixed-form-cls')
        })

        // Hidden form
        $('#fixed-form-cls').on('click', function() {
          $('.row-banner-form').removeClass('is-show')
        })

      })
    }

    // Angent list
    var angntList = function() {
      $('.angent-list-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
      });
    }

    // Target Scroll Section
    var targetScrollSection = function() {
      $('#main-menu ul li a, .scroll-btn').on('click',function() {
          var anchor = $(this).attr('href').split('#')[1];
          if ( anchor ) {
              if ( $('#'+anchor).length > 0 ) {
                  var target = $('#'+anchor).offset().top

                  $('html,body').animate({scrollTop: target}, 1000, 'easeInOutExpo')
              }
          }
          return false;
      });
    }


    // Dom Ready
    $(function() {

      // Zoom Image
      zoomImage();

      // Sliders
      sliderShow();

      //Show Main Menu
      showMainMenu();

      // Scroll Function
      scrollFun();

      // Angent list
      angntList();

      // Target Scroll Section
      targetScrollSection();
    });
})(jQuery);
