$(function () {

  var $menuViewSwicther = $.('#menu_view_switcher');
  var $menuContainer = $.('nav');
  
  var menuViewSwitcherStatus = 'off';

    // ***************************************************************************
    // Mouse click & Keyboard events
    // ***************************************************************************

    $roomSwitcher.click(function () {
        if(menuViewSwitcherStatus==='off'){
        $menuViewSwicther.empty.append(menuFullView());
        menuViewSwitcherStatus='on';
        }
        else {
        $menuViewSwicther.empty.append(menuShortView());
        menuViewSwitcherStatus='off';
        }
    });
    
    // ***************************************************************************
    // Helpers
    // ***************************************************************************
    
    function menuFullView() {
      return '';
    };
    
    function menuShortView() {
      return '';
    };
});
