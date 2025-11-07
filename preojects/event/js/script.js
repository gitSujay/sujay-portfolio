//<script>
$('.videoGallery').owlCarousel({
    merge: true,
    loop: true,
    margin: 20,
    video: true,
    lazyLoad: true,
    center: true,
    nav: true,
    dots: true,
    navRewind: true,
    navText: [
          "<i class='bi bi-arrow-left-circle-fill'></i>", 
          "<i class='bi bi-arrow-right-circle-fill'></i>"  ],
    responsive: {
        0: { items: 2 },
        767: { items: 2 },
        991: { items: 3 },
        1000: { items: 4 }
    }
});
//</script>

$('.singerGallery').owlCarousel({
    
    margin:30,
    loop: true,
    nav: true,
    dots: true,
    navRewind: true,
    navText: [
          "<i class='bi bi-arrow-left-circle-fill'></i>", 
          "<i class='bi bi-arrow-right-circle-fill'></i>"  ],
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



  'use strict'

  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })


$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 600) {
    $(".back-to-top").addClass("show");
  } else {
    $(".back-to-top").removeClass("show");
  }
});

