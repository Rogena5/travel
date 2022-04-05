let searchBtn = document.getElementById ('searchBtn');
let searchBar = document.getElementById ('searchBar');
let formBtn = document.getElementById ('loginBtn');
let loginForm = document.querySelector ('.login-form-container');
let formClose = document.querySelector ('#form-close');
let menuBars = document.getElementById ('menu-bars');
let navbar = document.querySelector ('.navbar')
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {searchBtn.classList.remove('fa-times');
searchBar.classList.remove('active');}

searchBtn.addEventListener('click' , () => {
searchBtn.classList.toggle('fa-times');
searchBar.classList.toggle('active');
})

formBtn.addEventListener('click' , () => {
    loginForm.classList.add('active');})

formClose.addEventListener('click' , () => {
        loginForm.classList.remove('active');})

menuBars.addEventListener('click' , () => {
    menuBars.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
    })

    videoBtn.forEach(btn =>{
    btn.addEventListener('click' , () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');

        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    }) 
    });

