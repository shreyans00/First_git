burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
sidebar = document.querySelector('.sidebar')
nav = document.querySelector('.nav')

burger.addEventListener('click',()=>{
    sidebar.classList.toggle('v-class-responsive');
    nav.classList.toggle('v-class-responsive');
    navbar.classList.toggle('h-nav-responsive');
})