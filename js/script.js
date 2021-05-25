const navLinks = document.querySelector(".nav-links-res");
const hamBurger = document.querySelector(".hamburger-btn");
const toggleImg = document.querySelector("#toggle-img");

hamBurger.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    if (isOpen) {
        toggleImg.src = './images/icon-close.svg';
    } else {
        toggleImg.src = './images/icon-hamburger.svg';
    }
});