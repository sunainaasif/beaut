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
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

// To stick header //
$(document).ready( function() {
        
  $(".header_container").css('background','transparent'); //hide your div initially
  var topOfOthDiv = $("#special-section").offset().top;
  $(window).scroll(function() {
      if($(window).scrollTop() > topOfOthDiv - 200) { //scrolled past the other div?
          $(".header_container").css('background','linear-gradient(rgb(233 214 135), #b4913f)'); //reached the desired point -- show div
      
          $(".header_container").css('position','fixed');
          $(".header_container").css('width','100%');
          $(".header_container").css('height:','100px');
          

          

          // $(".lines div").css('background','#c5a552');
          if(!$('.header').hasClass('header-mbl'))
          $(".lines div").css('background','#c5a552');
      }else {
          $(".header_container").css('background','transparent'); //hide your div initially
          $(".header_container").css('position','static');
          $(".header_container").css('width','100%');
          

          $(".lines div").css('background','#fff');
      }
  });
});

// --------////
