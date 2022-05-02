const produto = document.querySelector(".container__produto__info")
const btnView = document.querySelector("#header_logo")

btnView.addEventListener('click' , (e) => {
    e.preventDefault()
    console.log(produto)
})