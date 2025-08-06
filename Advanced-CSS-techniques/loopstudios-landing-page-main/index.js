const menuBtn = document.querySelector('.menu')
const mobileBar = document.querySelector('.nav-container')

menuBtn.addEventListener('click', () => {
    mobileBar.classList.add('menu-active')
})

const closeBtn = document.querySelector('.close')

closeBtn.addEventListener('click', () => {
    mobileBar.classList.remove('menu-active')
})