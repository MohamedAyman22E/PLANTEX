$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".navList").addClass("active");
  });
  $(".fa-xmark").click(function () {
    $(".navList").removeClass("active");
  });
  //
  $(".theme-icon").on("click", function () {
    $(".theme-icon").toggleClass("fa-sun");
    $(".theme-icon").toggleClass("fa-moon");
    $(":root").toggleClass("active");
  });
  //
  $(document).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });

  //
  $(".navList li a").click(function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
    $("html,body").animation(
      {
        screenTop: $("#" + $(this).data("scroll")).offset().top + 5,
      },
      1000
    );
  });
  //
  $(window).scroll(function () {
    $("section").each(function () {
      if ($(window).scrollTop() > $(this).offset().top) {
        var id = $(this).attr("id");
        $(".navList a").removeClass("active");
        $('.navList li a[data-scroll="' + id + '"]').addClass("active");
      }
    });
  });
});
