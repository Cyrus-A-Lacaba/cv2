$(window).on("load",function(){
  $("img").fadeIn();
})

$(window).scroll(function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("a.float").fadeIn();
  } else {
    $("a.float").fadeOut();
  }
});

$(".carousel-ite'").show('slow', function(){
    $(this).fadeIn();
});
