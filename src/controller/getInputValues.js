export const getInputValues = () => {
    const produtoImg = document.querySelector("#produtoimginput")
    const produtoNome = document.querySelector("#produtonome")
    const produtoPreco = document.querySelector("#produtopreco")
    const produtoParcelas = document.querySelector("#produtoparcelas")
    const produtoDescricao = document.querySelector("#produtodescricao")

    const inputValues = {
        img: produtoImg.value,
        nome: produtoNome.value,
        preco: produtoPreco.value,
        parcelas: produtoParcelas.value,
        descricao: produtoDescricao.value
    }

    return inputValues
}