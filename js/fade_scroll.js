$(document).ready(function () {
  $(window).scroll(function () {
    $(".fade_scroll").each(function (i) {
      var ob_bottom = $(this).position().top + $(this).outerHeight();
      var w_bottom = $(window).scrollTop() + $(window).height();

      if (w_bottom > ob_bottom) {
        $(this).animate({ opacity: "1" }, 900);
      }
    });
  });
});
