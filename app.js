document.addEventListener("DOMContentLoaded", () => {

    const hamburgerBtn = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navigation--mobile');
    const header = document.querySelector('header');

    hamburgerBtn.addEventListener('click', () => {
        if (navMenu.classList.contains('roll')) {
            navMenu.classList.remove('roll');
            header.classList.add('bgd');
        } else {

            navMenu.classList.add('roll');
            header.classList.remove('bgd');
        }
    })



})