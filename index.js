import express from "express";
import temperature from "./services/temperature.js";

const app = express();
app.use(express.json());

app.get("/api", (req,res)=>{
    const mensagem= temperature.Menu();
    res.send(mensagem)
})

app.get("/api/informacoes", (req,res)=>{
    const num= Number(req.query.num);
    const mensagem= temperature.MenuInformativo(num)
    res.send({mensagem})
})

app.post("/api/celsiustoFahr", (req,res)=>{
    const celsius = req.body.celsius;
    const resultado = temperature.CelsiusToFahrenheit(celsius);
    res.send({resultado})
})

app.post("/api/fahrtocelsius", (req,res)=>{
    const fahrenheit=  req.body.fahrenheit;
    const resultado = temperature.FahrenheitToCelsius(fahrenheit);
    res.send({resultado})
})

app.post("/api/celsiustokelvin", (req,res)=>{
    const celsius= req.body.celsius;
    const resultado= temperature.FahrenheitToCelsius(celsius);
    res.send({resultado})
})

app.listen(3000, ()=>{
    console.log("rodando na porta 3000")
})