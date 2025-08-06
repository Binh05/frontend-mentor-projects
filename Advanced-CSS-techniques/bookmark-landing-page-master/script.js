const menuBtn = document.querySelector('.menu')
const menuOpen = document.querySelector('.nav-header')
const closeBtn = document.querySelector('.close')

menuBtn.addEventListener('click', () => {
    menuOpen.classList.add('nav-header__open')
    menuBtn.style.display = 'none'
})

closeBtn.addEventListener('click', () => {
    menuOpen.classList.remove('nav-header__open')
    menuBtn.style.display = 'block'
})

// feature

const featureControl = document.querySelector('.features-tabs')
let featureActive = document.querySelector('.features__tab--active')
let ftCardActive = document.querySelector('.feature-card--active')

const ftCards = document.querySelectorAll('.feature-card')
let index = 0

featureControl.addEventListener('click', (e) => {
    const clickedEl = e.target;

    const clickedTab = clickedEl.closest('.features__tab')

    if (!clickedTab || clickedTab === featureActive || clickedTab === featureControl)
        return

    featureActive.classList.remove('features__tab--active')
    clickedTab.classList.add('features__tab--active')

    featureActive = clickedTab

    index = Number(featureActive.value) - 1

    ftCardActive.classList.remove('feature-card--active')
    ftCardActive = ftCards[index]
    ftCardActive.classList.add('feature-card--active')
})

// faq

const acdContainer = document.querySelector('.accordion')

acdContainer.addEventListener('click', (e) => {
    const clicked = e.target
    const acdClicked = clicked.closest('.accordion__btn')
    const acdArrow = acdClicked.querySelector('.toggle-icon')
    
    if (!acdClicked) return

    const acdText = acdClicked.nextElementSibling

    if (acdText.style.maxHeight) {
        acdText.style.maxHeight = null
        acdArrow.classList.remove('toggle-icon--active')
    }else {
        acdText.style.maxHeight = `${acdText.scrollHeight}px`
        acdArrow.classList.add('toggle-icon--active')
    }
})

// form valid

const form = document.querySelector('.cta__form')
const email = document.querySelector('.form__input input')

const checkValidEmail = (emailValid) => {
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    return regex.test(emailValid)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const valid = checkValidEmail(email.value)

    if (!valid) {
        form.classList.add('is-valid')
        return
    }

    form.classList.remove('is-valid')
})