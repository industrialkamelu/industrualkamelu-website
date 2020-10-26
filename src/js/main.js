import '../scss/main.scss'


var jquery = require("jquery");
window.$ = window.jQuery = jquery;




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
});

// ===========================================


