const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const icons = document.querySelector('.icons');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});