$("#test").click(function () {
  var $marginLefty = $(".right");
  var $marginRight = $(".left");
  var $container = $(".container");
  console.log($marginRight.css("marginLeft"));
  $marginLefty.animate({
    marginLeft:
      parseInt($marginLefty.css("marginLeft"), 10) == 0
        ? $marginRight.width()
        : 0,
  });
});
