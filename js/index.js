let tid;
$(document).ready(function () {
    $(document).mousemove(function (e) {
        $('.bgimg').css({ 'left': ((-0.05 * $(window).width()) + ((e.pageX - ($(window).width() / 2)) / -20)), 'top': ((-0.6 * $(window).height()) + ((e.pageY - ($(window).height() / 2)) / -20)) });
    });
    $('.close_btn').click(function () {
        $('.menu').css('display', 'none');
        setTimeout(function () {
            $('.menu').css('display', 'block');
        }, 50);
    });
    $('.content').mouseenter(function () {
        tid = setTimeout(function () {
            $('.menu_box').fadeIn(200);
        }, 2000);
        $('.home_title').fadeOut(300);
    });
    $('.content').mouseleave(function () {
        clearTimeout(tid);
        $('.menu_box').fadeOut(200);
        $('.home_title').fadeIn(300);
    });
    $('.menu_box').mouseenter(function () {
        $('.menu_box').fadeIn(200);
    });
});