

$(()=>{
    $('body').prepend(`
    <div class="op">
        <img src="./img/morphinae_logo.webp" class="logo">
        <div class="logo_text">MORPINAE</div>
    </div>
    `);

    setTimeout(()=>{
        $('.op').fadeOut(1500);
    }, 3000);
    //location.reload();
})