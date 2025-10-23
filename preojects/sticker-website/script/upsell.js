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
  }, 120000); // every 2munites
}



/*****************Upsell popup***********************/

function openUpSellPop() {
  let popWrapper = document.querySelector(".pop-wrapper");
  let upsellPopup = document.querySelector(".upsell-popup");
  let downsellPopup = document.querySelector(".downsell-popup");
  
  

  popWrapper.classList.add("open");
  upsellPopup.classList.add("show");
   downsellPopup.classList.remove("show");
}

function closeUpSellPop() {
  let popWrapper = document.querySelector(".pop-wrapper");
  let upsellPopup = document.querySelector(".upsell-popup");
 

  popWrapper.classList.remove("open");
  upsellPopup.classList.remove("show");

}

/********************Down sell popup*************************** */

function openDownSellPop() {
  let popWrapper = document.querySelector(".pop-wrapper");
  let downsellPopup = document.querySelector(".downsell-popup");
  let upsellPopup = document.querySelector(".upsell-popup");

  upsellPopup.classList.remove("show");
  popWrapper.classList.add("open");
  downsellPopup.classList.add("show");

}

function closeDownsellPop(){
  let popWrapper = document.querySelector(".pop-wrapper");
  let downsellPopup = document.querySelector(".downsell-popup");

  popWrapper.classList.remove("open");
  downsellPopup.classList.add("show");
}

/***************Print out bill********************* */
function printPage() {
  window.print();
}


