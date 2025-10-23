//click open menu
$(document).ready(function () {
  var removeClass = true;
  $(".btn-slideContent").click(function () {
    $(this).addClass('cross');
    $("#slideContent").toggleClass("open");
    removeClass = false;
  });

  $("#slideContent").click(function () {
    removeClass = false;
    removeClass = true;
  });

  $("html").click(function () {
    if (removeClass) {
      $(".btn-slideContent").removeClass("cross");
      $("#slideContent").removeClass("open");
    }
    removeClass = true;
    removeClass = true;
  });
});


//click open menu
$(document).ready(function () {
  var removeClass = true;
  $(".ico-desk-Burger").click(function () {
    $(this).addClass('cross');
    $(".drawer").toggleClass("open");
    $("body").toggleClass("pull");
    removeClass = false;

  });
});

$(document).ready(function () {
  $(".chat-btn").click(function () {
    $(".chatBoat-container").addClass("show");
  });
  $(".chat-close").click(function () {
    $(".chatBoat-container").removeClass("show");
  });
});

// scroll to fixed header
$(document).ready(function () {
  $(window).scroll(function () {

    var height = $(window).scrollTop();

    if (height >= 150) {
      $('.navbar').addClass('fixed-top');
      $('#backTop').addClass('bt-visable');
      $('.drawer').addClass('stik');
    } else {
      $('.navbar').removeClass('fixed-top');
      $('#backTop').removeClass('bt-visable');
      $('.drawer').removeClass('stik');
    }
  });
  $(".fixed-top").fixed - top("This" + height + "is!");
});


//Galary Image popup
$(document).ready(function () {
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    image: {
      cursor: null,
      titleSrc: 'title'
    },
    gallery: {
      enabled: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
    }
  });
});

$(document).ready(function () {
  $('#mediaImageGallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    image: {
      cursor: null,
      titleSrc: 'title'
    },
    gallery: {
      enabled: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
    }
  });
});




//Hover effect of card
$(document).ready(function ($) {
  // "use strict";
  $(".card").tilt({
    maxTilt: 15,
    perspective: 1400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 1200,
    glare: true,
    maxGlare: 0.2,
    scale: 1.04
  });
});


//click open menu
$(document).ready(function () {
  $(".drawer-button").click(function () {
    $(".drawer").toggleClass('open');
    $("body").toggleClass('body-push');
  });
});

//Active Current Page through URL
$(document).ready(function () {
  var removeClass = true;
  $('.drawer li').click(function () {
    $(this).toggleClass('active').siblings().removeClass('active')
  });
});


//carter carousel
$(document).ready(function () {
  var owl = $('.charter');
  owl.owlCarousel({
    loop: true,
    margin: 15,
    autoplay: false,
    autoplayTimeout: false,
    autoplayHoverPause: false,
    responsiveClass: true,
    navigation: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });
});
//sale carousel
$(document).ready(function () {
  var owl = $('.sale');
  owl.owlCarousel({
    loop: true,
    margin: 15,
    autoplay: false,
    autoplayTimeout: false,
    autoplayHoverPause: false,
    responsiveClass: true,
    navigation: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });
});

//Hotel carousel
$(document).ready(function () {
  var owl = $('.hotel');
  owl.owlCarousel({
    loop: true,
    margin: 15,
    autoplay: false,
    autoplayTimeout: false,
    autoplayHoverPause: false,
    responsiveClass: true,
    navigation: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });
});

//Saling share carousel
$(document).ready(function () {
  var owl = $('.sailingSare');
  owl.owlCarousel({
    loop: true,
    margin: 15,
    autoplay: false,
    autoplayTimeout: false,
    autoplayHoverPause: false,
    responsiveClass: true,
    navigation: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });
});

//Flip Id Card
$(document).ready(function () {
  $(".btn-flip").click(function () {
    $(".id-card-content").toggleClass('flip');
  });
});

//Multi lavel dropdown



//Job Filter Dropdown Mobile

$(document).ready(function () {
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height >= 150) {
      $('.jobs-nav').removeClass('fixed-top');
    } else {
      $('.jobs-nav').removeClass('fixed-top');   
    }
  });
});

//Type writer effect
$(document).ready(function () {
var owl = $('.subscribers-logo');
owl.owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    nav:true,
    navText:["<div class='nav-btn prev-slide fas fa-arrow-left'> </div>","<div class='nav-btn next-slide fas fa-arrow-right'> </div>"],
    dots:false,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:6
       }
  }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});
});


//Typer

$(document).ready(function () {
  $("#typingTagline").typer({
    strings: [
      "Find your next employe for your team.",
      "Cost Efficiant Recruitment Agency",
    ]
  });
});

//Multiple Date selector                  
  $(document).ready(function () {
    $('.date').datepicker({ multidate: true, format: 'dd-mm-yyyy'});
  });
                                   








