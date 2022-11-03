$(() => {
    $(window).ready(() => {
        setTimeout(() => {
            $('.loading').fadeOut(500);
        }, 1500);
    });
    $('b').click(function () {
        var x = $(this);
        if (x.attr('href') != '#') {
            $('html').fadeOut();
            setTimeout("location.href='" + x.attr('href') + "'", 600);
        }
        else {
            () => { "location.href='#'" };
        }
    })
});