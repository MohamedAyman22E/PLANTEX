$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".navList").addClass("active");
  });
  $(".fa-xmark").click(function () {
    $(".navList").removeClass("active");
  });
  $(".theme-icon").on("click", function () {
    $(".theme-icon").toggleClass("fa-sun");
    $(".theme-icon").toggleClass("fa-moon");
    $(":root").toggleClass("active");
  });
  $(document).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
});
