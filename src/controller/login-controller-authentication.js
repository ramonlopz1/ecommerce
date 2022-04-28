import { serviceLogin } from '../services/service-login.js'

const checkCredenciaisInputEBancoDeDados = () => {
    return serviceLogin.getAllUsuarios().then(usuarios => {
        usuarios.forEach(usuario => {
            const inputEmail = document.querySelector('#input__user')
            const inputPass = document.querySelector('#login__form__pass')

            const checkEmail = usuario.email === inputEmail.value
            const checkPass = usuario.pass === inputPass.value

            if(checkEmail && checkPass) {
                window.location.href = '../html/painel.html'
                sessionStorage.setItem("usuarioLogado", JSON.parse("true"))
            }
        })
    })
}


const btnLogin = document.querySelector("#login__form__submit")
btnLogin.addEventListener("click", (event) => {
    event.preventDefault()
    checkCredenciaisInputEBancoDeDados()
})
