$(document).ready(function () {
    $(window).ready(function () {
        setTimeout(function () {
            $('.loading').fadeOut(500);
        }, 1500);
    });
    $('b').click(function () {
        var x = $(this);
        if (x.attr('href') != '#') {
            $('html').fadeOut();
            setTimeout("location.href='" + x.attr('href') + "'", 500);
        }
        else {
            var i = $(window).scrollTop();
            var tid = setInterval(function () {
                i -= 20;
                $(window).scrollTop(i);
                if (i <= 0) {
                    clearInterval(tid);
                }
            }, 1);
        }
    });
});