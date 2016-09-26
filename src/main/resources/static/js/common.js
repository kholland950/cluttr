$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 0});

    $('.dropdown-button').dropdown({
            constrain_width: false, // Does not change width of dropdown to that of the activator
            gutter: 0, // Spacing from edge
            belowOrigin: true, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        }
    );

    $('.dropdown-button').click(function(e) {
        e.stopPropagation();
    });

    $('#notifications-icon').click(function(e) {
        $('#notif-num').hide();
        var icon = $(this).children('i');
        icon.removeClass('orange-text');
        icon.addClass('white-text');

        //send notification read ajax so the notifications aren't "new" anymore
    });

    $('#notifications-dropdown').click(function(e) {
        e.stopPropagation();
    });
    
    $('.delete-notification').click(function(e) {
        var li = $(this).parent().parent();
        li.fadeOut(500);

        setTimeout(function() {
            li.remove();

            if ($('.notification').size() == 0) {
                $('#notification-header').hide();
                $('#notification-list').hide();
                $('#no-notifications').show();
            }
        }, 500);

        e.stopPropagation();
    });

    $(document).click(function() {
        var dropdown = $('#notifications-dropdown');
        if (dropdown.is(":visible")) {
            dropdown.find('.new').removeClass('new');
        }
    });
});
