import { serviceProdutos } from '../services/service-produtos.js'
import { getValuesFromInput, getValuesFromDB } from './produto-controller-getInputValues.js'

const spanErro = document.querySelector('#produtopesquisa__erro')
const ID = document.querySelector('#produtopesquisainput')

document.querySelector('#btns__pesquisar')
.addEventListener('click', (event) => {
    event.preventDefault()
    serviceProdutos.getProduto(ID.value)
        .then(produto => {
            getValuesFromDB(produto)
        })
})

document.querySelector('#btns__concluir').addEventListener('click', (event) => {
    event.preventDefault()

    const produtoEditado = getValuesFromInput()
    serviceProdutos.putProdutos(produtoEditado, ID.value)

    document.forms[0].reset()
})

document.querySelector("#btns__cancelar").addEventListener("click", (event) => {
    event.preventDefault()
    window.location.href = "../html/painel.html"
})