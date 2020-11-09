const express = require("express"); /*para importar o express utilizando o "require" */
const cors = require("cors");
const mongoose = require("mongoose"); /* para importar o mongoose utilizando o "require" */
const requireDir = require("require-dir"); /*para importar o require-dir utilizando o require*/
 

//iniciando o App
const app = express(); /* executando uma variavel express -const- */
app.use(express.json());
app.use(cors());


//iniciando a DB
mongoose.connect("mongodb+srv://claudio:root@cluster0.shhp5.mongodb.net/estudo_node?retryWrites=true&w=majority", { 
    useUnifiedTopology: true,
    useNewUrlParser: true
});

 /*require('./src/models/product'); - para trazer 1 model criado na src*/

 requireDir("./src/models"); /*utilizando a ferramenta 'require-dir'; para atualizar todos os models de uma só vez*/
 

//     rotas
app.use('/', require('./src/routes'));


app.listen(3001); /*para informar ao portal do navegador(crone) qual porta usará */


/*json significa: Java Script Objet Notation*/
