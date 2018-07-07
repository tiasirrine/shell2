(function ($) {
    "use strict";

    $('.chat-user-item').on('click', function () {
        window.location = "chat.html";
    });

    if ($('.chat-list-scroll').length > 0) {
        chat_list_height();
        $(window).on('resize', function () {
            chat_list_height();
        });
    }

    if ($('.ps-custom-scrollbar').length > 0) {
        if ($(window).width() >= 991) {
            chat_module_sidebar_height();
        } else {
            mobile_chat_module_sidebar_height()
        }
        $(window).on('resize', function () {
            var win = $(this); //this = window
            if (win.width() >= 991) {
                chat_module_sidebar_height();
            } else {
                mobile_chat_module_sidebar_height();
            }
        });
    }

    if ($.isFunction(PerfectScrollbar)) {
        var scOptions = {
            wheelSpeed: 2
        };

        new PerfectScrollbar('.chat-list-scroll', scOptions);
    }

})(jQuery);

function chat_list_height() {
    var body_height = jQuery('body').height();
    var main_header_height = jQuery('.main-header').outerHeight();
    var main_footer_height = jQuery('.gx-footer').outerHeight();

    var main_content_padding = parseInt(jQuery('.gx-main-content').css('padding-top'));

    var gxwrapper_margin = parseInt(jQuery('.gx-wrapper').css('margin-bottom'));

    var chat_module_margin = parseInt(jQuery('.chat-module').css('margin-top')) + parseInt(jQuery('.chat-module').css('margin-bottom'));

    var chatMain_header_height = jQuery('.chat-main-header').outerHeight();
    var chatMain_footer_height = jQuery('.chat-main-footer').outerHeight();

    var scrollbar_height = body_height - (main_header_height + main_content_padding + gxwrapper_margin + chat_module_margin + chatMain_header_height + chatMain_footer_height + main_footer_height);
    jQuery('.chat-list-scroll').height(scrollbar_height);
}

/*Chat Panel Sidebar Height*/
function chat_module_sidebar_height() {
    var body_height = jQuery('body').height();
    var main_header_height = jQuery('.main-header').outerHeight();
    var main_footer_height = jQuery('.gx-footer').outerHeight();

    var main_content_padding = parseInt(jQuery('.gx-main-content').css('padding-top'));

    var gxwrapper_margin = parseInt(jQuery('.gx-wrapper').css('margin-bottom'));

    var chat_module_margin = parseInt(jQuery('.chat-module').css('margin-top')) + parseInt(jQuery('.chat-module').css('margin-bottom'));

    var module_sideheader_height = jQuery('.chat-sidenav-header').outerHeight();

    var scrollbar_height = body_height - (main_header_height + main_content_padding + gxwrapper_margin + chat_module_margin + module_sideheader_height + main_footer_height);
    jQuery('.ps-custom-scrollbar').height(scrollbar_height);
}

function mobile_chat_module_sidebar_height() {
    var body_height = jQuery('body').height();

    var module_sideheader_height = jQuery('.chat-sidenav-header').outerHeight();

    var scrollbar_height = body_height - (module_sideheader_height);
    jQuery('.ps-custom-scrollbar').height(scrollbar_height);
}