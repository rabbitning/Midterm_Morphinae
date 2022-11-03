$(() => {
    $('body').prepend(`
    <div class="op">
        <img src="./img/morphinae_logo.webp" class="logo">
        <div class="logo_text">MORPHINAE</div>
    </div>
    `);
    $('img').ready(() => {
        setTimeout(() => {
            $('.op').fadeOut(500);
        }, 1500);
    });
});