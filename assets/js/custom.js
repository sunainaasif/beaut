$(document).ready(function () {
  $(".lines").click(function () {
    $(".header").toggleClass("header-mbl");
    $("body").toggleClass("fixed-position");
  });
});
