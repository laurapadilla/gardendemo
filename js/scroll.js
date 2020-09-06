$(document).on("scroll", function () {
  var pixels = $(document).scrollTop();

  $("section.container").css("left", -1 * pixels);
});
