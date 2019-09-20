$(document).ready(function () {
    // $('.main_btna, .main_btn, a[href="#sheldure"]').on('click', function (e) {
    //     $('.overlay').animate({
    //         opacity: "toggle"
    //     }, 1000);
    //     $('.modal').animate({
    //         height: "toggle"
    //     }, 1500);
    // });
    // $('.close').on('click', function (e) {
    //     $('.overlay').animate({
    //         opacity: "toggle"
    //     }, 1000);
    //     $('.modal').animate({
    //         height: "toggle"
    //     }, 1500);
    // });
    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function () {
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);
    });

    $('.close').click(function () {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });
});