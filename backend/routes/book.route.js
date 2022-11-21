let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();
let bookSchema = require("../models/Book"); //objeto modelo book

//ruta crear books
router.route("/create-book").post((req, res, next)=>{
    bookSchema.create(req.body,  (error, data)=>{
        if(error){
            return next(error);
        }else{
            console.log(data);
            res.json(data);
        }
    });
});

//leer books
router.route("/book").get((req, res, next)=>{
    bookSchema.find((error, data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data);
        }
    });
});

//editar usuarios
router.route("/edit-book/:id").get((req, res, next)=>{
    bookSchema.findById(req.params.id, (error, data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data);
        }        
    });
});

//actualizar books
router.route("/update-book/:id").put((req, res, next)=>{
    bookSchema.findByIdAndUpdate(
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

//eliminar book
router.route("/delete-book/:id").delete((req, res, next)=>{
    bookSchema.findByIdAndDelete(req.params.id,(error, data)=>{
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