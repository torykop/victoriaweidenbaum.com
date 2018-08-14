$(function () {


    /*-------------------------------------------
    Load Page
    ---------------------------------------------*/
    initWebsite();

    /*-------------------------------------------
    Load Page - next Open Site
    ---------------------------------------------*/

    function initWebsite() {
        CheckScripts();
        Masonry();
        $('body').jKit();
        backgroundmenu();
        setTimeout(function () {
            $('header').fadeIn();
        }, 500);
    }

    /*-------------------------------------------
    Check Preloader
    ---------------------------------------------*/

    function preloaderCheck() {
        $(".preloader").fadeIn("slow");
        $(window).load(function () {
            var delay = location.pathname === '/' ? 1000 : 500;
            $(".preloader").delay(delay).fadeOut("slow");
        });
    }


    /*-------------------------------------------
    Init and check list scripts
    ---------------------------------------------*/

    function CheckScripts() {

        $(document).ready(function () {
            preloaderCheck();
            Typewriting();
            sidebarhero();
        });

    }


    /*-------------------------------------------
    Masonry Check Script
    ---------------------------------------------*/

    function Masonry() {
        var $container = $('.portfolio-grid');

        $container.imagesLoaded(function () {
            $container.masonry({
                itemSelector: 'li'
            });
        });
    }


    /*-------------------------------------------
    Multi purpose init Background menu
    ---------------------------------------------*/

    function backgroundmenu() {

        $(document).ready(function () {
            if ($("#header-fade").length) {

                $(window).scroll(function () {
                    if ($(this).scrollTop() > 10) {
                        $('header').fadeOut();
                    } else {
                        $('header').fadeIn();
                    }
                });
            }

            if ($("#header-white").length) {

                $(window).scroll(function () {
                    if ($(this).scrollTop() > 10) {
                        $('header').css("background", "white");
                        $('header .logo > a').css("borderBottom", "0");

                    } else {
                        $('header').css("background", "none");
                    }
                });
            }


        });

    }

    /*-------------------------------------------
    Typewriting init script
    ---------------------------------------------*/

    function Typewriting() {


        $(document).ready(function () {
            setTimeout(function () {
                if ($("#site-type").length) {
                    $(".typewrite span").typed({
                        strings: ["show case ", "projects "],
                        typeSpeed: 100,
                        backDelay: 500,
                        loop: false,
                        contentType: 'html', // or text
                        // defaults to false for infinite loop
                        loopCount: false,
                    });
                }
            }, 2000);
        });
    }


    /*-------------------------------------------
    Amazing Fade with scroll Sidebar
    ---------------------------------------------*/

    function sidebarhero() {

        if ($("#hero").length) {
            var fadeStart = 100, fadeUntil = 800, fading = $('#hero');

            $(window).bind('scroll', function () {
                var offset = $(document).scrollTop()
                    , opacity = 0
                    ;
                if (offset <= fadeStart) {
                    opacity = 1;
                } else if (offset <= fadeUntil) {
                    opacity = 1 - offset / fadeUntil;
                }
                fading.css('opacity', opacity);
            });
        }
    }


})//End
