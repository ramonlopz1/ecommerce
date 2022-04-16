const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer') // interpreta formulario com arquivo upload

app.use(express.static('../public')) // qualquer requisição servirá todos os arquivos estáticos da pasta atual
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) // transforma JSON em Objeto

sequence = {
    _id: 0,
    get id() { return this._id++ }
}

const storage = multer.diskStorage({ // 
    destination: function (req, file, callback) {
        callback(null, './assets/upload') // pasta de destino que o arquivo será armazenado
    },

    filename: function(req, file, callback) { // define o nome do arquivo
        // callback(null, )
        callback(null, `${sequence.id}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('produtoimginput') //recebe objeto storage criado anteriormente com o destino e nome do arquivo, o 'arquivo' referencia o name do input do formulário

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro')
        }

        res.end('Concluindo com sucesso.')
    })
})

app.listen(3003, () => {
    console.log('Executando servidor...')
})

