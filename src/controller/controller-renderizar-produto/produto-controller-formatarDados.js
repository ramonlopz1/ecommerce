/**
 * Formata os dados do objeto "produto", para uma melhor apresentação ao usuário.
 * 
 */

export const formatarDados = (produto) => {
    let precoFormatado = parseFloat(produto.preco).toFixed(2).replace(".", ",");
  
    let precoParcela = (produto.preco / produto.parcelas)
      .toFixed(2)
      .replace(".", ",");
  
    let nomeDaImagem = produto.img
      .replaceAll("\\", "")
      .replace("C:", "")
      .replace("fakepath", "");
  
    produto.precoFormatado = precoFormatado;
    produto.precoParcela = `${produto.parcelas} x R$ ${precoParcela}`;
    produto.nomeDaImagem = nomeDaImagem;
  
    return produto;
  };