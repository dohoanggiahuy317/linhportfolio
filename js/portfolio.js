document.getElementById('generalctn').addEventListener('mouseover', function(){
    TweenMax.to('#middle-general', 0.3, {width: '3.5vh', ease: Power3.easeInOut});
})

document.getElementById('generalctn').addEventListener('mouseout', function(){
    TweenMax.to('#middle-general', 0.3, {width: '2vh', ease: Power3.easeInOut});
})

document.getElementById('generalctn').addEventListener('click', function(){
    TweenMax.to('#generalctn', 1, {rotation: "900deg", ease: Power3.easeInOut});
    TweenMax.to('#generalctn', 1, {opacity: 0, ease: Power3.easeInOut});
    TweenMax.to('#generalctn', 0, {delay: 1, display: 'none', ease: Power3.easeInOut});
    TweenMax.to('#exit', 0, {delay: 1, display: 'flex', ease: Power3.easeInOut});
    TweenMax.to('#exit', 0.2, {delay: 1, opacity: '1', ease: Power3.easeInOut});
    TweenMax.to('#exit', 2, { rotation: '900deg', ease: Power3.easeInOut});
    TweenMax.to('#navbar', 0.7, {delay: 1.5, width: '45vw', ease: Power3.easeInOut});
    TweenMax.to('.navbtn', 0, {delay: 2.5, display: 'block', ease: Power3.easeInOut});
    TweenMax.to('.navbtn', 0.5, {delay: 2.5, opacity: 1, ease: Power3.easeInOut});
})

document.getElementById('exit').addEventListener('click', function(){
    TweenMax.to('.navbtn', 0.5, {opacity: 0, ease: Power3.easeInOut});
    TweenMax.to('.navbtn', 0, {delay: 0.5, display: 'none', ease: Power3.easeInOut});
    TweenMax.to('#navbar', 0.7, {delay: 0.8, width: '10vh', ease: Power3.easeInOut});
    TweenMax.to('#exit', 1, {delay: 1.5, rotation: '0deg', ease: Power3.easeInOut});
    TweenMax.to('#exit', 1, {delay: 1.5, opacity: '0', ease: Power3.easeInOut});
    TweenMax.to('#exit', 0, {delay: 2.5, display: 'none', ease: Power3.easeInOut});
    TweenMax.to('#generalctn', 0.2, {delay: 2.5, display: 'flex', ease: Power3.easeInOut});
    TweenMax.to('#generalctn', 1, {delay: 2, rotation: "0deg", ease: Power3.easeInOut});
    TweenMax.to('#generalctn', 1, {delay: 2, opacity: 1, ease: Power3.easeInOut});
})












/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
