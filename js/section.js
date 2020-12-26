$(function () {
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave",
      duration: "200%",
    },
  });

  // get all slides
  var slides = document.querySelectorAll("div.panel");

  for (var i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: slides[i],
    })
      .setPin(slides[i], { pushFollowers: false })
      .addIndicators()
      .addTo(controller);
  }
});
