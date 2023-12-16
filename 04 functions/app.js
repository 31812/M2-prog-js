
function superMooieGlobaalFunction(){
    console.log("ik ben global")
    console.log("dus je mag mij overal aanroepen")
    superMooieGlobaalFunction()
    superMooieGlobaalFunction()
    superMooieGlobaalFunction()
}

class App
{
    runApplication()
    {
        console.log("hello world!")
        superMooieGlobaalFunction()
    }
}

function aanroepVoorbeeld(){

}

let app = new App()
app.runApplication()
aanroepVoorbeeld()