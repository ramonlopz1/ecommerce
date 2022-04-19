import { serviceProdutos } from '../services/service-produtos.js'

const getDadosProduto = () => {
    serviceProdutos.getProduto(1)
        .then(produto => {
            console.log(produto)
        })
}

