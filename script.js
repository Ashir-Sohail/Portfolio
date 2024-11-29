let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


const typed = new Typed('.multiple-text',{
     strings:['Frontend Developer','Backend Developer', 'Problem Solver','Team Player','Laravel Developer'],
     typeSpeed:100,
     backSpeed:100,
     backDelay:1000,
     loop:true,
});