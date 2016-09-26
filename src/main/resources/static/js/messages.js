(function ($) {
    $(function () {

        $('.modal-trigger').leanModal();

        var objDiv = $(".messages")[0];
        objDiv.scrollTop = objDiv.scrollHeight;

        $('.conversation').click(function() {
            $('.selected').removeClass('selected');
            $(this).addClass('selected');
        });

        $('.action').click(function(e) {
            if ($(this).hasClass('delete')) {
                var parent = $(this).parent();
                parent.fadeOut();
                setTimeout(function() {
                    parent.remove();
                }, 2000);
                Materialize.toast('Message deleted', 2000);
                //do ajax here to delete message from database
            } else {
                $(this).addClass('delete');
                $(this).html('delete');
            }
            e.stopPropagation();
        });

        $(document).click(function () {
            var messageActions = $('.action');
            messageActions.removeClass('delete');
            messageActions.html('message');
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space
