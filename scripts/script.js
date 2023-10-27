let lastScroll = 0;
const defaultOffset = 1800;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('show');

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {

        header.classList.add('show');
        console.log('down');
    }
    else if (scrollPosition() < lastScroll && containHide()) {

        console.log('up');
        header.classList.remove('show');
    }
    lastScroll = scrollPosition();
})
let lastScroll1 = 0;
const defaultOffset1 = 100;
const header1 = document.querySelector('.welcome');

const scrollPosition1 = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide1 = () => header.classList.contains('welcome_anim');

window.addEventListener('scroll', () => {
    if (scrollPosition1() > lastScroll1 && !containHide1() && scrollPosition1() > defaultOffset1)
    {
        header1.classList.add('welcome_anim');
        console.log('down');
    }
    else {

        console.log('up');
        header1.classList.remove('welcome_anim');
    }
    lastScroll1 = scrollPosition1();
})
$(function () {
    let header = $('.to');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            header.addClass('to_anim');
        } else {
            header.removeClass('to_anim');
        }
    });
});