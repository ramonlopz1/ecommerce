const inputEmail = document.querySelector("#login__form__email")
const inputUser = document.querySelector("#input__user")
const inputPass = document.querySelector("#login__form__pass")
const inputRepeatPass = document.querySelector("#login__form__repeatpass")

export const getValuesFromInput = () => {
    const inputValues = {
        email: inputEmail.value,
        user: inputUser.value,
        pass: inputPass.value,
        repeatPass: inputRepeatPass.value,
    }

    return inputValues
}
