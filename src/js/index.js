/* NavFixed =============================================*/
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 425) {
      $(".header").addClass("nav--scroll-fixed");
    } else {
      $(".header").removeClass("nav--scroll-fixed");
    }
  });
});
/*Links Animations =============================================*/
gsap.registerPlugin(ScrollTrigger);
var timeline = gsap.timeline();

timeline.to(".link-card", {
  opacity: 1,
  duration: 2,
  ease: "power1.out",
});

ScrollTrigger.create({
  trigger: ".link-card",
  animation: timeline,
  start: "top top+=700",
  end: "+=500",
  scrub: 1,
});

gsap.to(".about__stamp", {
  scrollTrigger: {
    trigger: ".about__stamp",
    duration: 1,
    toggleActions: "restart none none reverse",
  },
  rotation: 125,
});

/*Portfolio Animations =============================================*/
var animPhotos = gsap.timeline();
animPhotos
  .to(
    ".portfolio__img--1",
    {
      x: 14,
      y: 40,
      rotate: -10,
      ease: "expo.out",
    },
    "1"
  )
  .to(
    ".portfolio__img--2",
    {
      x: 230,
      y: 85,
      rotate: 15,
      ease: "expo.out",
    },
    "1"
  )
  .to(
    ".portfolio__img--3",
    {
      x: -85,
      y: 240,
      rotate: 5,
      ease: "expo.out",
    },
    "1"
  )
  .to(
    ".portfolio__img--4",
    {
      x: 185,
      y: 240,
      rotate: 5,
      ease: "expo.out",
    },
    "1"
  );

ScrollTrigger.create({
  trigger: ".portfolio__wrap",
  animation: animPhotos,
  duration: 1,
  toggleActions: "restart none none reverse",
  start: "top top+=200",
  end: "+=200",
});
