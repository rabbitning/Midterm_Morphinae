$(() => {
    // setTimeout(() => {
    //     $('.op').fadeOut(800);
    // }, 4500);
    // $('body').fadeIn(1000);







    $(document).mousemove((e) => {
        // $('.follow_ms').css({ 'left': e.pageX - 50, 'top': e.pageY - 50 });
        $('.bgimg').css({ 'left': ((-0.05 * $(window).width()) + ((e.pageX - ($(window).width() / 2)) / -20)), 'top': ((-0.5 * $(window).height()) + ((e.pageY - ($(window).height() / 2)) / -20)) });
        // console.log(((-0.1 * $(window).width()) + ((e.pageX - ($(window).width() / 2)) / -10)));
    });

    $('.close_btn').click(() => {
        $('.menu').css('display', 'none');
        // $('body').prepend(`
        // <div class="mask">
        // </div>
        // `);
        setTimeout(() => {
            // $('.mask').remove();
            $('.menu').css('display', 'block');
        }, 50);
    });
    $('.content').hover(() => {
        setTimeout(() => {
            // $('.menu_item').css('display', 'flex');
            $('.menu_content_item').css('display', 'flex');
            $('.menu_contact').css('display', 'flex');
        }, 2000);
    }, () => {
        // $('.menu_item').fadeOut(200);
        $('.menu_content_item').css('display', 'none');
        $('.menu_contact').css('display', 'none');
    });
    // $('.menu').hover(() => {
    //     setTimeout(() => {
    //         $('.menu').append(`
    //         <div class="menu_header menu_item">
    //             <img src="./img/morphinae_logo_white.webp" alt="" class="menu_header_item icon">
    //             <div class="menu_header_item title">MORPHINAE</div>
    //             <div class="menu_header_item close_btn">╳</div>
    //         </div>
    //         <div class="menu_content menu_item">
    //             <a href="./story.html" class="menu_content_story menu_content_item">
    //                 <div class="story_title">Story</div>
    //             </a>
    //             <a href="./system.html" class="menu_content_system menu_content_item">
    //                 <div class="system_title">System</div>
    //             </a>
    //         </div>
    //         <div class="menu_contact menu_item">
    //             <a href="./contact.html" class="contact_text">Contact Us</a>
    //         </div>
    //         `)
    //     }, 800);
    // },
    //     () => {
    //         $('.menu').empty();
    //     }
    // );



    // $('.content').hover(()=>{

    //     setTimeout(()=>{
    //         $('.menu').css('display', 'block');
    //     }, 2000);
    // },()=>{
    //     $('.menu').css('display', 'none');
    // }
    // );


});