/* Menu Collapse  */
$(".header__menu").click(function () {
  //   $(".menu").toggle();
  if ($(".menu").hasClass("active")) {
    $(".menu").removeClass("active");
    $(".header__menu").removeClass("header__menu--active");
    $(".hero__logo").removeClass("hero__logo--active");
    $(".menu__nav").removeClass("nav-active");
    $(".external-nav").removeClass("nav-active");
  } else {
    $(".menu").addClass("active");
    $(".header__menu").addClass("header__menu--active");
    $(".hero__logo").addClass("hero__logo--active");
    $(".menu__nav").addClass("nav-active");
    $(".external-nav").addClass("nav-active");
  }
});
