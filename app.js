document.addEventListener("DOMContentLoaded", () => {

    const body = document.querySelector('body');
    const hamburgerBtn = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navigation--mobile');
    const header = document.querySelector('header');

    hamburgerBtn.addEventListener('click', () => {
        if (navMenu.classList.contains('roll')) {
            navMenu.classList.remove('roll');
            header.classList.add('bgd');
            body.classList.add('blocked-y');
        } else {
            navMenu.classList.add('roll');
            header.classList.remove('bgd');
            body.classList.remove('blocked-y');
        }
    })



})