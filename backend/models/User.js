const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        iduser:{
            type:Number,
        },
        nombre:{
            type:String,
        },
        apellido:{
            type:String,
        },
        correo:{
            type:String,
        },
        password:{
            type:String,
        },
        admin:{
            type:Boolean,
        },
        estado:{
            type:String,
        },
        avatar:{
            type:String,
        },
        descripcion:{
            type:String,
        },
    },
    {
        collection:"users",
    }
);

module.exports = mongoose.model("User", userSchema);