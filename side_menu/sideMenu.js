
/*global jQuery */
var sideMenu = (function ($) {
    'use strict';

    var menuOpen = false;

    function calcRightForHiding() {
        return -$('#side-menu-content').outerWidth();
    }

    function createSideMenu(cnf) {
        $('body').append(
            '<div id="side-menu" class="side-menu">' +
                '<div id="side-menu-toggler" class="side-menu-toggler">' +
                    '<div class="side-menu-toggler-text rotate">' +
                '<div>' +
                        '<span id="side-menu-toggler-closed">' + cnf.togglerClosedText + '</span>' +
                        '<span id="side-menu-toggler-open">' + cnf.togglerOpenText + '</span>' +
                    '</div>' +
                '</div>' +
                '</div>' +
                '<div id="side-menu-content" class="side-menu-content side-menu-content-hidden">' + cnf.content + '</div>' +
                '</div>'
        );

        $('#side-menu').css('right', calcRightForHiding());
        $('#side-menu-toggler-open').hide();

        $('#side-menu-toggler').on('click', function () {
            if (menuOpen) {
                $('#side-menu').css('right', calcRightForHiding());
                $('#side-menu-toggler-open').hide();
                $('#side-menu-toggler-closed').show();
                $('#side-menu-content').removeClass('side-menu-content-shown');
                $('#side-menu-content').addClass('side-menu-content-hidden');

                cnf.callOnClose();
            } else {
                $('#side-menu').css('right', '0');
                $('#side-menu-toggler-open').show();
                $('#side-menu-toggler-closed').hide();
                $('#side-menu-content').removeClass('side-menu-content-hidden');
                $('#side-menu-content').addClass('side-menu-content-shown');

                cnf.callOnOpen();
            }

            menuOpen = !menuOpen;
        });
    }

    return {
        create: createSideMenu
    };
}(jQuery));
