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
    $('.content').hover(() => {
        $('.home_title').fadeOut();
        setTimeout(() => {
            $('.menu_content_item').css('display', 'flex');
            $('.menu_contact').css('display', 'flex');
        }, 2000);
    }, () => {
        $('.home_title').fadeIn();
        $('.menu_content_item').css('display', 'none');
        $('.menu_contact').css('display', 'none');
    });
});