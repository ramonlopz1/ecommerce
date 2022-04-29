const postUsuario = (dados) => { 
    return fetch(`https://ecommerce-rmndev-default-rtdb.firebaseio.com/usuarios`, {
        method: 'POST', 
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(dados)
    }).then( resp => {
        return resp.body
    })
}

const getAllUsuarios = (id) => {
    return fetch(`https://ecommerce-rmndev-default-rtdb.firebaseio.com/usuarios`)
        .then(resp => resp.json())
}

const getUsuario = (id) => {
    return fetch(`https://ecommerce-rmndev-default-rtdb.firebaseio.com/usuarios/${id}`)
        .then(resp => resp.json())
}

const putUsuario = (dados, id) => { 
    return fetch(`https://ecommerce-rmndev-default-rtdb.firebaseio.com/usuarios/${id}`, {
        method: 'PUT', 
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(dados)
    }).then( resp => {
        return resp.json()
    })
}

export const serviceLogin = {
    postUsuario,
    getAllUsuarios,
    getUsuario,
    putUsuario,
}