///////////////Spot Held For riverse timer////////////////////
//-----------Revirse counte----------------------//
let totalSeconds = 5 * 60;  

let timeCounter = document.getElementById("timeCounter");

function updateTimer() {
  if (totalSeconds >= 0) {
    // convert seconds → h:m:s
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    // format with leading zeros
    //let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");

    // timeCounter instead of displayTime
    //timeCounter.innerHTML = `${h} : ${m} : ${s}`;
    timeCounter.innerHTML = ` ${m} : ${s}`;

    totalSeconds--; // decrease time
  } else {
    clearInterval(revTimer); // stop countdown
    timeCounter.innerHTML = "Time's up!";
  }
}

// setInterval after the function
let revTimer = setInterval(updateTimer, 1000);
updateTimer(); // run once immediately

document.addEventListener("DOMContentLoaded", () => {
  let chooseStk = document.getElementsByClassName("stikerBox");

  // Map stickerBox to bundle item in cart
  const itemMap = {
    "stk_1": "addOneStk",
    "stk_3": "addThreeStk",
    "stk_5": "addFiveStk"
  };

  // Get Total element
  const totalEl = document.querySelector("#total");

  // 🔹 function to calculate total
  function updateTotal() {
    let total = 0;

    document.querySelectorAll(".itm-cart.active-item").forEach(item => {
      const priceEl = item.querySelector(".ico-text");
      const qtyEl = item.querySelector(".qty");

      if (priceEl) {
        const unitPrice = parseFloat(priceEl.textContent.replace(/[^\d.]/g, "")) || 0;
        const qty = qtyEl ? parseInt(qtyEl.textContent, 10) : 1;
        total += unitPrice * qty;
      }
    });

    totalEl.innerHTML = `<i class="bi bi-currency-dollar"></i>${total.toFixed(2)}`;
  }

  // ✅ Set default active (Three Stickers)
  document.getElementById("stk_3").classList.add("add-sticker");
  document.getElementById("addThreeStk").classList.add("active-item");

  // 🔹 Sticker bundle select
  for (let i = 0; i < chooseStk.length; i++) {
    chooseStk[i].addEventListener("click", function () {
      if (this.classList.contains("add-sticker")) return;

      // Remove selection
      for (let j = 0; j < chooseStk.length; j++) {
        chooseStk[j].classList.remove("add-sticker");
      }
     ["addOneStk", "addThreeStk", "addFiveStk"].forEach(id => {
      document.getElementById(id).classList.remove("active-item");
    });

      // Add selection
      this.classList.add("add-sticker");
      let targetId = itemMap[this.id];
      if (targetId) {
        document.getElementById(targetId).classList.add("active-item");
      }
      updateTotal();
    });
  }

  /******************** Limited Edition Stickers *************************** */
  let addLimitedStk = document.querySelector("addLimitedStk");
  let limited_stk = document.getElementById("limited_stk");

  limited_stk.addEventListener('change', function() {
    if (this.checked) {
      addLimitedStk.classList.add('active-item');
    } else {
      addLimitedStk.classList.remove('active-item');
    }
    updateTotal();
  });

  /******************** Upgrade Stickers *************************** */
  let waterProofStk = document.getElementById("upgradeStk");
  let waterProof = document.getElementById("waterProof");

  waterProof.addEventListener('change', function(){
    if (this.checked){
      waterProofStk.classList.add('active-item');
    } else {
      waterProofStk.classList.remove('active-item'); // ✅ fixed
    }
    updateTotal();
  });

/////////////////////Shipping Address///////////////////////
let shippingAddress = document.querySelector(".shipping-address");
let billingAddress = document.getElementById("cus_check");

billingAddress.addEventListener("change", function () {
  let inputs = shippingAddress.querySelectorAll("input, select");

  if (this.checked) {
    // Same address → hide and disable fields
    shippingAddress.classList.remove("showShipping");
    inputs.forEach(el => el.disabled = true);
  } else {
    // Different address → show and enable fields
    shippingAddress.classList.add("showShipping");
    inputs.forEach(el => el.disabled = false);
  }
});





  /******************** Journey Package Protection *************************** */
  let stkSafety = document.getElementById("stkSafety");
  let stkProtection = document.getElementById("switch");

  stkProtection.addEventListener('change', function(){
    if(this.checked){
      stkSafety.classList.add('active-item');
    } else {
      stkSafety.classList.remove('active-item');
    }
    updateTotal();
  });

  // 🔹 attach plus/minus events
  document.querySelectorAll(".itm-cart").forEach(item => {
    const plusBtn = item.querySelector(".plus");
    const minusBtn = item.querySelector(".minus");
    const qtyEl = item.querySelector(".qty");

    if (plusBtn && minusBtn && qtyEl) {
      plusBtn.addEventListener("click", () => {
        let qty = parseInt(qtyEl.textContent, 10) || 1;
        qty++;
        qtyEl.textContent = qty;
        updateTotal();
      });

      minusBtn.addEventListener("click", () => {
        let qty = parseInt(qtyEl.textContent, 10) || 1;
        if (qty > 1) qty--;
        qtyEl.textContent = qty;
        updateTotal();
      });
    }
  });

  // 🔹 Initial total
  updateTotal();
});






 /******************** Checkout form Validation *************************** */
      // Validation rules
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // valida te email pattern
const phonePattern = /^[0-9]{10}$/; // valida te phone number 
const zipPattern = /^\d{6}$/; // valida te ZIP number

