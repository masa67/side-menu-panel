
/*global $, sideMenu */
$(document).ready(function () {
    'use strict';

    function sideMenuOpened() {
        $('.side-menu-fill-on-open').html('<p>This content is loaded only when the menu is opened.</p>');
    }

    function sideMenuClosed() {
        $('.side-menu-fill-on-open').html('');
    }

    sideMenu.create({
        togglerClosedText: 'Ask for Help',
        togglerOpenText: 'Close',
        content: $('#side-menu-block').html(),
        callOnOpen: sideMenuOpened,
        callOnClose: sideMenuClosed
    });

});