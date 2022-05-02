const getProdutos = () => {
    return fetch("https://ramonlopz1.github.io/ecommerce/db.json")
        .then(resp => resp.json())
        .then(dados => dados.produtos)
}

const postProdutos = (dados) => { 
    return fetch(`http://localhost:3000/produtos`, {
        method: 'POST', 
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(dados)
    })
}

const getProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`)
        .then(resp => resp.json())
}

const putProdutos = (dados, id) => { 
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT', 
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(dados)
    }).then( resp => {
        return resp.json()
    })
}

const deleteProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
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