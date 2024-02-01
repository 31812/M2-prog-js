class App
{
    runApplication()
    {
        console.log("hello world!");

        let dino = new Dino("Jerry",true,20);
        console.log("de leeftijd van deze " + dino.naam + " is: "+ dino.leeftijd);
        console.log("en deze " + dino.naam + " eet vlees:"+ dino.vleeseter);
    }
}

class Dino
{
    constructor(Jerry){
        this.naam = "Jerry";
        this.vleeseter = true;
        this.leeftijd = 20;
    }
}

let app = new App()
app.runApplication()