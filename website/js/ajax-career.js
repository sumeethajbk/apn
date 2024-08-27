jQuery(document).ready(function($) {
        $(".ajax-click").click(function(e) {
            e.preventDefault();
            var post_id = $(this).val();
            var ajaxURL = MyAjax.ajaxurl;
            $.ajax({
            type: 'POST',
            url: ajaxURL,
            data: {"action": "load-content", post_id: post_id},
            success: function(response) {
                $("#career-opportunities-wrap").html(response);
            return false;
        }
    });    
   });
});