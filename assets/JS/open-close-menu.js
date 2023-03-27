// Open menu
let openMenu = document.getElementById('open-menu');
let menu     = document.getElementById('responsive-list');

openMenu.addEventListener('click', ()=>{
    menu.classList.add('menu-active');
    openMenu.classList.add('hide-menu-button');
});

// Close menu
let closeMenu = document.getElementById('close-button');

closeMenu.addEventListener('click', ()=>{
    menu.classList.remove('menu-active');
    openMenu.classList.remove('hide-menu-button');
})