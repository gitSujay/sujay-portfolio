var owl = $('.howtomake');
owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:8000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
      0:{
          items:2
      },
      600:{
          items:2
      },
      1000:{
          items:5
       }
  }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

var owl = $('.stape');
owl.owlCarousel({
    loop:true,
    margin:28,
    autoplay:false,
    nav:false,
    autoplayTimeout:8000,
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
})




window.onscroll = function() {backTotop()};  
function backTotop() {
 if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
  document.getElementById("backTop").className = "gotopbtn bt-visable";
  } else {
    document.getElementById("backTop").className = "gotopbtn";
 }
}; 





function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".main-nav").addClass("darkHeader");
    } else {
        $(".main-nav").removeClass("darkHeader");
    }
});