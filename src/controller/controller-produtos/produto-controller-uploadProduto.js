import { serviceProdutos } from "../../services/service-produtos.js";

/**
 * Recebe a imagem inserida no input, cria FormData e envia para url /upload, 
 * que será recebida no backend pela API do Multer, para fazer o uplaod da imagem.
 */

const uploadProduto = () => {
  document.querySelector("#produtoimginput").onchange = (e) => {
    const formData = new FormData();

    const inputFile = e.target;

    formData.append(inputFile.name, inputFile.files[0]);

    serviceProdutos.uploadProdutos({
      url: "/upload",
      formData: formData,
    });
  };
};

uploadProduto();
