$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 400) {
    $(".header-container").addClass("fixed");
  } else {
    $(".header-container").removeClass("fixed");
  }
});

$(document).ready(function () {
  $('.feature').owlCarousel({
    items: 6,
    loop: true,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 1200,
    autoWidth: true,
    autoplayHoverPause: false,
    nav: false,
    dots:false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

  $('.satisfied-customers').owlCarousel({
    items: 5,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 1800,
    autoWidth: true,
    autoplayHoverPause: false,
    nav: true,
    dots:false,
    navText:["<div class='nav-btn prev-slide bi bi-arrow-left-short'></div>","<div class='nav-btn next-slide bi bi-arrow-right-short'></div>"], 
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

  $('.feedback').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    dots:false,
    navText:["<div class='nav-btn prev-slide bi bi-arrow-left-short'></div>","<div class='nav-btn next-slide bi bi-arrow-right-short'></div>"], 
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

$('.navbar-toggler').click(function(){
    $(this).toggleClass("swing");
});

})

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 600) {
    $(".back-to-top").addClass("show");
  } else {
    $(".back-to-top").removeClass("show");
  }
});



