import { serviceLogin } from "../services/service-login.js"
import { getValuesFromInput } from "./login-controller-getInputValues.js"

const novoUsuario = () => {
    const dadosUsuario = getValuesFromInput()
    const checkAllInputs = dadosUsuario.email && dadosUsuario.pass && dadosUsuario.repeatPass && dadosUsuario.user
    const checkPass = dadosUsuario.pass === dadosUsuario.repeatPass
    
    if (checkAllInputs && checkPass) {
        serviceLogin.postUsuario(dadosUsuario)
    } else {
        console.log("Verifique se voce preencheu todos os campos ou sua senha")
    }
    document.forms[0].reset()
}


/**
 * document.querySelector("#login__form__submit").addEventListener("click", (event) => {
    event.preventDefault()
    window.location.href = "../html/login.html"
})
 */

document.querySelector("#login__form__register").addEventListener("click", (event) => {
    event.preventDefault()
    novoUsuario()
})