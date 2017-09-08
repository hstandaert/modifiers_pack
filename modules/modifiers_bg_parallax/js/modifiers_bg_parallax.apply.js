/**
 * @file
 * Initializes modification based on provided configuration.
 */

(function (ParallaxBgModifier, $) {

  'use strict';

  ParallaxBgModifier.apply = function (selector, config) {

    var pluginConfig = {
      zIndex: 0
    };
    for (var property in config.parallax) {
      if (config.parallax.hasOwnProperty(property)) {
        pluginConfig[property] = config.parallax[property];
      }
    }

    $(selector).parallax(pluginConfig);

    var slider = '.parallax-slider[src="' + config.parallax.imageSrc + '"]';
    var element = document.querySelector(slider);

    toggle(element, config.media);

    window.addEventListener('resize', function () {
      toggle(element, config.media);
    });

  };

  function toggle(element, media) {

    if (window.matchMedia(media).matches) {
      element.style.display = '';
    }
    else {
      element.style.display = 'none';
    }

  }

})(window.ParallaxBgModifier = window.ParallaxBgModifier || {}, jQuery);
