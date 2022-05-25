const getProdutos = async () => {
    try {
        const resp = await fetch("https://ramonlopz1.github.io/ecommerce/db.json")
        const dados = await resp.json()
        return dados.produtos
    } catch (e) {
        console.error("Erro encontrado: " + e.message)
    }
}

const postProdutos = (dados) => {
    return fetch(`http://localhost:3000/produtos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
}

const getProduto = async (id) => {

    try {
        const resp = await fetch(`https://ramonlopz1.github.io/ecommerce/db.json`)
        const dados = await resp.json()
        const produtos = dados.produtos
        return produtos[id++] // incrementa 1 pois o índice começa em 0 e o id do produto começa em 1
    } catch (e) {
        console.error("Erro encontrado: " + e.message)
    }
}

const putProdutos = async (dados, id) => {
    try {
        const resp = await fetch(`http://localhost:3000/produtos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        })
        return await resp.json()
    } catch (e) {
        console.error("Erro encontrado: " + e.message)
    }
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