const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const multer = require("multer"); // interpreta formulario com arquivo upload
const fs = require("fs");

app.use(express.static("../public")); // qualquer requisição servirá todos os arquivos estáticos da pasta atual
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // transforma JSON em Objeto

const imgID = () => {
  let dados = fs.readFileSync("../db.json");
  let parseDados = JSON.parse(dados);
  let produtos = Array.from(parseDados.produtos);

  if (produtos[0]) {
    let produtoID = produtos[produtos.length - 1].id;
    return produtoID + 1;
  } else {
    let produtoID = 1;
    return produtoID;
  }
};
console.log(imgID());

const storage = multer.diskStorage({
  //
  destination: function (req, file, callback) {
    callback(null, "./assets/upload"); // pasta de destino que o arquivo será armazenado
  },

  filename: function (req, file, callback) {
    // define o nome do arquivo
    // callback(null, )
    callback(null, `${imgID()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("produtoimginput"); //recebe objeto storage criado anteriormente com o destino e nome do arquivo, o 'arquivo' referencia o name do input do formulário

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.end("Ocorreu um erro");
    }

    res.end("Concluindo com sucesso.");
  });
});

app.listen(3003, () => {
  console.log("Executando servidor...");
});