// Input fields
let cusFName = document.getElementById("cus_fName");
let cusLName = document.getElementById("cus_lName");
let cusEmail = document.getElementById("cus_email");
let cusPhone = document.getElementById("cus_phone");
let cusAddress = document.getElementById("cus_address");
let cusCity = document.getElementById("cus_city");
let cusState = document.getElementById("cus_state");
let cusZip = document.getElementById("cus_zip");
let shipCusFName = document.getElementById("shipCus_fName");
let shipCusLName = document.getElementById("shipCus_lName");
let shipCusCountry = document.getElementById("shipCus_country");
let shipCusAddress = document.getElementById("shipCus_address");
let shipCusCity = document.getElementById("shipCus_city");
let shipCusState = document.getElementById("shipCus_state");
let shipCusZip = document.getElementById("shipCus_zip");

// Error messages
let errFName = document.getElementById("errFName");
let errLName = document.getElementById("errLName");
let errEmail = document.getElementById("errEmail");
let errPhone = document.getElementById("errPhone");
let errAddress = document.getElementById("errAddress");
let errCity = document.getElementById("errCity");
let errState = document.getElementById("errState");
let errZip = document.getElementById("errZip");
let errShipCusFname = document.getElementById("errShipCusFname");
let errShipCusLname = document.getElementById("errShipCusLname");
let errShipContry = document.getElementById("errShipContry");
let errShipAddress = document.getElementById("errShipAddress");
let errShipCity = document.getElementById("errShipCity");
let errShipState = document.getElementById("errShipState");
let errShipZip = document.getElementById("errShipZip");

// Reusable validate function
function validateField(input, errorElement, validFn, errorMsg, validMsg = "") {
    let value = input.value.trim();

    if (value === "" || !validFn(value)) {
        errorElement.innerText = errorMsg;
        errorElement.classList.remove("valid", "bi-check-circle-fill");
        errorElement.classList.add("error");
        errorElement.style.display = "block";
        return false;
    } else {
        errorElement.innerText = validMsg; // usually ""
        errorElement.classList.remove("error");
        errorElement.classList.add("valid", "bi", "bi-check-circle-fill");
        errorElement.style.display = validMsg ? "block" : "none";  // hide if no validMsg
        return true;
    }
}


// Attach validation on blur (exit field)
cusFName.addEventListener("blur", () => {
    validateField(cusFName, errFName, v => v.length > 0, "Enter first name", "");
});
cusLName.addEventListener("blur", () => {
    validateField(cusLName, errLName, v => v.length > 0, "Enter last name", "");
});

cusEmail.addEventListener("blur", () => {
  validateField(cusEmail, errEmail, v => emailPattern.test(v), "Enter a valid email address", "");
});

cusPhone.addEventListener("input", () => {
  cusPhone.value = cusPhone.value.replace(/[^0-9]/g, "");
});
cusPhone.addEventListener("blur", () => {
  validateField(cusPhone, errPhone, v => phonePattern.test(v), "Enter a valid 10-digit phone number", "");
});

cusAddress.addEventListener("blur", () => {
 validateField(cusAddress, errAddress, v => v.length > 0, "Enter address")
});

cusCity.addEventListener("blur", () => {
  validateField(cusCity, errCity, v=> v.length > 0, "Enter city name")
});

cusState.addEventListener("blur", () => {
  validateField(cusState, errState, v => v.length > 0, "Enter state")
});

cusZip.addEventListener("input", () => {
  cusZip.value = cusZip.value.replace(/\D/g, '').slice(0, 6);
});
// validate on blur
cusZip.addEventListener("blur", () => {
  validateField(cusZip, errZip, v => zipPattern.test(v), "Enter Zip code", "");
});

shipCusFName.addEventListener("blur", () => {
validateField(shipCusFName, errShipCusFname, v => v.length > 0, "Enter first name", "");
});

shipCusLName.addEventListener("blur", () => {
  validateField(shipCusLName, errShipCusLname, v => v.length > 0, "Enter lasr name", "");
});

shipCusCountry.addEventListener("blur", () => {
  validateField(shipCusCountry, errShipContry, v => v.length > 0, "Enter country name", "");
});

shipCusAddress.addEventListener("blur", () => {
 validateField(shipCusAddress, errShipAddress, v => v.length > 0, "Enter address", "");
});

shipCusCity.addEventListener("blur", () => {
  validateField(shipCusCity, errShipCity, v => v.length > 0, "Enter city name");
});

shipCusState.addEventListener("blur", () => {
  validateField(shipCusState, errShipState, v => v.length > 0, "Enter State")
})

