let menu = document.querySelector('#menu-icon');
let navlinks = document.querySelector('.nav-items');
console.log(navlinks)

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlinks.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlinks.classList.remove('active');
}