jQuery(document).ready(function () {
  jQuery(document).on("scroll", onScroll);

// SmoothScroll
jQuery('a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  jQuery(document).off("scroll");

  jQuery('a').each(function () {
    jQuery(this).removeClass('is-active');
  })

  jQuery(this).addClass('is-active');

  var target = this.hash,
    menu = target;
  $target = jQuery(target);

  jQuery('html, body').stop().animate({
    'scrollTop': $target.offset().top+2
  }, 500, 'swing', function () {
      window.location.hash = target;
      jQuery(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = jQuery(document).scrollTop();

  jQuery('#block-adchallenge-main-menu a').each(function () {
    var currLink = jQuery(this);
    var refElement = jQuery(currLink.attr("href"));

    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      jQuery('#block-adchallenge-main-menu a').removeClass("is-active");

      currLink.addClass("is-active");
    }
    else {
      currLink.removeClass("is-active");
    }
  });
}
