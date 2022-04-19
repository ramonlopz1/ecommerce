import { serviceProdutos } from "../services/service-produtos.js"
import { getInputValues } from "./getInputValues.js"

const novoProduto = () => {
    const novoProduto = getInputValues()

    const produtos = JSON.parse(localStorage.getItem("produtos")) || []

    const addNovoProduto = [...produtos, novoProduto]

    if (novoProduto.img && novoProduto.nome &&
        novoProduto.preco && novoProduto.descricao) {

        localStorage.setItem('produtos', JSON.stringify(addNovoProduto))

        // Faz um post via fetch api, enviando
        serviceProdutos.postProdutos(novoProduto)

    } else {
        console.log("preencha todos os campos")
    }

    document.forms[0].reset()
}

const btnAdd = document.querySelector("#btns__cadastrar")

btnAdd.addEventListener("click", (event) => {
    event.preventDefault()
    novoProduto()
})