import $ from 'jquery';

window.$ = $;

const scrollToElement = (elementID) => {
    const offsetTop = $(elementID)[0].offsetTop;
    const animationDuration = Math.log(offsetTop) * 100;
    console.log(offsetTop)
    $('html, body').animate({
        scrollTop: $(elementID).offset().top
   }, animationDuration, "swing");
}

module.exports = { scrollToElement }