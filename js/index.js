$(() => {
    setTimeout(() => {
        $('.op').fadeOut(800);
    }, 4500);


    $(document).mousemove((e) => {
        $('.follow_ms').css({ 'left': e.pageX - 50, 'top': e.pageY - 50 });
        $('.bgimg').css({ 'left': e.pageX / -50, 'top': e.pageY / -50 });
    });

    $('.content').hover(() => {
        $('.follow_ms').css('transform', 'scale(2)');
    },
        () => {
            $('.follow_ms').css('transform', 'scale(1)');
        });
    //let r = 0;
    // setInterval(() => {
    //     $('.circle').css('transform', 'rotate3D(' + 2 + ',' + 2 + ', ' + 1 + ', ' + r + 'deg)');
    //     r++;
    //     if (r >= 360) {
    //         r = 0;
    //     }
    // }, 10);
});