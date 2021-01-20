// ---------------------------
//         [ Navbar scroll ]
//  -------------------------------

$(function() {
    var navbar = $('.header-inner');
    $(window).scroll(function() {
        if ($(window).scrollTop() <= 40) {
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    });
});

// ---------------------------
//         [ Owl Carousel ]
//  -------------------------------
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});




// ---------------------------
//         [ progress bar ******* skilll ]
//  -------------------------------

$('.skill-per').each(function() {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + '%');
    $({ animatedValue: 0 }).animate({ animatedValue: per }, {
        duration: 1000,
        step: function() {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function() {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        }
    });
});



// ---------------------------
//         [ Portfolio isotope ]
//  -------------------------------

(function() {

    'use strict';


    var $gallary = $('.gallary');

    $gallary.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e) {

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $gallary.isotope({ filter: filter });

    });

    $('.card').mouseenter(function() {

        $(this).find('.card-head').css({ 'top': '-100%' });
        $(this).find('.card-hover').css({ 'top': '0' });

    }).mouseleave(function() {

        $(this).find('.card-head').css({ 'top': '0' });
        $(this).find('.card-hover').css({ 'top': '100%' });

    });

})(jQuery);


// ---------------------------
//         [ Portfolio Counter up ]
//  -------------------------------

$(".count").counterUp({
    delay: 10,
    time: 3000
});