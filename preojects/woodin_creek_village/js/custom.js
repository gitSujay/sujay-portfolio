// JavaScript Document
$(document).ready(function () {
  var removeClass = true;

  $(".navbar-toggle").click(function () {
    $("#main-menu").toggleClass('open');
    removeClass = false;
  });

  // when clicking the div : never remove the class
  $("#main-menu").click(function () {
    removeClass = false;
  });

  // when click event reaches "html" : remove class if needed, and reset flag
  $("html").click(function () {
    if (removeClass) {
      $("#main-menu").removeClass('open');
    }
    removeClass = true;
  });
});


$(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
        $(".navbar").addClass("bg-theme shadow");
    } else {
        $(".navbar").removeClass("bg-theme shadow");
    }
});




