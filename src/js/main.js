import '../scss/main.scss'

var jquery = require("jquery");
window.$ = window.jQuery = jquery;


// ======== NAVBAR ===========================
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > $nav.height());
});
});

