;(function($) {
    'use strict'
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

    // Dom Ready
    $(function() {

      // Zoom Image
      zoomImage();

      // Sliders
      sliderShow();

      showMainMenu();
    });
})(jQuery);
