class App

{
    runApplication()
    {
        console.log("hello world!");
        let data = ["newstitle", "gamenews", "gamenews headline", "gamenewstitle", "news headline"];

        let headers = document.getElementsByTagName("h1");
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            console.log(element);
 
            headers[i].innerText = data[i];
        }
    }
    
}

let app = new App();
app.runApplication();