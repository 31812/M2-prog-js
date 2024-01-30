class App

{
    runApplication()
    {
        console.log("hello world!")
        let headers = document.getElementsByTagName("h1");
        let artiesten = ["Kanye West", "Playboi carti", "Nujabes"] ;
        artiesten.push("Yuno Miles", "Jay-z", "Michael Struiken");
        let indexToRemove = artiesten.indexOf("Yuno Miles");
        artiesten.splice(indexToRemove,1);

        for (let i = 0; i < artiesten.length; i++) {
            const element = artiesten[i];
            console.log(element);
        }

        for (let i = 0; i < headers.length; i++) {
            const element = headers[i];
            console.log(element)

            element.innerText = "Nieuwe Text";
        }
        
        headers[0].innerText = "who ";
        headers[1].innerText = "are";
        headers[2].innerText = "you"; 
        headers[3].innerText = "to";
        headers[4].innerText = "pimp a Butterfly";

        console.log(artiesten);
    }
}

let app = new App();
app.runApplication();