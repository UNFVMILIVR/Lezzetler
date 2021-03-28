/**
 * Template Name: Regna - v4.0.1
 * Template URL: https://bootstrapmade.com/regna-bootstrap-onepage-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function() {
    "use strict";


    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }


    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });

})()

// $(document).ready(function() {

//     $(".btn .fa-play-circle-o").on('click', function() {
//         $(this).hide();
//         $(".fa-pause-circle-o").fadeIn();
//         $("#mymusic")[0].play();
//     });

//     $(".btn .fa-pause-circle-o").on('click', function() {
//         $(this).hide();
//         $(".fa-play-circle-o").fadeIn();
//         $("#mymusic")[0].pause();
//     });

// });