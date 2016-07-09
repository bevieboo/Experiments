$('.navigation-hamburger').click(function() {
    $('.navigation-hamburger').toggleClass('is-open');
    if (!$('.navigation-hamburger').hasClass('is-open')) {
        $('.navigation-hamburger').addClass('is-hidden');
    } else {
        $('.navigation-hamburger').removeClass('is-hidden');
    }
})
