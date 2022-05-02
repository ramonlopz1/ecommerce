import { serviceLogin } from "../services/service-login.js"
import { getValuesFromInput } from "./login-controller-getInputValues.js"

const novoUsuario = async () => {
    const dadosUsuario = getValuesFromInput()
    
    const checkAllInputs = dadosUsuario.email && dadosUsuario.pass && dadosUsuario.repeatPass && dadosUsuario.user
    const checkPass = dadosUsuario.pass === dadosUsuario.repeatPass
    
    if (checkAllInputs && checkPass) {
        await serviceLogin.postUsuario(dadosUsuario)
    } else {
        console.log("Verifique se voce preencheu todos os campos ou sua senha")
    }
    document.forms[1].reset()
}


/**
 * document.querySelector("#login__form__submit").addEventListener("click", (event) => {
    event.preventDefault()
    window.location.href = "../html/login.html"
})
 */

document.querySelector("#cadastro__form__cadastrar").addEventListener("click", (event) => {
    event.preventDefault()
    novoUsuario()
})