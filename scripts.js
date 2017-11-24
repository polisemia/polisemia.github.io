(function () {
  'use strict';

  var $objects = $('iframe, video');

  $objects.each(function () {
    var $this = $(this);
    if ($this.attr('data-ratio') === undefined) {
      var height = $this.attr('height');
      var width = $this.attr('width') || this.width;
      if (height) {
        $this.attr('data-ratio', height / width);
      }
    }
    $this
      .removeAttr('height')
      .removeAttr('width');
  });

  var resize = function () {
    $objects.each(function () {
      var $this = $(this);
      if ($this.attr('data-ratio')) {
        $this.height(Math.round($this.width() * $this.attr('data-ratio')));
      }
    });
  };

  $(window).resize(resize);
  $(window).load(resize);
})();
