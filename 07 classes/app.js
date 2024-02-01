class App
{
    runApplication()
    {
        console.log("hello world!")
    }
}

class Greet
{
    constructor(){
    }

    showGreeting()
    {
        console.log("Greetings!")
    }
}

class Goodbye
{
    constructor(){
    }

    showBye(){
        console.log("Bye Bye")
    }
}

let bye = new Goodbye()
let greet = new Greet()
let app = new App()
app.runApplication()
greet.showGreeting()
bye.showBye()

greet.showGreeting()
bye.showBye()

greet.showGreeting()
bye.showBye()

greet.showGreeting()
bye.showBye()