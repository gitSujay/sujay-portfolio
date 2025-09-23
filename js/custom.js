$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 400) {
    $(".main-nav").addClass("fixed");
  } else {
    $(".main-nav").removeClass("fixed");
  }
});

$(document).ready(function () {
  $('.usesFor').owlCarousel({
    items: 6,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 1200,
    autoWidth: false,
    autoplayHoverPause: false,
    nav: false,
    dots:false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
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
    items: 1,
    loop:true,
    margin:60,
    nav:true,
    autoplay: true,
    dots:false,
    navText:["<div class='nav-btn prev-slide bi bi-arrow-left-short'></div>","<div class='nav-btn next-slide bi bi-arrow-right-short'></div>"], 
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     991:{
    //         items:2
    //     }
    // }
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



