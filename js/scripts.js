(function() {
  'use strict';

  // Find all id-s that starts with 'challenge-'.
  var section = document.querySelectorAll('[id^="challenge-"]');
  var sections = {};
  var i = 0;
  var didscroll = true;

  var forEach = function (array, callback, scope)
  {
    for (var i = 0; i < array.length; i++)
    {
      callback.call(scope, i, array[i]);
    }
  };

  forEach(section, function (index, value)
  {
      sections[value.id] = value.offsetTop;
  });

  window.onscroll = function()
  {
    didscroll = true;
  };

  setInterval(function()
  {
    if (didscroll)
    {
      didscroll = false;

      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      var height = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;

      for (i in sections)
      {
        if (sections[i]-(height / 2) <= scrollPosition)
        {
          var isnotnull = document.querySelector('#block-adchallenge-main-menu .is-active');
          if (isnotnull)
          {
            isnotnull.setAttribute('class', ' ');
          }
          document.querySelector('#block-adchallenge-main-menu a[href*=' + i + ']').setAttribute('class', 'is-active');
        }
      }
    }
  }, 250);

})();

jQuery(document).ready(function(){
  // Select all links with hashes
jQuery('#block-adchallenge-main-menu a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname)
    {
      // Figure out element to scroll to
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length)
      {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        // Get client window height to use for better smoothscroll positioning.
        var height = jQuery(window).height();
        jQuery('html, body').animate(
          {
            scrollTop: target.offset().top - height / 6
          }, 1000, function()
            {
            // Callback after animation
            // Must change focus!
            var $target = jQuery(target);
            $target.focus();
            if ($target.is(":focus"))
            { // Checking if the target was focused
              return false;
            } else
            {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});
