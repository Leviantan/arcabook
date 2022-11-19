let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();
let userSchema = require("../models/User");  //objero modelo user

//ruta crear usuarios
router.route("/create-user").post((req, res, next)=>{
    userSchema.create(req.body,  (error, data)=>{
        if(error){
            return next(error);
        }else{
            console.log(data);
            res.json(data);
        }
    });
});

//leer usuarios
router.route("/user").get((req, res, next)=>{
    userSchema.find((error, data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data);
        }
    });
});

//editar usuarios
router.route("/edit-user/:id").get((req, res, next)=>{
    userSchema.findById(req.params.id, (error, data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data);
        }        
    });
});

//actualizar usuario
router.route("/update-user/:id").put((req, res, next)=>{
    userSchema.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body,
        },
        (error, data)=>{
            if(error){
                console.log(error);
                return next(error);
            }else{
                res.json(data);
                console.log("usuario actualizado con éxito");
            }            
        }
    );
});

//eliminar usuario
router.route("/delete-user/:id").delete((req, res, next)=>{
    userSchema.findByIdAndDelete(req.params.id,(error, data)=>{
        if(error){
            return next(error);
        }else{
            res.status(200).json({
                msg:data,
            });
        }
    });
});

module.exports=router;