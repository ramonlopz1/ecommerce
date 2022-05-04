const getProdutos = async () => {
    const resp = await fetch("http://localhost:3000/produtos")
    const dados = await resp.json()
    return dados
}

const postProdutos = (dados) => { 
    return fetch(`http://localhost:3000/produtos`, {
        method: 'POST', 
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(dados)
    })
}

const getProduto = async (id) => {
    const resp = await fetch(`http://localhost:3000/produtos/${id}`)
    return await resp.json()
}

const putProdutos = async (dados, id) => { 
    const resp = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
    return await resp.json()
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