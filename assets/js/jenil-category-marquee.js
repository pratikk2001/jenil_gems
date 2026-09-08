(function ($) {
  'use strict';
  if (!window.matchMedia('(max-width: 767px)').matches) return;

  $(window).on('load', function () {
    var $carousel = $('.category-section.alternat-2 .category-carousel').first();
    if (!$carousel.length || $carousel.data('jenilMarquee')) return;

    var $cards = $carousel.children('.category-block-one');
    if (!$cards.length) $cards = $carousel.find('.owl-stage .category-block-one');
    if (!$cards.length) return;
    $cards = $cards.clone(true, true);

    var $track = $('<div class="jenil-marquee-track"></div>');
    $cards.each(function () { $track.append(this); });
    $track.append($track.children().clone(true, true).attr('aria-hidden', 'true'));
    $('<div class="jenil-mobile-collections" aria-label="Explore Sacred Collections"></div>')
      .append($track)
      .insertBefore($carousel);
    $carousel.remove();
  });
}(jQuery));
