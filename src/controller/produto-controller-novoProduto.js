import { serviceProdutos } from "../services/service-produtos.js"
import { getValuesFromInput } from "./produto-controller-getInputValues.js"

const novoProduto = () => {
    const produtos = JSON.parse(localStorage.getItem("produtos")) || []
    const novoProduto = getValuesFromInput()
    const addNovoProduto = [...produtos, novoProduto]

    if (novoProduto) {
        localStorage.setItem('produtos', JSON.stringify(addNovoProduto))

        // Faz um post via fetch api, enviando json para db.json
        serviceProdutos.postProdutos(novoProduto)

    } else {
        console.log("preencha todos os campos")
    }

    document.forms[0].reset()
}

document.querySelector("#btns__cadastrar").addEventListener("click", (event) => {
    event.preventDefault()
    novoProduto()
    window.location.reload()
})

document.querySelector("#btns__cancelar").addEventListener("click", (event) => {
    event.preventDefault()
    window.location.href = "../html/painel.html"
})