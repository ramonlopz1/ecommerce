const getProdutos = () => {
    return fetch("https://ecommerce-rmndev-default-rtdb.firebaseio.com/")
        .then(resp => resp.json())
}

const postProdutos = (dados) => { 
    return fetch(`https://ecommerce-rmndev-default-rtdb.firebaseio.com/`, {
        method: 'POST', 
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(dados)
    })
}

const getProduto = (id) => {
    return fetch(`https://ecommerce-rmndev-default-rtdb.firebaseio.com/${id}`)
        .then(resp => resp.json())
}

const putProdutos = (dados, id) => { 
    return fetch(`https://ecommerce-rmndev-default-rtdb.firebaseio.com/${id}`, {
        method: 'PUT', 
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(dados)
    }).then( resp => {
        return resp.json()
    })
}

const deleteProduto = (id) => {
    return fetch(`https://ecommerce-rmndev-default-rtdb.firebaseio.com/${id}`, {
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