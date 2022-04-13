import { httpMethods } from "../services/service-httpmethods.js"

const novoProduto = () => {
    const produtoImg = document.querySelector("#produtoimginput")
    const produtoNome = document.querySelector("#produtonome")
    const produtoPreco = document.querySelector("#produtopreco")
    const produtoParcelas = document.querySelector("#produtoparcelas")
    const produtoDescricao = document.querySelector("#produtodescricao")

    const produtos = JSON.parse(localStorage.getItem("produtos")) || []

    const novoProduto = {
        img: produtoImg.value,
        nome: produtoNome.value,
        preco: produtoPreco.value,
        parcelas: produtoParcelas.value,
        descricao: produtoDescricao.value
    }

    const atualizaProdutosLocalStorage = [...produtos, novoProduto]

    if (novoProduto.img && novoProduto.nome &&
        novoProduto.preco && novoProduto.descricao) {

        localStorage.setItem('produtos', JSON.stringify(atualizaProdutosLocalStorage))

        httpMethods.criaProduto(novoProduto)

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