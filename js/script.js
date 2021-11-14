$(document).ready(function() {
    //Home - pricing section
    let monthlyButton = document.querySelectorAll("#pricing3 .buttons button")[0]
    let yearlyButton = document.querySelectorAll("#pricing3 .buttons button")[1]

    $(monthlyButton).click(function(e) {
        $("#pricing3 .buttons button").removeClass("active");
        $(this).addClass("active");
        $("#pricing3 .content2").css({
            "visibility": "hidden",
            "top": "500px",
            "opacity": "0"
        })
    });
    $(yearlyButton).click(function(e) {
        $("#pricing3 .buttons button").removeClass("active");
        $(this).addClass("active");

        $("#pricing3 .content2").css({
            "visibility": "visible",
            "top": "0px",
            "width": "100%",
            "left": "0px",
            "opacity": "1"
        })
    });


    //section-aboutStrax
    $(function() {
        $('.accordions').find('a').on('click', function() {

            $("a .fa-minus").css("display", "block");
            $("a .fa-plus").css("display", "none");
            $(this).toggleClass('active');
            $('p').css("border-top", " 1px solid #ff612f");
            $('#aboutStrax').css("padding-bottom", " 150px");
            $(this).next().slideToggle('hide');
            $('p').not($(this).next()).slideUp('hide');
            $('a').not($(this)).removeClass('active');
        });
    });

    //goTop
    $(function() {
        // on scroll
        $(window).on('scroll', function() {
            let scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.goTop').addClass('active');
            if (scrolled < 600) $('.goTop').removeClass('active');
        });
        // on click
        $('.goTop').on('click', function() {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });

    // Home page-#strax
    $("#strax .owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
            },
            1000: {
                items: 2
            }
        }
    });

    // contact section contact-area
    $("#contact-area .contact-wrapper .form form input").mouseleave(function() {
        $("input ul li").css("display", "block");
    });


    //Home page-header
    $("header .owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            992: {
                items: 1
            }
        }
    });



    //About page-sign section
    $("#sign .owl-carousel").owlCarousel({
        loop: true,
        margin: 60,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            1000: {
                items: 4
            }
        }
    });

    //Home header
    $("header .owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            992: {
                items: 1
            }
        }
    });


    //Home-loader
    $(window).on('load', function() {
        $('.loader').fadeOut();
    });




    window.addEventListener("scroll", (e) => {
        if (window.pageYOffset > 150) {
            document.querySelector(".navbar-expand-lg ").classList.add("active");
        } else {
            document.querySelector(".navbar-expand-lg ").classList.remove("active");
        }
    });


});