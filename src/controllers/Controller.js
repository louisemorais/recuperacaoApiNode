import temperature from '../services/temperature.js';

class Controller{
    MenuController(req,res){
        try{
            const mensagem= temperature.Menu();
            res.send(mensagem)
        }catch(error){
            res.send({message: error.message})
        }
    }

    MenuInformativoController(req,res){
        try{
            const num= Number(req.query.num);
            const mensagem= temperature.MenuInformativo(num)
            res.send({mensagem})
        }catch(error){
            res.send({message: error.message})
        }
    }

    CelsiusToFahrenheitController(req,res){
        try {
            const celsius = req.body.celsius;
            const resultado = temperature.CelsiusToFahrenheit(celsius);
            res.send({resultado})
        } catch (error) {
            res.send({message: error.message})
        }
    }

    FahrtocelsiusController(req,res){
        try{
            const fahrenheit=  req.body.fahrenheit;
            const resultado = temperature.FahrenheitToCelsius(fahrenheit);
            res.send({resultado})
        }catch(error){
            res.send({message: error.message})
        }
    }

    CelsiustokelvinController(req,res){
        try{
            const celsius= req.body.celsius;
            const resultado= temperature.FahrenheitToCelsius(celsius);
            res.send({resultado})
        }catch(error){
            res.send({message: error.message})
        }
    }
}

export default new Controller()