$(document).ready(function () {
  $(".lines").click(function () {
    $(".header").toggleClass("header-mbl");
    $("body").toggleClass("fixed-position");
  });
  $('.testimonials-slider').slick({
    arrows:true,
    
  });
  
});


// $(document).ready(function(){
//   $('.testimonials-slider').slick();
// });