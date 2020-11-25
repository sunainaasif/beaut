$(document).ready(function () {
  $(".lines").click(function () {
    $(".header").toggleClass("header-mbl");
    $(".header-inner").toggleClass("header-inner-mbl");

    if ($(".header").hasClass("header-mbl")) {
      $(".lines div").css("background", "#fff");
    } else {
      $(".lines div").css("background", "#c5a552");
    }
    // $("body").toggleClass("fixed-position");
  });
  $(".testimonials-slider").slick({
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
  });
});

// $(document).ready(function(){
//   $('.testimonials-slider').slick();
// });
