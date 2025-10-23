var Typer = function(element) {
    this.element = element;
    var delim = element.dataset.delim || ",";
    var words = element.dataset.words || "override these,sample typing";
    this.words = words.split(delim).filter((v) => v); // non empty words
    this.delay = element.dataset.delay || 200;
    this.loop = element.dataset.loop || "true";
    if (this.loop === "false" ) { this.loop = 1 }
    this.deleteDelay = element.dataset.deletedelay || element.dataset.deleteDelay || 800;
  
    this.progress = { word: 0, char: 0, building: true, looped: 0 };
    this.typing = true;
  
    var colors = element.dataset.colors || "black";
    this.colors = colors.split(",");
    this.element.style.color = this.colors[0];
    this.colorIndex = 0;
  
    this.doTyping();
  };
  
  Typer.prototype.start = function() {
    if (!this.typing) {
      this.typing = true;
      this.doTyping();
    }
  };
  Typer.prototype.stop = function() {
    this.typing = false;
  };
  Typer.prototype.doTyping = function() {
    var e = this.element;
    var p = this.progress;
    var w = p.word;
    var c = p.char;
    var currentDisplay = [...this.words[w]].slice(0, c).join("");
    var atWordEnd;
    if (this.cursor) {
      this.cursor.element.style.opacity = "1";
      this.cursor.on = true;
      clearInterval(this.cursor.interval);
      this.cursor.interval = setInterval(() => this.cursor.updateBlinkState(), 400);
    }
  
    e.innerHTML = currentDisplay;
  
    if (p.building) {
      atWordEnd = p.char === this.words[w].length;
      if (atWordEnd) {
        p.building = false;
      } else {
        p.char += 1;
      }
    } else {
      if (p.char === 0) {
        p.building = true;
        p.word = (p.word + 1) % this.words.length;
        this.colorIndex = (this.colorIndex + 1) % this.colors.length;
        this.element.style.color = this.colors[this.colorIndex];
      } else {
        p.char -= 1;
      }
    }
  
    if (p.word === this.words.length - 1) {
      p.looped += 1;
    }
  
    if (!p.building && this.loop <= p.looped){
      this.typing = false;
    }
  
    setTimeout(() => {
      if (this.typing) { this.doTyping() };
    }, atWordEnd ? this.deleteDelay : this.delay);
  };
  
  var Cursor = function(element) {
    this.element = element;
    this.cursorDisplay = element.dataset.cursordisplay || element.dataset.cursorDisplay || "_";
    element.innerHTML = this.cursorDisplay;
    this.on = true;
    element.style.transition = "all 0.1s";
    this.interval = setInterval(() => this.updateBlinkState(), 400);
  }
  Cursor.prototype.updateBlinkState = function() {
    if (this.on) {
      this.element.style.opacity = "0";
      this.on = false;
    } else {
      this.element.style.opacity = "1";
      this.on = true;
    }
  }
  
  function TyperSetup() {
    var typers = {};
    for (let e of document.getElementsByClassName("typer")) {
      typers[e.id] = new Typer(e);
    }
    for (let e of document.getElementsByClassName("typer-stop")) {
      let owner = typers[e.dataset.owner];
      e.onclick = () => owner.stop();
    }
    for (let e of document.getElementsByClassName("typer-start")) {
      let owner = typers[e.dataset.owner];
      e.onclick = () => owner.start();
    }
    for (let e of document.getElementsByClassName("cursor")) {
      let t = new Cursor(e);
      t.owner = typers[e.dataset.owner];
      t.owner.cursor = t;
    }
  }
  
  TyperSetup();






  $(document).ready(function () {
    $('.mob-mnu-ic, ul.mobilemenu li a').click(function (e) {
      $('.mobilemenu').slideToggle();
      $('.dl-trigger').toggleClass('dl-active');
    });

    // $('.s1-mid-row').slick({
    // 	dots: true,
    // 	arrows: false,
    // 	speed: 300,
    // 	slidesToShow: 1,
    // 	slidesToScroll: 1,
    // 	responsive: [
    // 		{
    // 			breakpoint: 9999,
    // 			settings: 'unslick',
    // 		},
    // 		{
    // 			breakpoint: 767,
    // 			settings: {
    // 				arrows: true,
    // 				slidesToShow: 1,
    // 				slidesToScroll: 1,
    // 			},
    // 		},
    // 	],
    // });
    $('.s7-testiBx').slick({
      dots: true,
      arrows: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      autoplay: true,

      responsive: [
        {
          breakpoint: 1548,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1263,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 872,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });

    $('.join').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.accordion').accordion({
      defaultOpen: 'hd-one',
      speed: 'slow',
    });

    $('.topMenu').scroller();

    $('.video-img1').click(function (e) {
      $(this).hide();
      $(this).next('.vdo-overlay').fadeIn();
      $('#myVdo').show().get(0).play();
      $('#myVdo').closest('.s1-mid-col').find('.s1-col-cont').hide();
    });

    $('.video-img2').click(function (e) {
      $(this).hide();
      $(this).next('.vdo-overlay').fadeIn();
      $('#myVdo-2').show().get(0).play();
      $('#myVdo-2').closest('.s1-mid-col').find('.s1-col-cont').hide();
    });

    $('.video-img3').click(function (e) {
      $(this).hide();
      $(this).next('.vdo-overlay').fadeIn();
      $('#myVdo-3').show().get(0).play();
      $('#myVdo-3').closest('.s1-mid-col').find('.s1-col-cont').hide();
    });

    $('.vdo-overlay').click(function (e) {
      $(this).fadeOut();
      $(this).closest('.s1-mid-col').find('video').hide();
      $(this).closest('.s1-mid-col').find('.s1-video-img').show();
      $(this).closest('.s1-mid-col').find('.s1-col-cont').show();
      $('video').each(function (index, item) {
        $(item).get(0).pause();
      });
    });

    $('.video-img4').click(function (e) {
      $(this).hide();
      $('#myVdo-4').show().get(0).play();
    });
  });


  $(document).ready(function () {
		$('.mob-mnu-ic').click(function (e) {
			//$('.mobilemenu').slideToggle();
			$('.mobilemenu').toggleClass('act');
		});

		// $('.s1-mid-row').slick({
		// 	dots: true,
		// 	arrows: false,
		// 	speed: 300,
		// 	slidesToShow: 1,
		// 	slidesToScroll: 1,
		// 	responsive: [
		// 		{
		// 			breakpoint: 9999,
		// 			settings: 'unslick',
		// 		},
		// 		{
		// 			breakpoint: 767,
		// 			settings: {
		// 				arrows: true,
		// 				slidesToShow: 1,
		// 				slidesToScroll: 1,
		// 			},
		// 		},
		// 	],
		// });
		$('.s7-testiBx').slick({
			dots: true,
			arrows: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true,
			autoplay: true,

			responsive: [
				{
					breakpoint: 1548,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 1263,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 872,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},

				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
					},
				},
			],
		});

		// $('.join').slick({
		// 	dots: true,
		// 	arrows: false,
		// 	speed: 300,
		// 	slidesToShow: 2,
		// 	slidesToScroll: 1,
		// 	centerMode: true,
		// 	variableWidth: true,
		// 	autoplay: true,

		// 	responsive: [
		// 		{
		// 			breakpoint: 1548,
		// 			settings: {
		// 				slidesToShow: 2,
		// 				slidesToScroll: 1,
		// 			},
		// 		},
		// 		{
		// 			breakpoint: 1263,
		// 			settings: {
		// 				slidesToShow: 1,
		// 				slidesToScroll: 1,
		// 			},
		// 		},
		// 		{
		// 			breakpoint: 872,
		// 			settings: {
		// 				slidesToShow: 2,
		// 				slidesToScroll: 1,
		// 			},
		// 		},

		// 		{
		// 			breakpoint: 767,
		// 			settings: {
		// 				slidesToShow: 2,
		// 				slidesToScroll: 1,
		// 				dots: true,
		// 			},
		// 		},
		// 	],
		// });

		// $('.join').slick({
		// 	  dots: true,
		// 	  infinite: false,
		// 	  speed: 300,
		// 	  slidesToShow: 3,
		// 	  slidesToScroll: 1,
		//   responsive: [
		// 	{
		// 	  breakpoint: 1024,
		// 	  settings: {
		// 		slidesToShow: 3,
		// 		slidesToScroll: 1,
		// 		infinite: true,
		// 		dots: true
		// 	  }
		// 	},
		// 	{
		// 	  breakpoint: 768,
		// 	  settings: {
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1,
		// 		infinite: true,
		// 		dots: true
		// 	  }
		// 	},
		// 	{
		// 	  breakpoint: 480,
		// 	  settings: {
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1
		// 	  }
		// 	}
		// 	// You can unslick at a given breakpoint now by adding:
		// 	// settings: "unslick"
		// 	// instead of a settings object
		//   ]
		// });

		$('.accordion').accordion({
			defaultOpen: 'hd-one',
			speed: 'slow',
		});

		$('.topMenu').scroller();

		$('.video-img1').click(function (e) {
			$(this).hide();
			$(this).next('.vdo-overlay').fadeIn();
			$('#myVdo').show().get(0).play();
			$('#myVdo').closest('.s1-mid-col').find('.s1-col-cont').hide();
		});

		$('.video-img2').click(function (e) {
			$(this).hide();
			$(this).next('.vdo-overlay').fadeIn();
			$('#myVdo-2').show().get(0).play();
			$('#myVdo-2').closest('.s1-mid-col').find('.s1-col-cont').hide();
		});

		$('.video-img3').click(function (e) {
			$(this).hide();
			$(this).next('.vdo-overlay').fadeIn();
			$('#myVdo-3').show().get(0).play();
			$('#myVdo-3').closest('.s1-mid-col').find('.s1-col-cont').hide();
		});

		$('.vdo-overlay').click(function (e) {
			$(this).fadeOut();
			$(this).closest('.s1-mid-col').find('video').hide();
			$(this).closest('.s1-mid-col').find('.s1-video-img').show();
			$(this).closest('.s1-mid-col').find('.s1-col-cont').show();
			$('video').each(function (index, item) {
				$(item).get(0).pause();
			});
		});

		$('.video-img4').click(function (e) {
			$(this).hide();
			$('#myVdo-4').show().get(0).play();
		});
	});

  $(document).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('.top-fix-bar').addClass('fixed-nav');
    } else {
      $('.top-fix-bar').removeClass('fixed-nav');
    }

    if ($(this).scrollTop() > 10) {
      $('.mobilemenu').addClass('mobimenu-top');
    } else {
      $('.mobilemenu').removeClass('mobimenu-top');
    }

    var $elem = $('.footer');
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    if (elemTop >= docViewBottom + 20 || elemTop + $('#ctabtn-mob').height() >= docViewBottom + 134) {
      $('#ctabtn-mob').css('position', 'fixed');
    } else {
      $('#ctabtn-mob').css({ position: 'relative' });
    }
  });