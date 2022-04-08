

const btnCadastrar = document.querySelector("#login__form__register")

const mostrarInputsCadastro = () => {
    const inputEmail = document.querySelector("#form__input__email")
    const inputRepeatPass = document.querySelector("#form__input__repeatpass")

    inputEmail.style.display = "flex"
    inputRepeatPass.style.display = "flex"
}

btnCadastrar.addEventListener('click', event => {
    event.preventDefault()
    mostrarInputsCadastro()
})