const menuBtn = document.getElementById('menu-btn')
const closeMenu = document.getElementById('close-menu')
const screent = document.querySelector('.container')

menuBtn.addEventListener('click', () => {
    screent.classList.add('menu-open')
})

closeMenu.addEventListener('click', () => {
    screent.classList.remove('menu-open')
})

screent.addEventListener('click', (e) => {
    if (e.target === screent) screent.classList.remove('menu-open')
})