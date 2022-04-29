const getProdutos = () => {
    return fetch("https://ecommerce-rmndev.web.app/produtos")
        .then(resp => resp.json())
}

const postProdutos = (dados) => { 
    return fetch(`https://ecommerce-rmndev.web.app/produtos`, {
        method: 'POST', 
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(dados)
    })
}

const getProduto = (id) => {
    return fetch(`https://ecommerce-rmndev.web.app/produtos/${id}`)
        .then(resp => resp.json())
}

const putProdutos = (dados, id) => { 
    return fetch(`https://ecommerce-rmndev.web.app/produtos/${id}`, {
        method: 'PUT', 
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(dados)
    }).then( resp => {
        return resp.json()
    })
}

const deleteProduto = (id) => {
    return fetch(`https://ecommerce-rmndev.web.app/produtos/${id}`, {
        method: 'DELETE', 
    })
}

const uploadProdutos = (dados) => {
    return fetch(dados.url, {
        method: 'POST',
        body: dados.formData,
        
    });
}

export const serviceProdutos = {
    getProdutos,
    postProdutos,
    getProduto,
    putProdutos,
    deleteProduto,
    uploadProdutos
}