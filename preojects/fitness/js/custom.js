window.onscroll = function() {backTotop()};  
function backTotop() {
 if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
  document.getElementById("backTop").className = "gotopbtn bt-visable";
  } else {
    document.getElementById("backTop").className = "gotopbtn";
 }
}; 