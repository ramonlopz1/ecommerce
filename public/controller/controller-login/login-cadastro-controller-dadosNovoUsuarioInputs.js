export const dadosNovoUsuarioInputs=()=>{const e=document.querySelector("#cadastro__form__email"),a=document.querySelector("#cadastro__input__user"),s=document.querySelector("#cadastro__form__pass"),o=document.querySelector("#cadastro__form__repeatpass"),r={email:e.value,user:a.value,pass:s.value,repeatPass:o.value};if(r.email&&r.pass&&r.repeatPass&&r.user&&r.pass===r.repeatPass)return r;console.log("Por favor, preencha todos os campos.")};