shipCusZip
shipCusZip.addEventListener("input", () => {
  shipCusZip.value = shipCusZip.value.replace(/\D/g, '').slice(0, 6);
});
// validate on blur
shipCusZip.addEventListener("blur", () => {
  validateField(shipCusZip, errShipZip, v => zipPattern.test(v), "Enter Zip code", "");
});


document.addEventListener("DOMContentLoaded", () => {
  let billingAddress = document.getElementById("cus_check");
  let shippingAddress = document.querySelector(".shipping-address");

  billingAddress.addEventListener("change", function () {
    let inputs = shippingAddress.querySelectorAll("input, select");

    if (this.checked) {
      shippingAddress.classList.remove("showShipping");
      inputs.forEach(el => el.disabled = true);
    } else {
      shippingAddress.classList.add("showShipping");
      inputs.forEach(el => el.disabled = false);
    }
  });
});



/******************** Submit handler ***************************/
function checkout() {
  let checkoutForm = document.getElementById("checkout_form");
  let billingAddress = document.getElementById("cus_check");
  let isValid = true;

  

  // Billing fields
  isValid = validateField(cusFName, errFName, v => v.length > 0, "Enter first name") && isValid;
  isValid = validateField(cusLName, errLName, v => v.length > 0, "Enter last name") && isValid;
  isValid = validateField(cusEmail, errEmail, v => emailPattern.test(v), "Enter a valid email address") && isValid;
  isValid = validateField(cusPhone, errPhone, v => phonePattern.test(v), "Enter a valid 10-digit phone number") && isValid;
  isValid = validateField(cusAddress, errAddress, v => v.length > 0, "Enter address") && isValid;
  isValid = validateField(cusCity, errCity, v => v.length > 0, "Enter city name") && isValid;
  isValid = validateField(cusState, errState, v => v.length > 0, "Enter state") && isValid;
  isValid = validateField(cusZip, errZip, v => zipPattern.test(v), "Enter Zip code") && isValid;

  // Shipping fields only if checkbox is unchecked
  if (!billingAddress.checked) {
    isValid = validateField(shipCusFName, errShipCusFname, v => v.length > 0, "Enter first name") && isValid;
    isValid = validateField(shipCusLName, errShipCusLname, v => v.length > 0, "Enter last name") && isValid;
    isValid = validateField(shipCusCountry, errShipContry, v => v.length > 0, "Enter country name") && isValid;
    isValid = validateField(shipCusAddress, errShipAddress, v => v.length > 0, "Enter address") && isValid;
    isValid = validateField(shipCusCity, errShipCity, v => v.length > 0, "Enter city name") && isValid;
    isValid = validateField(shipCusState, errShipState, v => v.length > 0, "Enter state") && isValid;
    isValid = validateField(shipCusZip, errShipZip, v => zipPattern.test(v), "Enter Zip code") && isValid;
  }

  if (isValid) {
    //checkoutForm.submit(); // ✅ submit form only if valid
    window.location.href = "upsell-1.html";
  } else {
    alert("Please correct the highlighted errors before continuing.");
  }
}


/*************Bottom sheet******************** */

document.addEventListener("DOMContentLoaded", () => {
  let snakbar = document.querySelector(".snakbar");
  let members = document.querySelectorAll(".member");
  let currentIndex = 0;
  let interval = 20000; // 20 seconds each cycle

  function showSnackbar(index) {
    // Update content with current member
    let member = members[index].cloneNode(true);
    let ul = snakbar.querySelector(".dt-member");
    ul.innerHTML = "";
    ul.appendChild(member);

    // Show
    snakbar.classList.add("show");

    // Hide after 8 sec
    setTimeout(() => {
      snakbar.classList.remove("show");
    }, 8000); // visible time
  }

  function startCycle() {
    showSnackbar(currentIndex);

    currentIndex = (currentIndex + 1) % members.length; // loop
  }

  // Run every 5s (show 3s, hide 2s)
  startCycle();
  setInterval(startCycle, interval);
});


/******************exit popup offer****************** */
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('extTabPopup');
  if (!popup) return; // popup missing -> do nothing

  const closeBtn = popup.querySelector('.close-poup');
  const sessionKey = 'exitPopupShown_v1';

  // Don't run on touch devices (no cursor to top)
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  // If already shown this session, skip
  if (sessionStorage.getItem(sessionKey)) return;

  // Handler: fires when the pointer leaves the document/window
  function onMouseOut(e) {
    e = e || window.event;
    // Only trigger if leaving toward the top (clientY <= 0)
    if (e.clientY <= 0) {
      popup.classList.add('showExitPopup');
      sessionStorage.setItem(sessionKey, '1'); // mark shown for this session
      document.removeEventListener('mouseout', onMouseOut); // remove listener (cleanup)
    }
  }

  document.addEventListener('mouseout', onMouseOut);

  // Close button (safe guard if button missing)
  if (closeBtn) {
    closeBtn.addEventListener('click', function (ev) {
      ev.preventDefault();
      popup.classList.remove('showExitPopup');
    });
  }

  // Optional: close with Esc key
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') popup.classList.remove('showExitPopup');
  });
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



