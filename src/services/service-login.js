const postUsuario = (dados) => { 
    return fetch(`http://localhost:3000/usuarios`, {
        method: 'POST', 
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(dados)
    }).then( resp => {
        return resp.body
    })
}

const getUsuario = (id) => {
    return fetch(`http://localhost:3000/usuarios/${id}`)
        .then(resp => resp.json())
}

const putUsuario = (dados, id) => { 
    return fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'PUT', 
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(dados)
    }).then( resp => {
        return resp.json()
    })
}

export const serviceLogin = {
    postUsuario,
    getUsuario,
    putUsuario,
}