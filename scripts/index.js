$(document).ready(function () {
    $('html').on('DOMMouseScroll mousewheel', function (e) {
        if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
            //scroll down
            $("#header-nav").addClass("hide-nav-bar");
        } else {
            //scroll up
            $("#header-nav").removeClass("hide-nav-bar");
        }
        //prevent page fom scrolling
        // return false;
    });

    // On click show menu on small screen

    $('body').addClass('js');
    var $menu = $('#menu'),
        $menulink = $('.menu-link');

    $menulink.click(function () {
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });
});