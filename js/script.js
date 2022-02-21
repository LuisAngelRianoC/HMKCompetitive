$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".nav-bar").addClass("sticky");
    } else {
      $(".nav-bar").removeClass("sticky");
    }
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
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        item: 1,
        nav: false,
      },
      600: {
        item: 2,
        nav: false,
      },
      1000: {
        item: 3,
        nav: false,
      },
    },
  });
});
