jQuery(document).ready(function () {
  // Default Slider //
  var dslider = jQuery('.default-slider');
  dslider.slick({
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    dots: true,
    arrows: true,
    draggable: true,
    touchThreshold: 200,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '119px',
     responsive: [{
      breakpoint: 768,
      settings: {
        centerPadding: '19px',
      }
    }],
    appendArrows: jQuery('.custom_arrows_default'),
    prevArrow: '<div class="custom_arrow custom_arrow_dir_left"></div>',
    nextArrow: '<div class="custom_arrow custom_arrow_dir_right"></div>',
    appendDots: jQuery('.custom_dots_default'),
    customPaging: function (dslider, i) {
      var thumb = jQuery(dslider.$slides[i]).data();

      return '0' + (i + 1);
    },
    dotsClass: 'custom_dots_list',
  });


  function slideGos(dir) {
    var dslider = jQuery('.default-slider');
    if (dir === "+") {
      dslider.slick('slickNext');
    } else if (dir === "-") {
      dslider.slick('slickPrev');
    }
  }



// world class Slider //
  var wcslider = jQuery('.wc-team-slider');
  wcslider.slick({
    autoplay: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    draggable: true,
    touchThreshold: 200,
	variableWidth: true,
    focusOnSelect: true,
     responsive: [{
     breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        infinite: true,
        centerMode: true,
      }
    }],
    appendArrows: jQuery('.custom_arrows_wc'),
    prevArrow: '<div class="custom_arrow custom_arrow_dir_left"></div>',
    nextArrow: '<div class="custom_arrow custom_arrow_dir_right"></div>',
    appendDots: jQuery('.custom_dots_wc'),
    customPaging: function (wcslider, i) {
      var thumb = jQuery(wcslider.$slides[i]).data();

      return '0' + (i + 1);
    },
    dotsClass: 'custom_dots_list',
  });


  function slideGos(dir) {
    var wcslider = jQuery('.wc-team-slider');
    if (dir === "+") {
      wcslider.slick('slickNext');
    } else if (dir === "-") {
      wcslider.slick('slickPrev');
    }
  }
	

	//Apn Slider //
var apnslider = jQuery('.apn-center-slider');
apnslider.slick({
  touchMove: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  arrows: true,
   infinite:true,
  draggable: true,
  centerMode:true,
  centerPadding:'0',
  touchThreshold: 200,
  swipeToSlide: true,
  focusOnSelect: true,
  variableWidth: true,
  appendArrows: jQuery('.custom_arrows_ac'),
  prevArrow: '<div class="custom_arrow custom_arrow_dir_left"></div>',
  nextArrow: '<div class="custom_arrow custom_arrow_dir_right"></div>',
  dots: true,
  appendDots: jQuery('.custom_dots_ac'),
  customPaging: function (apnslider, i) {
    var thumb = jQuery(apnslider.$slides[i]).data();

    return '0' + (i + 1);
  },
  dotsClass: 'custom_dots_list',
});


function slideGo(dir) {
  var apnslider = jQuery('.activities-slider');
  if (dir === "+") {
    apnslider.slick('slickNext');
  } else if (dir === "-") {
    apnslider.slick('slickPrev');
  }
}

	
	// Activities Slider //
var slider = jQuery('.activities-slider');
slider.slick({
  touchMove: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  arrows: true,
  infinite:true,
  draggable: true,
  centerMode:true,
  centerPadding:'0',
  touchThreshold: 200,
  swipeToSlide: true,
  focusOnSelect: true,
  variableWidth: true,
  appendArrows: jQuery('.custom_arrows'),
  prevArrow: '<div class="custom_arrow custom_arrow_dir_left"></div>',
  nextArrow: '<div class="custom_arrow custom_arrow_dir_right"></div>',
  dots: true,
  appendDots: jQuery('.custom_dots'),
  customPaging: function (slider, i) {
    var thumb = jQuery(slider.$slides[i]).data();

    return '0' + (i + 1);
  },
  dotsClass: 'custom_dots_list',
});


function slideGo(dir) {
  var slider = jQuery('.activities-slider');
  if (dir === "+") {
    slider.slick('slickNext');
  } else if (dir === "-") {
    slider.slick('slickPrev');
  }
}
	
	
	// All Walks //
var walks = jQuery('.all-walks-slider');
walks.slick({
  touchMove: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  arrows: true,
  infinite:true,
  draggable: true,
  centerMode:true,
  centerPadding:'0',
  touchThreshold: 200,
  swipeToSlide: true,
  focusOnSelect: true,
  variableWidth: true,
  appendArrows: jQuery('.custom_arrows'),
  prevArrow: '<div class="custom_arrow custom_arrow_dir_left"></div>',
  nextArrow: '<div class="custom_arrow custom_arrow_dir_right"></div>',
  dots: true,
  appendDots: jQuery('.custom_dots'),
  customPaging: function (walks, i) {
    var thumb = jQuery(walks.$slides[i]).data();

    return '0' + (i + 1);
  },
  dotsClass: 'custom_dots_list',
});


function slideGo(dir) {
  var walks = jQuery('.all-walks-slider');
  if (dir === "+") {
    walks.slick('slickNext');
  } else if (dir === "-") {
    walks.slick('slickPrev');
  }
}
	
	
	//Testimonail Slider //
var testimonialslider = jQuery('.testimonial-slider');
testimonialslider.slick({
  touchMove: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
   infinite:true,
  draggable: true,
  centerMode:true,
  centerPadding:'0',
  touchThreshold: 200,
	variableWidth: true,
  swipeToSlide: true,
  focusOnSelect: true,
	
  appendArrows: jQuery('.custom_arrows_author'),
  prevArrow: '<div class="custom_arrow custom_arrow_dir_left"></div>',
  nextArrow: '<div class="custom_arrow custom_arrow_dir_right"></div>',
  dots: true,
  appendDots: jQuery('.custom_dots_author'),
  customPaging: function (testimonialslider, i) {
    var thumb = jQuery(testimonialslider.$slides[i]).data();

    return '0' + (i + 1);
  },
  dotsClass: 'custom_dots_list',
});


function slideGo(dir) {
  var testimonialslider = jQuery('.testimonial-slider');
  if (dir === "+") {
    testimonialslider.slick('slickNext');
  } else if (dir === "-") {
    testimonialslider.slick('slickPrev');
  }
}
	
	// Partners Slider //
if (jQuery(window).width() >= 768) {
var logoslider = jQuery('.partners-slider');
logoslider.slick({
  touchMove: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  infinite:true,
  draggable: true,
  centerMode:true,
  centerPadding:'0',
  touchThreshold: 200,
  swipeToSlide: true,
  focusOnSelect: true,
  variableWidth: true,
  appendArrows: jQuery('.custom_arrows_logo'),
  prevArrow: '<div class="custom_arrow custom_arrow_dir_left"></div>',
  nextArrow: '<div class="custom_arrow custom_arrow_dir_right"></div>',
  dots: true,
  appendDots: jQuery('.custom_dots_logo'),
  customPaging: function (logoslider, i) {
    var thumb = jQuery(logoslider.$slides[i]).data();

    return '0' + (i + 1);
  },
  dotsClass: 'custom_dots_list',
});


function slideGo(dir) {
  var logoslider = jQuery('.partners-slider');
  if (dir === "+") {
    logoslider.slick('slickNext');
  } else if (dir === "-") {
    logoslider.slick('slickPrev');
  }
}
}	
	
/* Stories Slider */
  jQuery('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    variableWidth: true,
    draggable: true,
    touchThreshold: 200,
    swipeToSlide: true,
    speed: 1500,
    infinite: false,
    prevArrow: '<span class="slick-arrow prev-arrow fa-sharp fa-light fa-arrow-left-long flex flex-center"></span>',
    nextArrow: '<span class="slick-arrow next-arrow fa-sharp fa-light fa-arrow-right-long flex flex-center"></span>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          fade: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: true,
          variableWidth: false,
        }
      },
    ]
  });


  jQuery('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    arrows: true,
    asNavFor: '.slider-nav',
    draggable: true,
    touchThreshold: 200,
    swipeToSlide: true,
    infinite: false,
    prevArrow: '<span class="slick-arrow prev-arrow fa-sharp fa-light fa-arrow-left-long flex flex-center"></span>',
    nextArrow: '<span class="slick-arrow next-arrow fa-sharp fa-light fa-arrow-right-long flex flex-center"></span>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }, ]
  });


  /* End of Stories Slider */	

});
