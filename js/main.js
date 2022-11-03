$(() => {
    $('body').prepend(`
    <div class="op">
        <img src="./img/morphinae_logo.webp" class="logo">
        <div class="logo_text">MORPHINAE</div>
    </div>
    `);
    $('body').ready(() => {
        $('.op').fadeOut(500);
    });
});