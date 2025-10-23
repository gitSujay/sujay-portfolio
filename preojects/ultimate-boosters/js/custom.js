
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 16) {
        $(".main-nav").addClass("stik");
    } else {
        $(".main-nav").removeClass("stik");
    }
});

$(document).on('scroll', function () {
  if ($(window).scrollTop() > 385) {
      $('.search-wraper').addClass('stik');
    } else {
      $('.search-wraper').removeClass('stik');
    }
  }); 

$(document).ready(function () { 
      $(document).on('scroll', function () {
      if ($(window).scrollTop() > 500) {
          $('.scroll-top-wrapper').addClass('show');
        } else {
          $('.scroll-top-wrapper').removeClass('show');
        }
      }); 
      $('.scroll-top-wrapper').on('click', scrollToTop);   
  });


  $(document).ready(function() {
    $(".btn-chat").click(function(){ 
        $(".chatBoat-container").addClass("show");
    });
    $(".chat-close").click(function(){ 
        $(".chatBoat-container").removeClass("show");
    });
});


$(document).ready(function() {
  var t = $(".input-div"), // register placeholder
      p = t.attr("placeholder"); // get placeholder value
  
  /* when focus is set to the element - placeholder disappears */
  t.on("focus", function() {
      $(this).attr("placeholder", "")
  }),
  /* when element loses focus if there is no text - set placeholder again */
  t.on("focusout", function() {
      $(this).text().trim().length || $(this).attr("placeholder", p)
  })
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