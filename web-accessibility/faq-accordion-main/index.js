const buttons = document.querySelectorAll(".item-header")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const para = button.nextElementSibling

        const plusicon = button.querySelector("#plus-icon")
        const minusicon = button.querySelector("#minus-icon")

        if (para.style.maxHeight) {
            minusicon.style.display = "none"
            plusicon.style.display = "block"
            para.style.maxHeight = null
        }
        else 
        {
            para.style.maxHeight = para.scrollHeight + 'px'
            plusicon.style.display = "none"
            minusicon.style.display = "block"
        }
    })
})