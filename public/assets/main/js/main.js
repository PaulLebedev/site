$(function () {

    var $menuViewSwicther = $('#menu_view_switcher');
    var $menuContainer = $('nav');

    var menuViewSwitcherStatus = 'off';

    // ***************************************************************************
    // Mouse click & Keyboard events
    // ***************************************************************************

    $menuViewSwicther.click(function () {
        if (menuViewSwitcherStatus === 'off') {
            $menuContainer.empty.append(menuFullView());
            menuViewSwitcherStatus = 'on';
        }
        else {
            $menuContainer.empty.append(menuShortView());
            menuViewSwitcherStatus = 'off';
        }
    });

    // ***************************************************************************
    // Helpers
    // ***************************************************************************

    function menuFullView() {
        return '';
    }

    function menuShortView() {
        return '';
    }
});
