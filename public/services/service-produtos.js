const getProdutos=()=>fetch("https://ecommerce-rmndev-default-rtdb.firebaseio.com/").then((o=>o.json())),postProdutos=o=>fetch("https://ecommerce-rmndev-default-rtdb.firebaseio.com/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),getProduto=o=>fetch(`https://ecommerce-rmndev-default-rtdb.firebaseio.com/${o}`).then((o=>o.json())),putProdutos=(o,t)=>fetch(`https://ecommerce-rmndev-default-rtdb.firebaseio.com/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((o=>o.json())),deleteProduto=o=>fetch(`https://ecommerce-rmndev-default-rtdb.firebaseio.com/${o}`,{method:"DELETE"}),uploadProdutos=o=>fetch(o.url,{method:"POST",body:o.formData});export const serviceProdutos={getProdutos,postProdutos,getProduto,putProdutos,deleteProduto,uploadProdutos};