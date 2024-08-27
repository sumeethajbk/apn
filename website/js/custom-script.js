var tracking_image = '<img height="1" class="tracking_image_class" width="1" style="border-style:none;" alt="" src="https://insight.adsrvr.org/track/pxl/?adv=pqdxyjz&ct=0:x6kloxq&fmt=3"/>';
var LC_API = LC_API || {};
LC_API.on_after_load = function() {
  LC_API.set_custom_variables(custom_variables);
  //console.log('custom variables pushed');
  LC_API.on_message = function (data) {
      //alert("Message " + data.text + " sent by " + data.user_type);
      if ( data.user_type === 'visitor' && typeof sessionStorage[ 'lc_visitor_id' ] === "undefined" ){
          sessionStorage['lc_visitor_id'] = LC_API.get_visitor_id();
          //alert("User " + sessionStorage['lc_visitor_id'] );
          uet_report_conversion();
          if (history.pushState) {
              if( jQuery("body").hasClass("page-id-32616") ){
                  if( jQuery(".tracking_image_class").length == 0 ) {
                      jQuery("body").prepend(tracking_image);   
                  }
              }
              var new_url = updateQueryStringParameter(window.location.href, 'chat_started', '1');
              window.history.pushState({path:new_url},'',new_url);
          }
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
              'event': 'LiveChatEvent',
          });
      }
  };
  LC_API.on_ticket_created = function(data){
    if (history.pushState) {
      uet_report_conversion();
      var new_url_ticket = updateQueryStringParameter(window.location.href, 'ticket_created', '1');
      window.history.pushState({path:new_url_ticket},'',new_url_ticket);
      if( jQuery("body").hasClass("page-id-32616") ){
        if( jQuery(".tracking_image_class").length == 0 ) {
          jQuery("body").prepend(tracking_image);
        }
      }
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'livechat_ticket_created',
    });
    jQuery.post( 'https://apn.com/livechat.php', { event_type: 'ticket_created', data: data, chat_start_url: location.href, custom_variables: custom_variables } );
  }
};

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
  
  
   /* Bottom Slide
jQuery('.insurance-module .button').on('click', function(e) {
         e.preventDefault();
         jQuery('body').addClass('pull_bottom');
         jQuery('.overlay_main_sec').addClass('active');
     });
jQuery('.connect_close').on('click', function() {
         jQuery('body').removeClass('pull_bottom');
         jQuery('.overlay_main_sec').removeClass('active');
     });   */ 
  
  
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

    jQuery("ul.main_menu > li.menu-item-has-children > a").on("click", function(event){
      event.preventDefault();
      jQuery('ul.main_menu > li.menu-item-has-children > a').not(jQuery(this)).removeClass('active');
      jQuery(this).toggleClass("active");
      jQuery(this).parent().siblings().find('ul.sub-menu').slideUp();
      jQuery(this).next('ul.sub-menu').slideToggle();
      jQuery(this).parent().siblings().toggleClass('sib');
  });
  jQuery("ul.main_menu ul > li.menu-item-has-children > a").on("click", function(event){
      event.preventDefault();
      jQuery('ul.main_menu ul > li.menu-item-has-children > a').not(jQuery(this)).removeClass('active');
      jQuery(this).toggleClass("active");
      jQuery(this).parent().siblings().find('ul.sub-menu').slideUp();
      jQuery(this).siblings('ul.main_menu ul > li > ul.sub-menu').slideToggle();
  });
  
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

});

function noindex_check() {
  if (location.host === 'apn.com') {
      var url = decodeURIComponent(window.location.href).split('?')[0];
      var exclude_pages = [
      'https://apn.com/ll-his-ok/',
      'https://apn.com/ll-google-ps-nak/',
      'https://apn.com/ll-google-ps-nok/',
      'https://apn.com/ll-bing-ps-his-ok/',
      'https://apn.com/ll-bing-ps-nak/',
      'https://apn.com/ll-bing-ps-nok/',
      'https://apn.com/ll-bing-telehealth/',
      'https://apn.com/ll-google-display-telehealth/',
      'https://apn.com/ll-google-db/',
      'https://apn.com/ll-simplifi-fulld-brand/',
      'https://apn.com/ll-simplifi-fullt/',
      'https://apn.com/ls-online-therapy-programming-telehealth/',
      'https://apn.com/ll-facebook-dp-brand/',
      'https://apn.com/ll-google-iak/',
      'https://apn.com/ll-bing-iak/',
      'https://apn.com/detox-facebook/',
      'https://apn.com/denver-detox-simplifi/',
      'https://apn.com/dtms-fb/',
      'https://apn.com/dtms-linkedin/',
      'https://apn.com/dtms-simplifi/',
      'https://apn.com/dtms-google/',
      'https://apn.com/dtms-bing/',
      'https://apn.com/veterans-triwest-google/',
      'https://apn.com/aspen-strong/',
      'https://apn.com/caadac/',
      'https://apn.com/outfront/',
      'https://apn.com/apn_mhp/',
      'https://apn.com/dtms-choozle/',
      'https://apn.com/denver-detox-choozle/',
      'https://apn.com/mental-health-trauma-addiction-wwr/',
      'https://apn.com/mental-health-trauma-addiction-rehab-com/',
      'https://apn.com/mental-health-trauma-addiction-adludio/',
      'https://apn.com/mental-health-trauma-addiction-etv/',
      'https://apn.com/all-points-north-lodge-aimlogic/',
      'https://apn.com/mental-health-trauma-addiction-luxury-rehab/',
      'https://apn.com/mental-health-trauma-addiction-luxury-rehab-detox/',
      'https://apn.com/mental-health-trauma-addiction-luxury-rehab-telehealth/',
      ];

      const currentURL = window.location.href;
      const subURL1 = "https://apn.com/category";
      const subURL2 = "https://apn.com/tag";
      if( currentURL.includes(subURL1) || currentURL.includes(subURL2) ){
          exclude_pages.push(currentURL);
      }

      var $meta_robots = jQuery('meta[name=robots]');
      if ($meta_robots.length) {
          var meta_robots_content = $meta_robots.attr('content').toLowerCase();
          if (meta_robots_content.indexOf('noindex') >= 0) {
              $.post(apn_object.ajax_url, {action: 'noindex_tag_email', email_type: 'noindex_tag', url: url});
          }
      }
  }
}

jQuery(window).load(function(){
    noindex_check();
});

function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
        return uri + separator + key + "=" + value;
    }
}

jQuery(document).ready(function() {
  jQuery('a[href*="#"]:not([href="#"])').click(function(event) {
    event.preventDefault();
    var target = jQuery(this.hash);
    jQuery('html, body').stop(true, true).animate({
      scrollTop: target.offset().top - 80
    }, 'linear');
  });

  if (location.hash) {
    var id = jQuery(location.hash);
    jQuery('html, body').animate({
      scrollTop: id.offset().top - 80
    }, 'linear');
  }
});
