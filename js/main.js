$(function () {

    // MOBILE MENU
    $('#btnIcon').click(function () {
        $(this).toggleClass('open');
        if ($('.mobileMenu').hasClass('animate__fadeInLeft')){
            $('.mobileMenu').removeClass('animate__fadeInLeft');
            $('.mobileMenu').addClass('animate__fadeOutLeft');
        }else{
            $('.mobileMenu').removeClass('animate__fadeOutLeft');
            $('.mobileMenu').addClass('animate__fadeInLeft');
        }
        $('.mobileMenuHolder').toggleClass('active');
    });
    // MOBILE MENU

    // scroll reveal
        var slideUp = {
            distance: '150%',
            origin: 'bottom',
            opacity: null
        };
        var slideLeft = {
            distance: '150%',
            origin: 'left',
            opacity: null
        };
        var slideRight = {
            distance: '150%',
            origin: 'right',
            opacity: null
        };
        ScrollReveal().reveal('.trackHeader', slideUp);
        ScrollReveal().reveal('.trackBox',slideLeft);
        ScrollReveal().reveal('.mainContent .contentHolder .row .row', { delay: 1500 });
        ScrollReveal().reveal('.contentBox', { origin: 'bottom',distance:'150%' });
        ScrollReveal().reveal('.imgHolder', { origin:'bottom',distance:'150%' });
    // scroll reveal

    // Tracks Slider

        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                768: {
                    items: 2,
                    nav: false
                },
                990: {
                    items: 3,
                    nav: false
                },
                1165: {
                    items: 4,
                    nav: true,
                    loop: false
                }
            }
        })
    // Tracks Slider
});
