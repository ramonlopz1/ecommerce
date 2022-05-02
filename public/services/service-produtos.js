const getProdutos=()=>fetch("https://ramonlopz1.github.io/ecommerce/db.json").then((o=>o.json())).then((o=>o.produtos)),postProdutos=o=>fetch("http://localhost:3000/produtos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),getProduto=o=>fetch(`http://localhost:3000/produtos/${o}`).then((o=>o.json())),putProdutos=(o,t)=>fetch(`http://localhost:3000/produtos/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((o=>o.json())),deleteProduto=o=>fetch(`http://localhost:3000/produtos/${o}`,{method:"DELETE"}),uploadProdutos=o=>fetch(o.url,{method:"POST",body:o.formData});export const serviceProdutos={getProdutos,postProdutos,getProduto,putProdutos,deleteProduto,uploadProdutos};