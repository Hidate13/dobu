//togle class active

const navbarNav = document.querySelector('.navbar-nav');

// when hamburger menu onclick
document.querySelector('#ham-menu').onclick = () =>{
    navbarNav.classList.toggle('active');
};

//click outside the sidebar
const ham = document.querySelector('#ham-menu');

document.addEventListener('click', function(e){
    if(!ham.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove('active');
})

