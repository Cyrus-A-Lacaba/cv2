window.onload = function() {
  $("a.float").addClass("home-visibility")
};

$(window).scroll(function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("a.float").fadeIn();
  } else {
    $("a.float").fadeOut();
  }
});
