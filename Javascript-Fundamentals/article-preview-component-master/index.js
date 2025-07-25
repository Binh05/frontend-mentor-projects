const shareBtn = document.querySelector(".icon-share")
const shareInfos = document.querySelector(".share-container")

shareBtn.addEventListener("click", () => {
    shareInfos.classList.toggle("active")

    shareBtn.classList.toggle("icon-active")
    shareBtn.classList.toggle("icon-active-img")
})