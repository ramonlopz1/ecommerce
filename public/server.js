const bodyParser=require("body-parser"),express=require("express"),app=express(),multer=require("multer"),fs=require("fs");app.use(express.static("../public")),app.use(bodyParser.urlencoded({extended:!0})),app.use(bodyParser.json());const imgID=()=>{let e=fs.readFileSync("../db.json"),r=JSON.parse(e),s=Array.from(r.produtos);if(s[0]){return s[s.length-1].id+1}return 1};console.log(imgID());const storage=multer.diskStorage({destination:function(e,r,s){s(null,"./assets/upload")},filename:function(e,r,s){s(null,`${imgID()}_${r.originalname}`)}}),upload=multer({storage}).single("produtoimginput");app.post("/upload",((e,r)=>{upload(e,r,(e=>{if(e)return r.end("Ocorreu um erro");r.end("Concluindo com sucesso.")}))})),app.listen(3003,(()=>{console.log("Executando servidor...")}));