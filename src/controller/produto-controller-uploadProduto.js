import { serviceProdutos } from "../services/service-produtos.js";

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
