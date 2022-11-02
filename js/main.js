

$(() => {
    $('body').prepend(`
    <div class="op">
        <img src="./img/morphinae_logo.webp" class="logo">
        <div class="logo_text">MORPHINAE</div>
    </div>
    `);

    setTimeout(() => {
        $('.op').fadeOut(500);
    }, 1500);
    //location.reload();

    // $('.nav_icon').click(() => {
    //     // $('.nav_icon').toggleClass('.icon_move_left');
    //     $('.nav_list').slideToggle(300);
    // })
})