// scroll to fixed header
$(document).ready(function () {
	$( window ).scroll(function() {
		var height = $(window).scrollTop();
		if(height >= 150) {
            $('#backTop').addClass('bt-visable');
		} else {
            $('#backTop').removeClass('bt-visable');
		}
	});
});      
     
$(document).ready(function () {
	var removeClass = true;
	$(".fltPill").click(function(){ 
        $(this).hide('.fltPill');
    });
});


$(document).ready(function () {
	$(".btnExpandProdFilter").click(function(){ 
        $(".filter-body").toggleClass('expand');
    });
});






//Range Slider Max Min Price Js
(function() {
 
	var parent = document.querySelector(".price-slider");
	if(!parent) return;
   
	var
	  rangeS = parent.querySelectorAll("input[type=range]"),
	  numberS = parent.querySelectorAll("input[type=number]");
   
	rangeS.forEach(function(el) {
	  el.oninput = function() {
		var slide1 = parseFloat(rangeS[0].value),
		   slide2 = parseFloat(rangeS[1].value);
   
		if (slide1 > slide2) {
   [slide1, slide2] = [slide2, slide1];
		}
   
		numberS[0].value = slide1;
		numberS[1].value = slide2;
	  }
	});
   
	numberS.forEach(function(el) {
	  el.oninput = function() {
   var number1 = parseFloat(numberS[0].value),
   number2 = parseFloat(numberS[1].value);
   
		if (number1 > number2) {
		  var tmp = number1;
		  numberS[0].value = number2;
		  numberS[1].value = tmp;
		}
   
		rangeS[0].value = number1;
		rangeS[1].value = number2;
   
	  }
	});
   
  })();

  $(function(){
	$('#Same_as_billing_address').on('click', function(){
		$('#shipping').toggleClass('d-block');
		});
  });


  ///////
  //click open menu
$(document).ready(function(){
    var removeClass = true;
    $(".ico-burger").click(function(){
        $(this).toggleClass('cross');
        $(".drawer").toggleClass("open");
        removeClass = false;
    });

    $(".drawer").click(function(){
        removeClass = false;
        
    });
    
    $("html").click(function(){
        if (removeClass){
            $(".ico-burger").removeClass("cross"); 
            $(".drawer").removeClass("open"); 
        }
        removeClass = true;
        removeClass = true;
    });
}); 




