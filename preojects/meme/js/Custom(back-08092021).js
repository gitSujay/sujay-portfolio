//click open menu
$(document).ready(function(){
    var removeClass = true;
    $(".btn-slideContent").click(function(){
        $(this).addClass('cross');
        $("#slideContent").toggleClass("open");
        removeClass = false;
    });

    $("#slideContent").click(function(){
        removeClass = false;
        removeClass = true;
    });
    
    $("html").click(function(){
        if (removeClass){
            $(".btn-slideContent").removeClass("cross"); 
            $("#slideContent").removeClass("open"); 
        }
        removeClass = true;
        removeClass = true;
    });
}); 

//click open menu
$(document).ready(function(){
  var removeClass = true;
  $(".ico-desk-Burger").click(function(){
      $(this).addClass('cross');
      $(".drawer").toggleClass("open");
      $("body").toggleClass("pull");
      removeClass = false;

  }); 
}); 

$(document).ready(function() {
    $(".chat-btn").click(function(){ 
        $(".chatBoat-container").addClass("show");
    });
    $(".chat-close").click(function(){ 
        $(".chatBoat-container").removeClass("show");
    });
});

// scroll to fixed header
$(document).ready(function () {
	$( window ).scroll(function() {

		var height = $(window).scrollTop();

		if(height >= 150) {
			$('.navbar').addClass('fixed-top');
            $('#backTop').addClass('bt-visable');
            $('.drawer').addClass('stik');
		} else {
			$('.navbar').removeClass('fixed-top');
            $('#backTop').removeClass('bt-visable');
            $('.drawer').removeClass('stik');
		}
	});
    $(".fixed-top" ).fixed-top( "This" + height + "is!");
});




$(document).ready(function(){
    $('#portfolio').magnificPopup({
      delegate: 'a',
      type: 'image',
      image: {
        cursor: null,
        titleSrc: 'title'
      },
      gallery: {
        enabled: true,
        preload: [0,1], // Will preload 0 - before current, and 1 after the current image
        navigateByImgClick: true
      }
    });
  });

 


$(document).ready( function( $ ) {
	"use strict";
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
 $(document).ready(function() {
$(".drawer-button").click(function () {
  $(".drawer").toggleClass('open');
  $("body").toggleClass('body-push');
});
});


$(document).ready(function(){
  var removeClass = true;
  $('.drawer li').click(function(){  
    $(this).toggleClass('active').siblings().removeClass('active')
});

});

