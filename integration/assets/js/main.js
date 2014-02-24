jQuery(document).ready(function ($) {

    /**
     * Comment example
     */
    var foo = function(i) {
      return i * 2;
    };

    foo();

    /**
     * SVG supported ?
     */
    // if (!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
    //     $('img[src*="svg"]').attr('src', function() {
    //         return $(this).attr('src').replace('.svg', '.png');
    //     });
    // }

});
