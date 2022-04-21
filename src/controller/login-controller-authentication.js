import { serviceLogin } from '../services/service-login.js'


// colocar evento no botan entrar
const checkSession = () => {
    const localSt = sessionStorage.getItem("usuarioLogado")

    if (localSt === "true") {
        window.location.href = '../html/painel.html'
    }
}

checkSession()

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

const autenticarCredenciais = () => {
    
}


const btnLogin = document.querySelector("#login__form__submit")
btnLogin.addEventListener("click", (event) => {
    event.preventDefault()
    checkCredenciaisInputEBancoDeDados()
})
