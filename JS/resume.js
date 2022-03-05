var i = 0;
var ibttn = 0;
var x = 0;
var iImg = 0;
var iforward=0;
var valToRev="";
var txtm =  [" "," ", " ","Software Developer", " "," ", " ", "Web Developer", "Android Programmer"];

window.onload = function() {
  $("button.btn").addClass("hideDownload");
  $("a.float").addClass("home-visibility");
  typeWriterEffect("#Occupation",txtm);
  $("h1").animate({left: '0%'}).animate({Opacity: '20%'}).animate({Opacity: '100%'});
  $("h2").animate({Opacity: '20%'}).animate({Opacity: '100%'});
  $("h3").animate({Opacity: '20%'}).animate({Opacity: '100%'});
  $(".content-p").slideDown();

  var myfuncx = setInterval(alternateImg, 1200);
};

$(window).scroll(function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("a.float").fadeIn();
  } else {
    $("a.float").fadeOut();
  }
});

// Original Logic
function typeWriterEffect(targetID, strValue) {
  var myfunc = setInterval(function() {
    typeChar(targetID, strValue);}, 100);
  var myfunc2 = setInterval(function() {
    removeChar(targetID);}, 20);
}

function typeChar(targetID, arrValue){
  var txtSource;
  if (iforward == 0) {
    if (x<arrValue.length) {
      if (i<arrValue[x].length) {
        if ($(targetID).html().length > 0) {
          $(targetID).html($(targetID).html().substr(0,$(targetID).html().length-1));
        }
        txtSource = $(targetID).html() + arrValue[x].charAt(i) + "I";
        $(targetID).html(txtSource);
        i++;
      } else {
        iforward = 1;
        valToRev = $(targetID).html();
      }
    } else {
      x = 0;
    }
  }
}

function removeChar(targetID){
    if (iforward == 1) {
      if (i > 0) {
        $(targetID).html(valToRev.substr(0,i));
        i--;
      } else {
        iforward = 0;
        x++;
      }
    }
}

function alternateImg() {
    $("#skillx img").eq(iImg).removeClass("opaque");
    $("#skillx img").eq(iImg).removeClass("selected");
    if (iImg == 16) {iImg=-1};
    $("#skillx img").eq(iImg + 1).addClass("opaque");
    $("#skillx img").eq(iImg + 1).removeClass("selected");
    iImg++;
};

$(".container-top .profilepic-img").on("dblclick", function() {
  if (ibttn==0) {
    $("button.btn").removeClass("hideDownload");
    $("button.btn").addClass("showDownload");
    ibttn=1;
  } else {
    $("button.btn").removeClass("showDownload");
    $("button.btn").addClass("hideDownload");
    ibttn=0;
  }
  // $(".container-top .profilepic-img").animate({opacity:'0'});
});
