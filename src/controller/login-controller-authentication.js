import { serviceLogin } from '../services/service-login.js'

    


const btnLogin = document.querySelector("#login__form__submit")
btnLogin.addEventListener("click", (event) => {
    event.preventDefault()
    serviceLogin.getUsuario(1)
        .then(user => {
            console.log(user)
        })
})
