//togle class active

const navbarNav = document.querySelector('.navbar-nav');

// when hamburger menu onclick
document.querySelector('#ham-menu').onclick = () =>{
    navbarNav.classList.toggle('active');
};