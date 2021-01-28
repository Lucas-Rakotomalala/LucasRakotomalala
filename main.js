$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000)
    });

    $('#up').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 2000)
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })

});

function temp() {
    document.getElementById('form').action = "mailto:lucas.rakotomalala35@gmail.com?subject=Demande%20de%20services&body=Bonjour%20Monsieur%2C%20%0A%0AVoici%20ma%20demande%20de%20service%3A%0A%20" //+ document.getElementById('services').Value;
}



