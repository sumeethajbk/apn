var jq = jQuery.noConflict();
   jq(window).scroll(function() {

    if (jq(this).scrollTop()>0)
     {
        jq('#notification').fadeOut();
     }
    else
     {
      jq('#notification').fadeIn();
     }
 });
jq(document).ready(function(){

	jq(".headerbar-close-btn").on('click', function() { 
		jQuery.cookie('apn_header_bar', 'yes', { expires: 730, path: '/'  });
		//jq.exitIntent('disable');
		jq('#notification').fadeOut();
		jq("#notification").css("display", "none");
    location.reload(true);
		return false;
	});

});
