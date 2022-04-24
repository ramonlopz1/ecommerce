const getProdutos = () => {
    return fetch("http://localhost:3000/produtos")
        .then(resp => resp.json())
}

const postProdutos = (dados) => { 
    return fetch(`http://localhost:3000/produtos`, {
        method: 'POST', 
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(dados)
    }).then( resp => {
        return resp.body
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