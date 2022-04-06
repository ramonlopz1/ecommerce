const formLogin = document.querySelector("#form__login")
const btnAcessar = document.querySelector("#login__form__submit")
const btnCadastrar = document.querySelector("#login__form__register")

const loginDiv = document.querySelector("#form__input__user")
const passDiv = document.querySelector("#form__input__pass")


const buildElements = () => {
// Cria div
    const emailDiv = document.createElement("div")
    emailDiv.setAttribute("id", "form__input__email")

    // Cria label
    const emailDivLabel = document.createElement("label")
    emailDivLabel.setAttribute("for", "input_email")

    const emailDivLabelIcon = document.createElement("i")
    emailDivLabelIcon.classList.add("fa-solid")
    emailDivLabelIcon.classList.add("fa-envelopes-bulk")
    

    // Cria input
    const emailDivInput = document.createElement("input")
    emailDivInput.setAttribute("id", "login__form__email")
    emailDivInput.setAttribute("placeholder", "Insira seu e-mail")
    //

    emailDiv.appendChild(emailDivLabel)
    emailDivLabel.appendChild(emailDivLabelIcon)
    emailDiv.appendChild(emailDivInput)

    loginDiv.insertAdjacentElement("beforebegin", emailDiv)
}

let inputQtd = 0;

const Register = (event) => {
    event.preventDefault()
    
    if (inputQtd === 0) {
        buildElements()
        inputQtd++;
    }
}

btnCadastrar.addEventListener('click', (event) => {
    Register(event)
})

