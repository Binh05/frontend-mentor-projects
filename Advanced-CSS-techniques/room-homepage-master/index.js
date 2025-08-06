// menu active
const menuBtn = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')
const screent = document.querySelector('.content')

menuBtn.addEventListener('click', () => {
    screent.classList.add('menu-active')
})

closeBtn.addEventListener('click', () => {
    screent.classList.remove('menu-active')
})

// button selector

const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const slides = document.querySelectorAll('.slide-wrapper')

const step = 100;
const totalSlide = 3;
let currentSlide = 0;

// auto slide after 5s

let autoSlide = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlide
    updateSlide(currentSlide)
}, 5000)

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlide
        updateSlide(currentSlide)
    }, 5000)
}

// button update slide

function updateSlide(index) {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${index * step}%)`
    })
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide-1 + totalSlide) % totalSlide
    updateSlide(currentSlide)
    resetAutoSlide()
})

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlide
    updateSlide(currentSlide)
    resetAutoSlide()
})