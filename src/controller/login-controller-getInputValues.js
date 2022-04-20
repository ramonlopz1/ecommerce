const inputEmail = document.querySelector("#cadastro__form__email")
const inputUser = document.querySelector("#cadastro__input__user")
const inputPass = document.querySelector("#cadastro__form__pass")
const inputRepeatPass = document.querySelector("#cadastro__form__repeatpass")

export const getValuesFromInput = () => {
    const inputValues = {
        email: inputEmail.value,
        user: inputUser.value,
        pass: inputPass.value,
        repeatPass: inputRepeatPass.value,
    }

    return inputValues
}
