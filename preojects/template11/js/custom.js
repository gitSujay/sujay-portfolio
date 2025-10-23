$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 400) {
    $(".main-nav").addClass("fixed");
  } else {
    $(".main-nav").removeClass("fixed");
  }
});



  $('.satisfied-customers').owlCarousel({
    items: 5,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 1800,
    autoWidth: false,
    autoplayHoverPause: false,
    nav: true,
    dots:false,
    navText:["<div class='nav-btn prev-slide bi bi-arrow-left-short'></div>","<div class='nav-btn next-slide bi bi-arrow-right-short'></div>"], 
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 5
      }
    }
  });

  $('.feedback').owlCarousel({
    items: 2,
    loop:true,
    margin:20,
    nav:true,
    autoplay: true,
    dots:true,
    navText:[], 
    responsive:{
        0:{
            items:1
        },
        991:{
            items:2
        }
    }
})

$('.navbar-toggler').click(function(){
    $(this).toggleClass("swing");
});



$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 600) {
    $(".back-to-top").addClass("show");
  } else {
    $(".back-to-top").removeClass("show");
  }
});



