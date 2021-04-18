var i = 0;
var i2 = 0;
var x = 0;
var iforward=0;
var valToRev="";
var txtm = [" "," ", " ","Softqare De","Software Developer", " ", "Web Developer", "Androd", "Android Programmer"];

window.onload = function() {
  $("a.float").addClass("home-visibility")
  typeWriterEffect(txtm);
  $("h1").animate({Opacity: '20%'}).animate({Opacity: '100%'});
  $(".content-p").slideDown();
};

$(window).scroll(function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("a.float").fadeIn();
  } else {
    $("a.float").fadeOut();
  }
});

// Original Logic
function typeWriterEffect(strValue) {
  var myfunc = setInterval(function() {
    typeChar(strValue);}, 100);
  var myfunc2 = setInterval(function() {
    removeChar(strValue);}, 20);
}

function typeChar(){
  var txtSource;
  if (iforward == 0) {
    if (x<txtm.length) {
      if (i<txtm[x].length) {
        if ($("#Occupation").html().length > 0) {
          $("#Occupation").html($("#Occupation").html().substr(0,$("#Occupation").html().length-1));
        }
        txtSource = $("#Occupation").html() + txtm[x].charAt(i) + "I";
        $("#Occupation").html(txtSource);
        i++;
      } else {
        iforward = 1;
        valToRev = $("#Occupation").html();
      }
    } else {
      x = 0;
    }
  }
}

function removeChar(){
  if (iforward == 1) {
    if (i > 0) {
      $("#Occupation").html(valToRev.substr(0,i));
      i--;
    } else {
      iforward = 0;
      x++;
    }
  }
}

$("#skillx_controls").on('click', 'span', function() {
    $("#skillx img").removeClass("opaque");
    var newImage = $(this).index();
    $("#skillx img").eq(newImage).addClass("opaque");
    $("#skillx_controls span").removeClass("selected");
    $(this).addClass("selected");
  });
