let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

const userRoute = require("../backend/routes/user.route");
const db = require("../backend/database/db").mongoURI;


//conexion con bd mongoatals
mongoose
    .connect(db, {useNewUrlParser:true})
    .then(()=>console.log("mongo atlas conectado exitosamente"))
    .catch((err)=>console.log(err));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}));

app.use(cors());
app.use("/users", userRoute);

const port = process.env.PORT || 4000; //puerto para la aplicación
const server = app.listen(port, ()=>{
    console.log("connecetd to port " + port);
});

app.use(function(err, req, res, next){
    console.log(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});