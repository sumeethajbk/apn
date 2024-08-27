var jqr5 = jQuery.noConflict();
jqr5(function() {
    if (jqr5("#ajax-load-more-people").length) {
	 //e = 1,
           var t = true,
            n = false,
            r = jqr5(window),
            i = jqr5("#ajax-load-more-people"),
            s = jqr5("#ajax-load-more-people ul"),
            o = s.attr("data-path");
            p = s.attr("data-pageNumber");
	    if(p!=''){
		e = p;
	    } else {
		e = 1;
	    }
       console.log(p);
        if (o === undefined) {
            o = "<?php bloginfo('stylesheet_directory'); ?>/ajax-load-more-team.php"
        }
        if (s.attr("data-button-text") === undefined) {
            jqr5button = "Older Posts"
        } else {
            jqr5button = s.attr("data-button-text")
        }
        i.append('<div id="load-more-people" class="more blog_more"><span class="loader"></span><span class="button">' + jqr5button + "</span></div>");
        var u = function() {
            jqr5("#load-more-people").addClass("loading");
            jqr5("#load-more-people span.text").text("Loading...");
            jqr5.ajax({
                type: "GET",
                data: {
                    postType: s.attr("data-post-type"),
                    category: s.attr("data-category"),
                    author: s.attr("data-author"),
                    taxonomy: s.attr("data-taxonomy"),
                    tag: s.attr("data-tag"),
                    postNotIn: s.attr("data-post-not-in"),
                    numPosts: s.attr("data-display-posts"),
                    specialty: s.attr("data-specialty"),
                    location: s.attr("data-location"),
                    year: s.attr("data-year"),
                    month: s.attr("data-month"),
                    searchblog: s.attr("data-searchblog"),
                    offset: s.attr("data-offset"),
                    order: s.attr("data-order"),
                    option: s.attr("data-option"),
                    postsCount: s.attr("data-postsCount"),
                    alphabetSort: s.attr("data-alphabetSort"),
                    pageNumber: e,
                    pageOffset: e,
                },
                url: o + "/ajax-load-more-team.php",
                beforeSend: function() {
                    if (e != 1) {
                        jqr5("#load-more-people").addClass("loading");
                        jqr5("#load-more-people span.text").text("Loading...")
                    }
                },
                success: function(e) {
                    jqr5data = jqr5(e);
                    if (jqr5data.length == 0) {
                        jqr5("#load-more-people").removeClass("loading");
                        if (jqr5(window).width() >= 600) {
                            jqr5("#load-more-people span.text").text("That's all!")
                        } else {
                            jqr5("#load-more-people span.text").text("That's all!")
                        }
                        t = false;
                        n = true
                    } else if (jqr5data.length > 0) {
                        jqr5data = jqr5('<span id="more-blog">' + e + "</span>");
                        jqr5data.hide();
                        s.append(jqr5data);
                        jqr5data.fadeIn(500, function() {
                            jqr5("#load-more-people").removeClass("loading");
                            jqr5("#load-more-people span.text").text(jqr5button);
                            t = false
                        })
                    }
                },
                error: function(e, t, n) {
                    jqr5("#load-more-people").removeClass("loading");
                    jqr5("#load-more-people span.text").text(jqr5button)
                }
            })
        };
                var remain = 0;
        var count = 0;
        var postsCount= s.attr("data-postsCount");
        if(postsCount <=20){
       jQuery("#load-more-people").hide(); 
           if(postsCount == 0){ 
              jQuery(".our-team-main").append("<h2 class='no_result_found'>Sorry, No profile found.</h2>")
           }
        }
        jqr5("#load-more-people").click(function() {
            if (!t && !n && !jqr5(this).hasClass("done")) {
                t = true;
                e++;
                u()
            }
        count +=1; 
           
          var postsCount= s.attr("data-postsCount");
          
            remain = postsCount - 20 * count;
          console.log(remain);
            if(remain <= 20){
               jQuery("#load-more-people").hide(); 

            }
        });
        u()
    }
})
