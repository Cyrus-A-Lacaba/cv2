var i = 0;
var x = 0;

var txtm = [" "," ", " ","Software Developer", "Web Developer", "Android Programmer"];

window.onload = function() {
  $("a.float").addClass("home-visibility")
  var myfunc = setInterval(typeWriterEffect,100);
};

$(window).scroll(function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("a.float").fadeIn();
  } else {
    $("a.float").fadeOut();
  }
});

function typeWriterEffect(){
  var txtSource;
  if(x<txtm.length) {
    if (i<txtm[x].length) {

      if ($("#Occupation").html().length > 0) {
        $("#Occupation").html($("#Occupation").html().substr(0,$("#Occupation").html().length-1));
      }

      txtSource = $("#Occupation").html() + txtm[x].charAt(i) + "I";
      $("#Occupation").html(txtSource);

      i++;
    } else {
      i = 0;
      $("#Occupation").html("");
      x++;
    }
  } else {
    x = 0;
    // clearInterval(myfunc);
  }
}
