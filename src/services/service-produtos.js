const getProdutos = () => {
    return fetch("http://localhost:3000//")
        .then(resp => resp.json())
}

const postProdutos = (dados) => { 
    return fetch(`http://localhost:3000//`, {
        method: 'POST', 
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(dados)
    })
}

const getProduto = (id) => {
    return fetch(`http://localhost:3000//${id}`)
        .then(resp => resp.json())
}

const putProdutos = (dados, id) => { 
    return fetch(`http://localhost:3000//${id}`, {
        method: 'PUT', 
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(dados)
    }).then( resp => {
        return resp.json()
    })
}

const deleteProduto = (id) => {
    return fetch(`http://localhost:3000//${id}`, {
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