const inputImg = document.querySelector("#produtoimginput")
const inputNome = document.querySelector("#produtonome")
const inputPreco = document.querySelector("#produtopreco")
const inputParcelas = document.querySelector("#produtoparcelas")
const inputDescricao = document.querySelector("#produtodescricao")

export const getValuesFromInput = () => {
    const inputValues = {
        img: inputImg.value,
        nome: inputNome.value,
        preco: inputPreco.value,
        parcelas: inputParcelas.value,
        descricao: inputDescricao.value
    }

    return inputValues
}

export const getValuesFromDB = (produto) => {
    inputImg.filename = produto.img
    inputNome.value = produto.nome
    inputPreco.value = produto.preco
    inputParcelas.value = produto.parcelas
    inputDescricao.value = produto.descricao
}