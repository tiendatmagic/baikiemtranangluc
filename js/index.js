$(document).ready(function () {
  $(window).scroll(function (event) {
    var pos_body = $("html,body").scrollTop();
    // console.log(pos_body);
    if (pos_body > 20) {
      $(".menu").addClass("activemenu");
    } else {
      $(".menu").removeClass("activemenu");
    }
  });
  $(".back-to-top").click(function (event) {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1400
    );
  });
});
