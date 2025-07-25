const form = document.querySelector(".contact-form")
const successSent = document.querySelector('.sent')

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const textInputs = form.querySelectorAll('input[type="text"], .email, textarea')
    const email = document.getElementById('email')
    const queryType = document.querySelector('input[name="query-type"]:checked')
    const consent = document.getElementById('consent').checked
    const validEmail = document.getElementById('valid-email')

    let isValid = true

    textInputs.forEach((input) => {
        if (input.value.trim() === '') {
            input.nextElementSibling.classList.remove('hide')
            input.classList.add('valid')
            isValid = false
        }else {
            input.nextElementSibling.classList.add('hide')
            input.classList.remove('valid')
        }
    })

    if  (!valid(email.value.trim()) && email.value.trim() !== '') {
        validEmail.classList.remove('hide')
        email.classList.add('valid')
        isValid = false
    }

    if (!queryType) {
        document.getElementById('query-type-valid').classList.remove('hide')
        isValid = false
    }
    else document.getElementById('query-type-valid').classList.add('hide')

    if (consent) document.getElementById('consent-valid').classList.add('hide')
    else {
        document.getElementById('consent-valid').classList.remove('hide')
        isValid = false
    }

    if (isValid) {
        successSent.style.top = '-20rem'
        successSent.style.top = '-.95rem'
    }
})

function valid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    return regex.test(email)
}