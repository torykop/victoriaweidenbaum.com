$(function () {
    /*-------------------------------------------
    Load Page - next Open Site
    ---------------------------------------------*/

    function initWebsite() {
        $(".preloader")
            .fadeIn("slow")
            .delay(500)
            .fadeOut("slow");

        initMasonry();
        $('body').jKit();
        backgroundMenu();

        $('header').delay(500).fadeIn();

        $('#button, #buttons').on('click', function () {
            $(".opacity-nav").fadeToggle("slow", "linear");
            $(".v-menu-bars").fadeToggle("slow", "linear");
        });
    }

    /*-------------------------------------------
    Masonry Check Script
    ---------------------------------------------*/

    function initMasonry() {
        var $container = $('.portfolio-grid');

        $container.imagesLoaded(function () {
            $container.masonry({ itemSelector: 'li' });
        });
    }

    /*-------------------------------------------
    Multi purpose init Background menu
    ---------------------------------------------*/

    function backgroundMenu() {
        var $header = $('header');

        if ($("#header-white").length) {

            $(window).scroll(function () {
                if ($(this).scrollTop() > 10) {
                    $header.css("background", "white");
                    $('header .logo > a').css("borderBottom", "0");

                } else {
                    $header.css("background", "none");
                }
            });
        }
    }
    

    /*-------------------------------------------
    Load Page
    ---------------------------------------------*/
    initWebsite();

})//End