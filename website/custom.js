
jQuery(document).ready(function () {
    const blogSlider = jQuery(".location-row");
    function blogSlickSlider() {
        blogSlider.each(function () {
        const $this = jQuery(this);
        const blogSlide = $this.children(".location-list").length;
        if (window.matchMedia("(max-width: 1023px)").matches) {
          if (!$this.hasClass("slick-initialized")) {
            $this.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: false,
              speed: 1000,
              infinite: false,
              autoplay: false,
              variableWidth: true,
              adaptiveHeight: false,
            });
          }
        } else {

        }
      });
    }
    function destroyblogSlick() {
        blogSlider.each(function () {
        const $this = jQuery(this);
        if (
          jQuery(window).width() >= 1440 &&
          $this.hasClass("slick-initialized")
        ) {
          $this.slick("unslick");
        }
      });
    }
    blogSlickSlider();
    jQuery(window).on("resize", function () { destroyblogSlick(); blogSlickSlider(); });
    jQuery(window).on("orientationchange", function () { destroyblogSlick(); blogSlickSlider(); });
});  