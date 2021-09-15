$(document).ready(function () {

    /*- Toggle Menu -*/
    $('.hamburger').on('click', function () {
        $('.search-view-wrap').fadeIn();
        $('body').css('overflow', 'hidden');
    });

    $('.close-search-box').on('click', function () {
        $('.search-view-wrap').fadeOut();
        $('body').css('overflow', 'auto');
    });
    /*- Toggle Menu End -*/


    $('.lp-share-icon').on('click', function () {
        if ($(window).innerWidth() >= 768) {
            $(this).toggleClass('social-open');
            $('.share-icon').fadeToggle();
            $('.close-social span').toggleClass('close');
            $('.social-icon').toggleClass('active');
        }
    });

    $('#tabs li').click(function () {
        var tab_id = $(this).attr('data-target');

        $('#tabs li').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $('#' + tab_id).addClass('active');

    });



    $('.lp-carousel').owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        autoplay: false,
        responsiveClass: true,
        dots: true,
        nav: true,
        responsive: {
            320: {
                items: 1,
                dots: false
            },
            770:{
                items:1,
                dots: true
            },
        }
    });

    $('.tab-li a').click(function (e) {
        e.preventDefault();
    })

});
