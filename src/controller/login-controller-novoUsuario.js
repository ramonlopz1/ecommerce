import { serviceLogin } from "../services/service-login.js"
import { getValuesFromInput } from "./login-controller-getInputValues.js"

const novoUsuario = () => {
    const novoUsuario = getValuesFromInput()
    const checkPasss = novoUsuario.pass === novoUsuario.repeatPass

    if (novoUsuario && checkPasss) {
        serviceLogin.postUsuario(novoUsuario)
    } else {
        console.log("Verifique se voce preencheu todos os campos ou sua senha")
    }
    document.forms[0].reset()
}


document.querySelector("#login__form__submit").addEventListener("click", (event) => {
    event.preventDefault()
    window.location.href = "../html/login.html"
})

document.querySelector("#login__form__register").addEventListener("click", (event) => {
    event.preventDefault()
    novoUsuario()
})