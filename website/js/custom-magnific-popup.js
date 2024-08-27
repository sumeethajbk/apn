jQuery(document).ready(function($) {
    jQuery('.popup-youtube').magnificPopup({
     /* disableOn: 700,*/
      type: 'iframe',
      mainClass: 'mfp-fade',
	  autoplay: 1,
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
});