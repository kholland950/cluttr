(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

        $('#login').click(function () {
            $('#action-container').hide();
            var taglineElement = $('#tagline');
            var loginText = taglineElement.attr('data-login-text');
            taglineElement.text(loginText);
            $('#login-container').fadeIn();
        });
        $('#signup').click(function () {
            $('#action-container').hide();
            $('#signup-container').fadeIn();
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space
