const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bookSchema = new Schema(
    {
        idbook:{
            type:Number,
        },
        iduser:{
            type:String,
        },
        titulo:{
            type:String,
        },
        editorial:{
            type:String,
        },
        fecha_edicion:{
            type:String,
        },
        paginas:{
            type:Number,
        },
        autor:{
            type:String,
        },
        estado:{
            type:String,
        },
        caratula:{
            type:String,
        },
        descripcion:{
            type:String,
        },
        genero:{
            type:String,
        },
        disponible:{
            type:Boolean,
        },
    },
    {
        collection:"books",
    }
);

module.exports = mongoose.model("Book", bookSchema);