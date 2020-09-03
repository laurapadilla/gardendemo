$(document).on("scroll", function () {
  var pixels = $(document).scrollTop();

  $("section.main").css("left", -1 * pixels);
});
