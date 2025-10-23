/*
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".survey");
  const total = questions.length;
  let score = 0;

  // ✅ Correct answers (based on your (T) marks)
  const correctAnswers = {
    q1: "2",
    q2: "0",
    q3: "2",
    q4: "3",
    q5: "1",
    q6: "2",
    q7: "1",
    q8: "1",
    q9: "1",
    q10: "1"
  };

  // 🔹 Show questions one by one
  questions.forEach((section, index) => {
    const inputs = section.querySelectorAll("input[type=radio]");
    const progress = section.querySelector("progress");
    progress.value = (index / total) * 100;

    inputs.forEach(input => {
      input.addEventListener("change", () => {
        // check answer
        const name = input.name;
        if (input.value === correctAnswers[name]) {
          score++;
        }

        // hide current
        section.classList.add("no-display");

        // show next or popup
        if (questions[index + 1]) {
          questions[index + 1].classList.remove("no-display");
          questions[index + 1].querySelector("progress").value =
            ((index + 1) / total) * 100;
        } else {
          // survey finished → show popup
          document.querySelector(".popup").classList.remove("hide-popup");
        }
      });
    });
  });
});

//Form validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9]{10}$/;

// Input fields
let userName = document.getElementById("username");
let email = document.getElementById("useremail");
let phone = document.getElementById("userphone");

// Error messages
let errName = document.getElementById("errName");
let errEmail = document.getElementById("errEmail");
let errPhone = document.getElementById("errPhone");

// Submit button
let submitBtn = document.getElementById("submitBtn");

// validation function
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

// 🔹 Check if all fields valid → enable button
function checkFormValidity() {
  const isNameValid = validateField(userName, errName, v => v.length > 0, "Enter full name", "");
  const isEmailValid = validateField(email, errEmail, v => emailPattern.test(v), "Enter a valid email address", "");
  const isPhoneValid = validateField(phone, errPhone, v => phonePattern.test(v), "Enter a valid 10-digit phone number", "");

  submitBtn.disabled = !(isNameValid && isEmailValid && isPhoneValid);
}

// Attach validation
userName.addEventListener("blur", checkFormValidity);
email.addEventListener("blur", checkFormValidity);

phone.addEventListener("input", () => {
  phone.value = phone.value.replace(/[^0-9]/g, ""); // only digits
});
phone.addEventListener("blur", checkFormValidity);

// 🔹 Handle popup form submit
document.addEventListener("submit", e => {
  if (e.target && e.target.id === "userForm") {
    e.preventDefault();

    if (!submitBtn.disabled) {
      document.querySelector(".popup-container").innerHTML = `
        <h3>Thank you, ${userName.value}!</h3>
        <p>Your Score: ${score}/${total} (${Math.round((score/total)*100)}%)</p>
        <p>Redirecting...</p>
      `;

      setTimeout(() => {
        window.location.href = "nextpage.html"; // your redirect
      }, 2000);
    }
  }
});
*/


document.addEventListener("DOMContentLoaded", () => {
  // ---------- Survey ----------
  const questions = document.querySelectorAll(".survey");
  const total = questions.length;
  let score = 0;

  const correctAnswers = {
    q1: "2", q2: "0", q3: "2", q4: "3", q5: "1",
    q6: "2", q7: "1", q8: "1", q9: "1", q10: "1"
  };

  // Clear any pre-checked radios (browser restore)
  document.querySelectorAll('input[type="radio"]').forEach(r => {
    r.checked = false;
    r.removeAttribute('checked');
  });

  questions.forEach((section, index) => {
    const inputs = section.querySelectorAll("input[type=radio]");
    const progress = section.querySelector("progress");
    //progress.value = ((index + 1) /total ) * 100;
    progress.value = (index / total) * 100;

    inputs.forEach(input => {
      input.addEventListener("change", () => {
        // Count once per question
        if (!section.dataset.answered) {
          if (input.value === correctAnswers[input.name]) score++;
          section.dataset.answered = "true";
        }

        // move to next
        section.classList.add("no-display");

        if (questions[index + 1]) {
          const next = questions[index + 1];
          next.classList.remove("no-display");
          //next.querySelectorAll('input[type="radio"]').forEach(r => (r.checked = false));
          next.querySelector("progress").value = ((index + 1) / total) * 100;
        } else {
          document.querySelector(".popup").classList.remove("hide-popup");
        }
      });
    });
  });

  // ---------- Form validation (now inside DOMContentLoaded) ----------
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10}$/;

  
  const userName = document.getElementById("username");
  const email = document.getElementById("useremail");
  const phone = document.getElementById("userphone");

  const errName = document.getElementById("errName");
  const errEmail = document.getElementById("errEmail");
  let errPhone = document.getElementById("errPhone");

  const submitBtn = document.getElementById("submitBtn");
  const userForm = document.getElementById("userForm");

  // create errPhone if missing
  if (!errPhone && phone) {
    errPhone = document.createElement("p");
    errPhone.id = "errPhone";
    errPhone.className = "error";
    phone.parentNode.appendChild(errPhone);
  }

  function validateField(input, errorElement, validFn, errorMsg, validMsg = "") {
    const value = (input.value || "").trim();
    const formGroup = input.closest(".form-group"); // get parent form-group
    if (value === "" || !validFn(value)) {
      errorElement.innerText = errorMsg;
      errorElement.classList.remove("valid","bi-check-circle-fill");
      errorElement.classList.add("error");
      errorElement.style.display = "block";
      if (formGroup) {
      formGroup.classList.remove("validGroup");
      formGroup.classList.add("invalidGroup");
    }
      return false;
    } else {
      errorElement.innerText = validMsg;
      errorElement.classList.remove("error");
      errorElement.classList.add("valid","bi-check-circle-fill");
      errorElement.style.display = "block";
      if (formGroup) {
      formGroup.classList.remove("invalidGroup");
      formGroup.classList.add("validGroup");
    }
      return true;
    }
  }

  function checkFormValidity() {
    const isNameValid = validateField(userName, errName, v => v.length > 0, "Enter full name");
    const isEmailValid = validateField(email, errEmail, v => emailPattern.test(v), "Enter a valid email address");
    const isPhoneValid = validateField(phone, errPhone, v => phonePattern.test(v), "Enter a valid 10-digit phone number");

    submitBtn.disabled = !(isNameValid && isEmailValid && isPhoneValid);
    return submitBtn.disabled === false;
  }

  // Live validation (updates as user types)
  userName.addEventListener("input", checkFormValidity);
  email.addEventListener("input", checkFormValidity);
  phone.addEventListener("input", () => {
    phone.value = phone.value.replace(/[^0-9]/g, "");
    checkFormValidity();
  });

  // ---------- Submit handler (attached to the form so it definitely captures the event) ----------
  if (userForm) {
    userForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // final validation check
      if (!checkFormValidity()) return; // button shouldn't be clickable otherwise

      // Optional: debug logs
      //console.log("Submitting form. score=", score, "total=", total);

      // Show thank-you and score inside popup container
      const popupContainer = document.querySelector(".popup-container");
      popupContainer.innerHTML = `
        <h3>Thank you, ${userName.value}!</h3>
        <p>Your Score: ${score}/${total} (${Math.round((score/total)*100)})</p>
        <p>Redirecting...</p>
      `;

      setTimeout(() => {
        window.location.href = "./product.html";
      }, 2000);
    });
  } else {
    console.warn("No #userForm found in DOM.");
  }
}); // end DOMContentLoaded



