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

//-----------Reverse counter----------------------//
 (() => {
  // start at 9:59
  let totalSeconds = 10 * 60 - 1; // 599

  const exitTimeCounter = document.getElementById("exitOffer");
  if (!exitTimeCounter) { console.error("exitOffer element not found"); return; }

  let extTimerId = null;

  function updateExitTimer() {
    if (totalSeconds >= 0) {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      const m = String(minutes).padStart(1, "0"); // use 2 if you want 09:59
      const s = String(seconds).padStart(2, "0");

      exitTimeCounter.textContent = `${m}:${s}`;
      totalSeconds--;
    } else {
      clearInterval(extTimerId);
      exitTimeCounter.textContent = "0:00"; // or "Time's up!"
    }
  }

  updateExitTimer();                // show immediately
  extTimerId = setInterval(updateExitTimer, 1000);
})(); 

document.querySelector(".close-poup").addEventListener("click", function (e) {
    e.preventDefault(); // stop page jump
    document.getElementById("extTabPopup").classList.remove("showExitPopup");
});


