const mostrarInputsCadastro = () => {
    const formLogin = document.querySelector("#form__login")
    const formCadastro = document.querySelector("#form__cadastro")

    formLogin.style.display = "none"
    formCadastro.style.display = "flex"
}

document.querySelector("#login__form__cadastrar").addEventListener('click', (event) => {
    event.preventDefault()
    mostrarInputsCadastro()
})

document.querySelector("#cadastro__form__cancelar").addEventListener('click', (event) => {
    event.preventDefault()
    window.location.href = "../html/login.html"
})