import { Router } from "express";


const routerUser = Router();

routerUser.use((req,res,next)=>{
    console.log("MDW de User")
    next();
});

routerUser.get("/user",(req,res)=>{
        res.status(200).send("Hola soy User");

});

export default routerUser;