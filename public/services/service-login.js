const postUsuario=o=>fetch("http://localhost:3000/usuarios",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((o=>o.body)),getAllUsuarios=o=>fetch("http://localhost:3000/usuarios").then((o=>o.json())),getUsuario=o=>fetch(`http://localhost:3000/usuarios/${o}`).then((o=>o.json())),putUsuario=(o,t)=>fetch(`http://localhost:3000/usuarios/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((o=>o.json()));export const serviceLogin={postUsuario,getAllUsuarios,getUsuario,putUsuario};