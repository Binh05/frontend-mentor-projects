const submitBtn = document.getElementById("submit")
const signUpForm = document.querySelector(".sign-up-form")
const successForm = document.querySelector(".success-container")
const dismissBtn = document.getElementById("dismiss")
const emailInput = document.querySelector(".input-email input")
const notiValid = document.querySelector(".title-container .noti")
const emailsuccess = document.querySelector(".success-container p span")

function validEmail(email) {
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    return regex.test(email)
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(emailInput.value)

    if (validEmail(emailInput.value)) {
        signUpForm.classList.add("hide")
        successForm.classList.remove("hide")
        emailsuccess.innerHTML = emailInput.value
        emailInput.classList.remove("valid")
        emailInput.value = ''
        notiValid.classList.remove("active")
    }else {
        notiValid.classList.add("active")
        emailInput.classList.add("valid")
    }
})

dismissBtn.addEventListener("click", () => {
    signUpForm.classList.toggle("hide")
    successForm.classList.toggle("hide")
    emailsuccess.innerHTML = ''
})