////////////Spot remaining Counter/////////////////////////
const counters = document.getElementsByClassName('counter'); 

// Loop through all counters
for (let i = 0; i < counters.length; i++) {
  let el = counters[i];
  let value = parseInt(el.textContent, 10);

  // Separate interval for each counter
  const intervalId = setInterval(() => {
    value = Math.max(0, value - 1);
    el.textContent = value;
    if (value === 0) clearInterval(intervalId);
  }, 180000); // every 3munites
}





//////////////Product slider/////////////////
let scrollcontainer = document.querySelector(".slider-container");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let slides = document.querySelectorAll(".slide-item");
let navContainer = document.getElementById("sliderNav");

let currentIndex = 0;
const intervalTime = 2000;
let autoSlide;
let navDots = [];

// --- Clone all slides ONCE (append to the end) ---
let originalCount = slides.length;
slides.forEach(slide => {
    let clone = slide.cloneNode(true);
    scrollcontainer.appendChild(clone);
});

// update slide list (now doubled)
slides = document.querySelectorAll(".slide-item");

// --- Navigation Dots (only for original slides) ---
for (let i = 0; i < originalCount; i++) {
    let dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        goToSlide(i);
        resetAutoSlide();
    });
    navContainer.appendChild(dot);
    navDots.push(dot);
}


// get slide width dynamically (always 1 slide at a time)
function getScrollAmount() {
    let slideItem = document.querySelector(".slide-item");
    if (!slideItem) return 0;
    let style = window.getComputedStyle(slideItem);
    let gap = parseInt(style.marginRight) || 0;
    return slideItem.offsetWidth + gap; // only 1 slide width
}

// go to a slide index
function goToSlide(index, smooth = true) {
    scrollcontainer.style.scrollBehavior = smooth ? "smooth" : "auto";
    scrollcontainer.scrollLeft = index * getScrollAmount();
    currentIndex = index;
    updateDots();
}

// update navigation dots
function updateDots() {
    navDots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === (currentIndex % originalCount));
    });
}

// check & reset if reaching cloned slides
function checkReset() {
    if (currentIndex >= slides.length - originalCount) {
        // reached cloned set → jump back silently to same index in original set
        goToSlide(currentIndex % originalCount, false);
    }
    if (currentIndex < 0) {
        // if going backwards past first → jump to last original
        goToSlide(originalCount - 1, false);
    }
}

// next / back buttons
nextBtn.addEventListener("click", () => {
    currentIndex++;
    goToSlide(currentIndex);
    checkReset();
    resetAutoSlide();
});
backBtn.addEventListener("click", () => {
    currentIndex--;
    goToSlide(currentIndex);
    checkReset();
    resetAutoSlide();
});

// auto slide
function startAutoSlide() {
    autoSlide = setInterval(() => {
        currentIndex++;
        goToSlide(currentIndex);
        checkReset();
    }, intervalTime);
}
function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

// start carousel
goToSlide(0, false); // start at first slide (no animation)

 // number of slides per view depends on screen size
    let slidesPerView = window.innerWidth <= 575 ? 2 : 4;
startAutoSlide();






////////////////////FAQ Accordion//////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq-container");

  faqs.forEach(faq => {
    faq.querySelector(".faq-question").addEventListener("click", () => {
      // Close all others
      faqs.forEach(item => {
        if (item !== faq) {
          item.classList.remove("accordion-open");
          item.querySelector(".bi").classList.replace("bi-dash", "bi-plus");
        }
      });

      // Always open the clicked one
      faq.classList.add("accordion-open");
      faq.querySelector(".bi").classList.replace("bi-plus", "bi-dash");
    });
  });
});











