import { app } from "../../firebase.js"
import { serviceProdutos } from "../services/service-produtos.js"

const uploadProduto = () => {
    document.querySelector('#produtoimginput').onchange = e => {
    
        const file = e.target.files[0]
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
        
        fileRef.put(file).then(() => {
            console.log("upload file", file.name)
        })
       
    }
}

uploadProduto()