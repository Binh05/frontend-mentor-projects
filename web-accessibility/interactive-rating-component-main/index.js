const card = document.querySelector(".card")
const thankyou = document.querySelector(".thank-you-card")

const submit = document.getElementById("submit")

const rates = document.querySelectorAll(".num")
const rating = document.getElementById("rating")

submit.addEventListener("click", () => {
    thankyou.classList.remove("hide")
    card.style.display = "none";
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})