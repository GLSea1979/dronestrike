'use strict';

(function(mod) {
  const aboutController = {};
  aboutController.index = function() {
    $('html').css({'height':'100%', 'margin':'auto', 'padding':'inherit'});
    $('section').fadeOut();
    $('#aboutUs').fadeIn();
  };

  mod.aboutController = aboutController;
})(window);
