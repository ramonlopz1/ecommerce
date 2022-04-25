import { serviceProdutos } from "../services/service-produtos.js";

const deletarProduto = () => {
    const btnDelete = document.querySelector(".cards__btns__deletar")

    serviceProdutos.deleteProduto()
}
