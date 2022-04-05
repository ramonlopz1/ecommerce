const formLogin = document.querySelector("#form__login")
const btnAcessar = document.querySelector("#login__form__submit")
const btnCadastrar = document.querySelector("#login__form__register")

const loginDiv = document.querySelector("#form__input__user")

const Register = (event) => {
    event.preventDefault()


    // Cria div
    const emailDiv = document.createElement("div")
    emailDiv.setAttribute("id", "form__input__email")

    // Cria label
    const emailDivLabel = document.createElement("label")
    emailDivLabel.setAttribute("for", "input_email")

    const emailDivLabelIcon = document.createElement("i")
    emailDivLabelIcon.classList.add("fa-solid")
    emailDivLabelIcon.classList.add("fa-envelopes-bulk")
    emailDivLabel.appendChild(emailDivLabelIcon)

    // Cria input
    const emailDivInput = document.createElement("input")
    emailDivInput.setAttribute("id", "login__form__email")
    emailDivInput.setAttribute("placeholder", "Insira seu e-mail")

    //

    emailDiv.appendChild(emailDivLabel)
    emailDiv.appendChild(emailDivInput)

    loginDiv.insertAdjacentElement("beforebegin", emailDiv)
    
}

btnCadastrar.addEventListener('click', (event) => {
    Register(event)
})

