// show/hide nav menu
const menu = document.querySelector('.navList');
const closeMenu = document.querySelector('#close-menu-btn');
const openMenu = document.querySelector('#open-menu-btn');

openMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', closeToggleMenu);


function toggleMenu () {
    menu.style.display = 'block';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
}

function closeToggleMenu () {
    menu.style.display = 'none';
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
}