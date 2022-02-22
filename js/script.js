$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".nav-bar").addClass("sticky");
    } else {
      $(".nav-bar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //#slide up
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // typing animation cript
  var typed = new Typed(".typing", {
    strings: ["Community", "Family", "Spartans!!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  //#toggle
  $(".menu-btn").click(function () {
    $(".nav-bar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // carrousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
