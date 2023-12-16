
function heeftEenResultaat(){
    let resultaat =1;
    return resultaat;
}

heeftEenResultaat();
let hetResultaat = heeftEenResultaat (); 
console.log(hetResultaat);
console.log(heeftEenResultaat());

let x = 9;
let a =3;
let b =4;
let c =89;
let y = (a*(x*x) )+ (b*x) +c;
console.log(y);

function ax2bcWiskunde(a,x,b,c){
    let y = (a*(x*x) )+ (b*x) +c;
    return y
}

let u = 9;
let h = 8;
let l = 15
let logy = Math.log(1) + h + Math.pow(u, 2);
console.log(logy);

let y1 = ax2bcWiskunde (9,3,4,89);
console.log(y1);
let y2 = ax2bcWiskunde (3,6,5,45);
console.log(y2);
let y3 = ax2bcWiskunde (7,1,2,13);
console.log(y3);



function argumentsAreHandy(shoutout){
    argumentsAreHandy("wat de flip");
}

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
    }

    newClassFunction(){
        console.log("Hello world in de newClassFunction")
        anotherFunctionWithArguments(aArgument)
        {
            console.log("kom maar met je argument");
            console.log("hier:");
            console.log(aArgument);
        }
    }
}

let app = new App()
app.newClassFunction()

app.anotherFunctionWithArguments("mijn argument is iets slims")
