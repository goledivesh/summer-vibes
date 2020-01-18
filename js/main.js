$(document).ready(function () {

    $('.hamburger').on('click', function () {
        $('.search-view-wrap').fadeIn();
        $('body').css('overflow', 'hidden');
    });

    $('.close-search-box').on('click', function () {
        $('.search-view-wrap').fadeOut();
        $('body').css('overflow', 'auto');
    });


    $('.lp-share-icon').on('click', function () {
        $(this).toggleClass('social-open');
        $('.share-icon').fadeToggle();
        $('.close-social span').toggleClass('close');
        $('.social-icon').toggleClass('active');
    });


    $('.lp-carousel').owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        autoplay: false,
        responsiveClass: true,
        responsive: {
            600: {
                items: 1,
                nav: true,
                dots: false
            }
        }
    });

    $('.tab-li a').click(function (e) {
        e.preventDefault();
    })

});
