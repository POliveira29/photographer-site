/*Hero Animation*/

gsap.to(".overlay-transition", {
  autoAlpha: 0,
  delay: 2,
  ease: Power2.easeIOut,
});

gsap.fromTo(
  ".hero__title",
  {
    scale: 1.5,
    zIndex: 5,
    rotation: -27,
    y: 200,
  },
  {
    zIndex: 0,
    rotation: 0,
    scale: 0.5,
    duration: 2,
    ease: "expo.out",
  }
);

gsap.fromTo(
  ".hero__title",
  {
    y: 400,
  },
  {
    scale: 1,
    y: 260,
    delay: 2,
    ease: "expo.out",
  }
);

gsap.from(".hero__location", {
  duration: 3,
  ease: Power2.easeIOut,
  delay: 2,
});
