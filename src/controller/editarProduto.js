import { serviceProdutos } from '../services/service-produtos.js'
import { getInputValues } from '../controller/getInputValues.js'


// refatorar usando funcao getInputValues
const inserirValoresNosInputs = (produto) => {
    const inputImg = document.querySelector("#produtoimginput")
    const inputNome = document.querySelector("#produtonome")
    const inputPreco = document.querySelector("#produtopreco")
    const inputParcelas = document.querySelector("#produtoparcelas")
    const inputDescricao = document.querySelector("#produtodescricao")

    inputImg.filename = produto.img
    inputNome.value = produto.nome
    inputPreco.value = produto.preco
    inputParcelas.value = produto.parcelas
    inputDescricao.value = produto.descricao
}

// try catch
    

const btnPesquisar = document.querySelector('#btns__pesquisar')
const spanErro = document.querySelector('#produtopesquisa__erro')
const ID = document.querySelector('#produtopesquisainput')

btnPesquisar.addEventListener('click', (event) => {
    event.preventDefault()

    
    serviceProdutos.getProduto(ID.value)
        .then(produto => {
            inserirValoresNosInputs(produto)
        })
})

const btnConcluir = document.querySelector('#btns__concluir')



btnConcluir.addEventListener('click', (event) => {
    event.preventDefault()

    const produtoEditado = getInputValues()
    serviceProdutos.putProdutos(produtoEditado, ID.value)

})