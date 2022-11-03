let tid;
$(() => {
    $(document).mousemove((e) => {
        $('.bgimg').css({ 'left': ((-0.05 * $(window).width()) + ((e.pageX - ($(window).width() / 2)) / -20)), 'top': ((-0.5 * $(window).height()) + ((e.pageY - ($(window).height() / 2)) / -20)) });
    });
    $('.close_btn').click(() => {
        $('.menu').css('display', 'none');
        setTimeout(() => {
            $('.menu').css('display', 'block');
        }, 50);
    });
    $('.content').mouseenter(() => {
        tid = setTimeout(() => {
            $('.menu_box').fadeIn(200);
        }, 2000);
        $('.home_title').fadeOut(300);
    });
    $('.content').mouseleave(() => {
        clearTimeout(tid);
        $('.menu_box').fadeOut(200);
        $('.home_title').fadeIn(300);
    });
    $('.menu_box').mouseenter(() => {
        $('.menu_box').fadeIn(200);
    });
});