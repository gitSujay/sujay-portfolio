
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 400) {
    $(".main-nav").addClass("fixed");
  } else {
    $(".main-nav").removeClass("fixed");
  }
});

/*

/******************Tab Menu********************************** 
document.addEventListener("DOMContentLoaded", () => {
  let chooseMenuLnk = document.getElementsByClassName("menu-link");

  // Map stickerBox to bundle item in cart
  const itemMap = {
    "lnkHome": "home",
    "lnkAbout": "about",
    "lnkService": "services",
    "lnkPortfolio": "portfolio",
    "lnkContact": "contact"
  };

  document.getElementById("home").classList.add("show-details");

  // 🔹 Sticker bundle select
  for (let i = 0; i < chooseMenuLnk.length; i++) {
    chooseMenuLnk[i].addEventListener("click", function () {
      if (this.classList.contains("active")) return;

      // Remove selection
      for (let j = 0; j < chooseMenuLnk.length; j++) {
        chooseMenuLnk[j].classList.remove("show-details");
      }
     ["home", "about", "services", "portfolio", "contact"].forEach(id => {
      document.getElementById(id).classList.remove("show-details");
    });

      // Add selection
      this.classList.add("active");
      let targetId = itemMap[this.id];
      if (targetId) {
        document.getElementById(targetId).classList.add("show-details");
      }
     
    });
  }
});  
*/


document.addEventListener("DOMContentLoaded", () => {
  const chooseMenuLnk = document.getElementsByClassName("menu-link");

  // Map menu link IDs to section IDs
  const itemMap = {
    "lnkHome": "home",
    "lnkAbout": "about",
    "lnkService": "services",
    "lnkPortfolio": "portfolio",
    "lnkContact": "contact"
  };

  // Show home section by default
  document.getElementById("home").classList.add("show-details");
  document.getElementById("lnkHome").classList.add("active");

  for (let i = 0; i < chooseMenuLnk.length; i++) {
    chooseMenuLnk[i].addEventListener("click", function () {
      if (this.classList.contains("active")) return;

      // 🔹 Remove active class from all links
      for (let j = 0; j < chooseMenuLnk.length; j++) {
        chooseMenuLnk[j].classList.remove("active");
      }

      // 🔹 Hide all sections
      ["home", "about", "services", "portfolio", "contact"].forEach(id => {
        document.getElementById(id).classList.remove("show-details");
      });

      // 🔹 Add active to current menu and show corresponding section
      this.classList.add("active");
      const targetId = itemMap[this.id];
      if (targetId) {
        document.getElementById(targetId).classList.add("show-details");
      }
    });
  }
});

 

