
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 400) {
    $(".main-nav").addClass("fixed");
  } else {
    $(".main-nav").removeClass("fixed");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const chooseMenuLnk = document.getElementsByClassName("menu-link");
 

  // Map menu link IDs to section IDs
  const itemMap = {
    "lnkHome": "home",
    "lnkAbout": "about",
    "lnkService": "services",
    "lnkPortfolio": "portfolio",
    "lnkContact": "contact",
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

let about = document.getElementById("about");
let navLinks = document.querySelectorAll(".nav-list a"); // or ".menu-link" depending on your HTML

function lnkAboutMore() {
  // 1️⃣ Remove "show-details" from all sections if needed
  document.querySelectorAll(".show-details").forEach(el => {
    el.classList.remove("show-details");
  });

  // 2️⃣ Add "show-details" to the about section
  about.classList.add("show-details");

  // 3️⃣ Remove "active" from all nav links
  navLinks.forEach(link => link.classList.remove("active"));

  // 4️⃣ Add "active" to the About link
  document.getElementById("lnkAbout").classList.add("active");
}


/***************form validation ***************************/
// Form validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Inputs
const nameInput = document.getElementById("txt_name");
const emailInput = document.getElementById("txt_email");
const subjectInput = document.getElementById("txt_subject");
const messageInput = document.getElementById("txt_message");

// Error messages
const errName = document.getElementById("errName");
const errEmail = document.getElementById("errEmail");
const errSubject = document.getElementById("errSubject");
const errMessage = document.getElementById("errmessage");

// Validation function
function validateField(input, errorElement, validFn, errorMsg, validMsg) {
  let value = input.value.trim();

  if (value === "" || !validFn(value)) {
    errorElement.innerText = errorMsg;
    errorElement.classList.remove("valid", "bi-check-circle-fill");
    errorElement.classList.add("error");
    errorElement.style.display = "block";
    return false;
  } else {
    errorElement.innerText = validMsg;
    errorElement.classList.remove("error");
    errorElement.classList.add("valid", "bi", "bi-check-circle-fill");
    errorElement.style.display = "block";
    return true;
  }
}

// Blur events
nameInput.addEventListener("blur", () =>
  validateField(nameInput, errName, v => v.length > 0, "Enter full name", "")
);
emailInput.addEventListener("blur", () =>
  validateField(emailInput, errEmail, v => emailPattern.test(v), "Enter a valid email address", "")
);
subjectInput.addEventListener("blur", () =>
  validateField(subjectInput, errSubject, v => v.length > 0, "Enter subject", "")
);
messageInput.addEventListener("blur", () =>
  validateField(messageInput, errMessage, v => v.length >= 10 && v.length <= 300, "Enter message", "")
);

// Submit handler
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");
const scriptURL = 'https://script.google.com/macros/s/AKfycbxK28wMH-kMbQoRVZ9bGhOYMP8j5yufMNZdEgJ3zUSmBIJbeRZJuTJdwi5XpvcEw6H5YQ/exec';

form.addEventListener("submit", e => {
  e.preventDefault(); // stop default refresh

  const sendIcon = document.getElementById("sendIcon");
  let isValid = true;

  if (!validateField(nameInput, errName, v => v.length > 0, "Enter full name", "")) isValid = false;
  if (!validateField(emailInput, errEmail, v => emailPattern.test(v), "Enter a valid email address", "")) isValid = false;
  if (!validateField(subjectInput, errSubject, v => v.length > 0, "Enter subject", "")) isValid = false;
  if (!validateField(messageInput, errMessage, v => v.length >= 10 && v.length <= 300, "Enter message", "")) isValid = false;

  if (!isValid) return; // stop submit if invalid

  // 🔄 Change icon to loading spinner
  sendIcon.classList.remove("bi-send-fill");
  sendIcon.classList.add("bi-arrow-repeat", "bi-spin");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response => {
      msg.classList.add("show");
      setTimeout(() => msg.classList.remove("show"), 5000);

      // ✅ Reset form
      form.reset();

      // ✅ Clear validation messages
      const errorElements = document.querySelectorAll(".error, .valid");
      errorElements.forEach(el => {
        el.innerText = "";
        el.classList.remove("error", "valid", "bi", "bi-check-circle-fill");
        el.style.display = "none";
      });

      // 🔙 Restore icon
      sendIcon.classList.remove("bi-arrow-repeat", "bi-spin");
      sendIcon.classList.add("bi-send-fill");
    })
    .catch(error => {
      console.error("Error!", error.message);
      // Even if error — restore icon
      sendIcon.classList.remove("bi-arrow-repeat", "bi-spin");
      sendIcon.classList.add("bi-send-fill");
    });
});

/***************End form validation ***************************/

/****************web Mode ************************** */
// JavaScript
let icon = document.querySelector(".mode-icon");

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        icon.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
    } else {
        document.body.classList.remove("dark-theme");
        icon.classList.replace("bi-moon-fill", "bi-brightness-high-fill");
    }
});

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.replace("bi-moon-fill", "bi-brightness-high-fill");
        localStorage.setItem("theme", "light");
    }
};

/**************** text color theme ************************** */
let colorIcon = document.querySelector(".color-icon");
let colorBox = document.querySelector(".color-box");
let redText = document.querySelector(".btn-theme-red");
let orangeText = document.querySelector(".btn-theme-orange");
let crayon = document.querySelector(".btn-theme-crayon");
let blue = document.querySelector(".btn-theme-blue");
let pink = document.querySelector(".btn-theme-pink")

/*
colorIcon.onclick = function(){
  colorBox.classList.toggle("open");
}*/

colorBox.addEventListener('mouseover', () => {
  colorBox.classList.add("open");
});
colorBox.addEventListener('mouseleave', () => {
  colorBox.classList.remove("open");
});

function removeAllColors() {
  document.body.classList.remove("txt-red", "txt-orange", "txt-crayon", "txt-blue", "txt-pink");
}

// Save selected color theme
function saveTheme(theme) {
  localStorage.setItem("themeColor", theme);
}

// Load saved color theme on refresh
window.addEventListener("load", function() {
  const savedTheme = localStorage.getItem("themeColor");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
});

// Update your existing color buttons to also save the theme
redText.onclick = function () {
  removeAllColors();
  document.body.classList.add("txt-red");
  saveTheme("txt-red");
};

orangeText.onclick = function () {
  removeAllColors();
  document.body.classList.add("txt-orange");
  saveTheme("txt-orange");
};

crayon.onclick = function () {
  removeAllColors();
  document.body.classList.add("txt-crayon");
  saveTheme("txt-crayon");
};

blue.onclick = function () {
  removeAllColors();
  document.body.classList.add("txt-blue");
  saveTheme("txt-blue");
};

pink.onclick = function () {
  removeAllColors();
  document.body.classList.add("txt-pink");
  saveTheme("txt-pink");
};



/************Mobile nav Js****************** */
let burger = document.querySelector(".btn-mob-navbar");
let sidebar = document.querySelector(".side-menu");
let menuLinks = document.querySelectorAll(".menu-link");

burger.onclick = function(){
  burger.classList.toggle("ico-close");
  sidebar.classList.toggle("show-menu");
}

menuLinks.forEach(link => {
  link.onclick = function() {
    burger.classList.remove("ico-close");
    sidebar.classList.remove("show-menu");
  };
});





 

