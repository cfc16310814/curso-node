           /*importar o mongoose*/
const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');


         /*criando a variável productsSchema*/
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    createdat:{
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema); /*para concluir o models*/