//Togle class active
const navbarNav = document.querySelector('.navbar__nav');

//If hamburger was cliked
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}