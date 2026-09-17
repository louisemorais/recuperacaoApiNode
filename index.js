import express from "express";
import routers from "./src/routers/Router.js"

const app = express();
app.use(express.json());
app.use(routers)


app.listen(3000, ()=>{
    console.log("rodando na porta 3000")
})