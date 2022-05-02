const postUsuario = async (dados) => { 
    const resp = await fetch(`http://localhost:3000/usuarios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
    return resp.body
}

const getAllUsuarios = async (id) => {
    const resp = await fetch(`https://ramonlopz1.github.io/ecommerce/db.json`)
    const dados = await resp.json()
    return dados.usuarios
}

const getUsuario = async (id) => {
    const resp = await fetch(`http://localhost:3000/usuarios/${id}`)
    return await resp.json()
}

const putUsuario = async (dados, id) => { 
    const resp = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
    return await resp.json()
}

export const serviceLogin = {
    postUsuario,
    getAllUsuarios,
    getUsuario,
    putUsuario,
}