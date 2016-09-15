(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

        $('#login').click(function () {
            $('#action-container').hide();
            $('#tagline').text("welcome home, we knew you'd come back");
            $('#login-container').fadeIn();
        });
        $('#signup').click(function () {
            $('#action-container').hide();
            $('#signup-container').fadeIn();
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space
