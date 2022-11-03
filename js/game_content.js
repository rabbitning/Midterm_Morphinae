$(document).ready(function () {
    setTimeout(function () {
        $(window).scrollTop(0);
        $(window).scroll(function () {
            if ($(window).scrollTop() == 0) {
                if (!$('.top_btn').is(':animated')) {
                    $('.top_btn').fadeOut(300);
                }
            }
            else {
                if (!$('.top_btn').is(':animated')) {
                    $('.top_btn').fadeIn(300);
                }
            }
        });
    }, 1500);
});