import '../scss/main.scss'


var jquery = require("jquery");
window.$ = window.jQuery = jquery;

import 'slick-carousel'
import './magnific-popup'



// ===========================================
// **************  NAVBAR  *******************
// ===========================================
$(function () {
  // Show after hero image
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > $nav.height());
  });

  // Toggle in mobile version
  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');
  navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('navbar-links-active');
  });
  // Close mobile menu on click in a link
  mainNav.addEventListener('click', function () {
    mainNav.classList.toggle('navbar-links-active');
  });

});
// ===========================================

// ===========================================
// *********** Clientes Carrusell  *************
// ===========================================
$(document).ready(function () {
  $('.clientes-logos').slick({
    lazyLoad: 'ondemand',
    pauseOnHover: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    adaptiveHeight: true,
    arrows: false
  });
});
// ===========================================

// ===========================================
// ***********        Modal      *************
// ===========================================
$(document).ready(function () {

  $('.grid-gallery__image').each(function () {
    $(this).attr("data-mfp-src", $(this).attr('src'));
  });

  $('.grid-gallery__image').magnificPopup({
    type: 'image',
    removalDelay: 300,
  });
});
// ===========================================

