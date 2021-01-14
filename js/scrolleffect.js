$(function () {
  // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();
  // define movement of panels
  var wipeAnimation = new TimelineMax()
    .fromTo(
      "div.panel.lang",
      1,
      { x: "100%" },
      { x: "0%", ease: Linear.easeInOut, duration: 100 }
    ) // in from right
    .fromTo(
      "div.panel.tech",
      1,
      { x: "100%" },
      { x: "0%", ease: Linear.easeInOut, duration: 100 }
    ) // in from right
    .fromTo(
      "div.panel.project_intro_page",
      1,
      { x: "-100%" },
      { x: "0%", ease: Linear.easeInOut, duration: 100 }
    ) // in from left
    .fromTo(
      "div.panel.second",
      1,
      { x: "-100%" },
      { x: "0%", ease: Linear.easeInOut, duration: 100 }
    ) // in from left
    .fromTo(
      "div.panel.work_intro",
      1,
      { x: "100%" },
      { x: "0%", ease: Linear.easeInOut, duration: 100 }
    )
    .fromTo(
      "div.panel.third",
      1,
      { x: "100%" },
      { x: "0%", ease: Linear.easeInOut, duration: 100 }
    ) // in from right
    .fromTo(
      "div.panel.third_next",
      1,
      { x: "100%" },
      { x: "0%", ease: Linear.easeInOut, duration: 1 }
    ) // in from right
    .fromTo(
      "div.panel.fourth",
      1,
      { y: "-100%" },
      { y: "0%", ease: Linear.easeInOut }
    ); // in from top
  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "300%",
  })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addTo(controller);
});
