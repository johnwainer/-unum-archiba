'use strict';

(function ($, window, document, undefined) {

    function marginTopSections(section, css) {
        var top = ($(window).height() - section.height()) * 0.5;
        section.css(css, top);
    }

    function initReady() {
        if ($('#login').is('section')) {
            marginTopSections($('.login-panel'), 'margin-top');
        }

        if ($('#loading').is('section')) {
            marginTopSections($('.unum-load'), 'margin-top');
        }

        if ($('#main').is('section')) {
            $('.action-side-menu').click(function() {
                $('#main').toggleClass('collapse-menu');
            });

            $('.action-main-menu').click(function () {
                $('.main-menu').toggle();
            });
        }
    }

    function initResizeWindow() {
        if ($('#login').is('section')) {
            marginTopSections($('.login-panel'), 'margin-top');
        }

        if ($('#loading').is('section')) {
            marginTopSections($('.unum-load'), 'margin-top');
        }
    }
    
    $(document).ready(initReady);
    $(window).on('resize', initResizeWindow);
})(jQuery, window, document);
