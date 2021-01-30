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

function test() {
    var body_message = document.getElementById('subject').value;
    var uribody = encodeURI(body_message);
    var emaiil = 'lucas.rakotomalala@gmail.com';
    var subject = 'Demande de service ';
    var servivce = document.getElementById('Services').value;
    var tete = "Bonjour Monsieur Rakatomalala \r\n\r\n";
    var uritete = encodeURIComponent(tete);
    var email_user = document.getElementById('email').value;
    var nom = document.getElementById('name').value;
    var urinom = encodeURI(nom);
    var urisaut = encodeURI('\r\n');


    var mailto_link = "mailto:" + emaiil + '?subject=' + subject + servivce + '&body=' + uritete + uribody + urisaut + 'Vous pouvez me contacter à l\'adresse suivante: ' + email_user + urisaut + urisaut + 'Cordialement' + urisaut + urisaut + urinom;
    window.open(mailto_link);

};


