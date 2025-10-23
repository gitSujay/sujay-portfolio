var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.position = "fixed";

  } else {
    navbar.style.position = "relative";

  }
  lastScrollTop = scrollTop
})



$(document).ready(function () {
  $('#popAdd').addClass('show');
}); 


$(document).ready(function () {
  $(".mod-close").click(function () {
      $("#popAdd").removeClass("show");
  });
});


setTimeout(function(){
  $('#popAdd').removeClass('show')
},5000);

$(document).on('click', '.dropdown-menu', function (e) {
  e.stopPropagation();
});

 $(document).ready(function() {
  let removeClass = true;
   $(".ico-desk-Burger").click(function(){       
       $("body").toggleClass("push");   
       removeClass = false;
   })
   
  $(".overlay").click(function(){
     removeClass = true;
 });

   $("html").click(function(){
       if (removeClass){
          $(".mobile-toggle").removeClass("open"); 
       }
       removeClass = true;
   })
  });



$(document).ready(function() {
  let removeClass = true;
   $(".ico-mob-Burger").click(function(){       
     $(".desktop-menu-left").addClass("open");
      $("body").addClass("push");   
   })
   $(".mob-toggle").click(function(){
        $(".desktop-menu-left").removeClass("open");
        $("body").removeClass("push");   
   })
 });
 $(".ico-mob-Burger").click(function(){
  $("body").removeClass("push")
});

$(".mobile-toggle").click(function(){
  $("body").removeClass("push")
});


