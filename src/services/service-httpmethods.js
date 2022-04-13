const listaProdutos = () => {
    return fetch("http://localhost:9000/db.json")
        .then(resp => resp.json())
}

const criaProduto = (dados) => { 
    return fetch(`http://localhost:9000/db.json`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then( resposta => {
        return resposta.body
    })
}

export const httpMethods = {
    listaProdutos,
    criaProduto
}