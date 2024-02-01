class App
{
    runApplication()
    {
        console.log("hello world!")
    }
}

class Greet
{
    constructor()
    {
        this.greeting = " Greetings!";
    }

    showGreeting()
    {
        console.log("greeting van binnen:" + this.greeting);
    }
}

class Goodbye
{
    constructor()
    {
        this.farewell = " Bye Bye";
    }

    showBye()
    {
        console.log("bye bye van binnen:" + this.farewell);
    }
}

let goodbye = new Goodbye()
let greet = new Greet()
let app = new App()
app.runApplication()
greet.showGreeting()
goodbye.showBye()
console.log("Greeting van buiten:" + greet.greeting)
console.log("bye bye van buiten:" + goodbye.farewell)