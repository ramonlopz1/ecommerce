const listaProdutos=()=>fetch("http://localhost:3000/produtos").then((t=>t.json())),criaProduto=t=>fetch("http://localhost:3000/produtos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.body));export const httpMethods={listaProdutos,criaProduto};