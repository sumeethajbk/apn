jQuery(document).ready(function () {
  
  jQuery(".drophead").click(function () {
    jQuery(this).parent().toggleClass('active').find('.fs-bucket').slideToggle('medium');

  });
  if (jQuery(".default_main").length > 0) {
    jQuery(window).on("scroll", function () {
      var height = jQuery(".default-banner-section").outerHeight(true);
      var scroll = jQuery(this).scrollTop() + 150;
      if (scroll >= height) {
        jQuery(".default_main").addClass("active");
      } else {
        jQuery(".default_main").removeClass("active");
      }
    });
  }
	
	jQuery('.admission_popup').on('click', function(e) {
         e.preventDefault();
         jQuery('body').addClass('pull_right');
         jQuery('.connect_overlay_bg').addClass('active');
    
     });
jQuery('.connect_close').on('click', function() {
         jQuery('body').removeClass('pull_right');
         jQuery('.connect_overlay_bg').removeClass('active');
     });
	
	
	 /* Bottom Slide*/
jQuery('.insurance-module .button').on('click', function(e) {
         e.preventDefault();
         jQuery('body').addClass('pull_bottom');
         jQuery('.overlay_main_sec').addClass('active');
     });
jQuery('.connect_close').on('click', function() {
         jQuery('body').removeClass('pull_bottom');
         jQuery('.overlay_main_sec').removeClass('active');
     });    
	
	
	/* Bottom Video Slide*/
jQuery('.video-thumbnail .play-btn').on('click', function(e) {
         e.preventDefault();
         jQuery('body').addClass('pull_bottom');
         jQuery('.overlay_main_sec_video').addClass('active');
     });
jQuery('.connect_close').on('click', function() {
         jQuery('body').removeClass('pull_bottom');
         jQuery('.overlay_main_sec_video').removeClass('active');
     });  

  jQuery(window).on("scroll", function () {
    var scroll = jQuery(this).scrollTop();
    if (scroll >= 4) {
      jQuery(".main_header").addClass("fixed-header");
    } else {
      jQuery(".main_header").removeClass("fixed-header");
    }
  });

  jQuery(".accordion-item .heading").on("click", function (e) {
    e.preventDefault();
    if (jQuery(this).closest(".accordion-item").hasClass("active")) {
      jQuery(".accordion-item").removeClass("active");
    } else {
      jQuery(".accordion-item").removeClass("active");
      jQuery(this).closest(".accordion-item").addClass("active");
    }
    var jQuerycontent = jQuery(this).next();
    jQuerycontent.slideToggle(300);
    jQuery(".accordion-item .content").not(jQuerycontent).slideUp("slow");
  });


  if (jQuery(window).width() <= 1023) {
    jQuery(".toggle_button").on("click", function (event) {
      event.preventDefault();
      jQuery(this).toggleClass("active");
      jQuery(".mobile_menu").toggleClass("navOpen");
      jQuery(".main_header").toggleClass("menu-open");
    });

    jQuery("ul.main_menu > li.menu-item-has-children > a").on("click", function (event) {
      event.preventDefault();
      jQuery('ul.main_menu > li.menu-item-has-children > a').not(jQuery(this)).removeClass('active');
      jQuery(this).toggleClass("active");
      jQuery(this).siblings('ul.sub-menu').slideToggle('900');
      var topParent = jQuery(this).parents('ul.main_menu > li').attr('id');
      var topChildParent = jQuery(this).parent('li').attr('id');
      jQuery('ul.main_menu ul.sub-menu').each(function () {
        if (jQuery(this).parents('ul.main_menu > li').attr('id') !== topParent) {
          jQuery(this).slideUp('700');
        } else {
          if (jQuery(this).find('li.menu-item-has-children').length) {
            getChild(jQuery(this).find('li.menu-item-has-children'), topChildParent);
          }
        }
      });
    });

    function getChild(obj, topChildParent) {
      obj.each(function () {
        if (jQuery(this).attr('id') !== topChildParent) {
          jQuery(this).find('ul.sub-menu').slideUp('700');
        }
      });
    }
  }

  if (jQuery(window).width() <= 767) {
    jQuery(".menu-list > li > a").on("click", function (event) {
      event.preventDefault();
      jQuery('.menu-list > li > a').not(jQuery(this)).removeClass('active');
      jQuery(this).toggleClass("active");
      jQuery(this).siblings('ul').slideToggle('1500');
      var topParent = jQuery(this).parents('.menu-list > li > a').attr('id');
      var topChildParent = jQuery(this).parent('li').attr('id');
      jQuery('.menu-list').each(function () {
        if (jQuery(this).parents('.menu-list > li > a').attr('id') !== topParent) {
          jQuery(this).slideUp('1500')
        } else {
          if (jQuery(this).find('li.menu-item-has-children').length) {
            getChild(jQuery(this).find('li.menu-item-has-children'), topChildParent)
          }
        }
      })
    })
  }

  function getChild(obj, topChildParent) {
    obj.each(function () {
      if (jQuery(this).attr('id') !== topChildParent) {
        jQuery(this).find('ul').slideUp('1500')
      }
    })
  }

        // Add smooth scrolling to all links
      jQuery('a[href*="#"]:not([href="#"])').click(function() { 
        var target =  jQuery(this.hash);
        jQuery('html, body').stop(true, true).animate({
          scrollTop: target.position().top - 80
        }, 'linear');   
        return false;
      });    
      if (location.hash){
        var id = jQuery(location.hash);
      }
      if (location.hash){
        jQuery('html,body').animate({scrollTop: id.position().top - 80
        }, 'linear')
          return false;
      };

});
