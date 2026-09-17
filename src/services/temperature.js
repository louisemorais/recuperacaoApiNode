class Temperature {
    Menu(){
        return `1. Celsius → Fahrenheit \n2. Fahrenheit → Celsius \n3. Celsius → Kelvin`
    }

    MenuInformativo(num){
        if(isNaN(num)){
            throw new Error("Por favor informar apenas número das opções");
        }
        switch(num){
            case 1:
                return "Faz a converção de celsius para fahrenheit"
                break;
            case 2:
                return "Faz a converção de fahrenheit para celsius"
                break;
            case 3:
                return "Faz a converção de celsius para kelvin"
                break;
            default:
                return "Essa converção não existe"
        }
    }

    CelsiusToFahrenheit(c){
        if(isNaN(c)){
            throw new Error("Por favor informar apenas número");
        }
        const f = (c * 9/5) + 32;
        return f;
    }

    FahrenheitToCelsius(f){
        if(isNaN(f)){
            throw new Error("Por favor informar apenas número");
        }
        const c = (f - 32) * 5/9;
        return c;
    }

    CelsiusToKelvin(c){
        if(isNaN(c)){
            throw new Error("Por favor informar apenas número");
        }
        const k = c + 273.15;
        return k;
    }
}

export default new Temperature()