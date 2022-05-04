const postUsuario = async (dados) => { 
    const resp = await fetch(`http://localhost:3000/usuarios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
    return resp.body
}

const getAllUsuarios = async (id) => {
    const resp = await fetch(`http://localhost:3000/usuarios`)
    const dados = await resp.json()
    return dados
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