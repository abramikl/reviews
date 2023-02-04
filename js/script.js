const buttonCleareElem = document.querySelector(".button__cleare")
const textElem = document.querySelector(".textarea__text")
const nameElem = document.querySelector(".input__name")
const buttonReviewsElem = document.querySelector(".button__reviews")
const responsesTitleElem = document.querySelector(".responses__title")


function delTextValue() {
    textElem.value = "";
    nameElem.value = "";
}


function newElemTop ()  {
    const newElem = document.createElement("div");

    newElem.className = "responses__js"

    newElem.innerHTML = `
    <h3 class="responses__name">
        ${nameElem.value}
    </h3>
    <p class="responses__text">${textElem.value}</p>`
    responsesTitleElem.after(newElem)
    delTextValue()
}
buttonCleareElem.addEventListener("click", delTextValue)
buttonReviewsElem.addEventListener("click", newElemTop)
