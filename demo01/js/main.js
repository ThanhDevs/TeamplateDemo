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

    var sliderShow = function() {
      $('.single-item-slider').slick({
        dots: true,
        arrows: false
      });
    }

    // Dom Ready
    $(function() {

      // Zoom Image
      zoomImage();
      sliderShow();
    });
})(jQuery);
