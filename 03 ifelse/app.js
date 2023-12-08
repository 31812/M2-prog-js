class App
{
    runApplication()
    {
        console.log("hello world!")
        let title = document.getElementById("newstitle")
        let newsitem1 = document.getElementsByClassName("gamenews headline")[0]
        let newsitem2 = document.getElementsByClassName("gamenews")[1]
        console.log(title)
        // getElementById(newstitle) // 
        // getElementByClassName("gamenews headline") // 
        // getElementByClassName("gamenews") // 
        let rand = Math.random();
        console.log(rand);
        if(rand < 0.2)
        {
            title.style.backgroundColor = "#FF0000";
        } else {
            title.style.backgroundColor = "#000000";
        }

        if(rand < 0.2)
        {
            newsitem2.style.backgroundColor = "#6EDA26";
        } else {
            newsitem2.style.backgroundColor = "#451769";
        }

        if(rand < 0.2)
        {
            newsitem1.style.backgroundColor = "#9CACBD";
        } else {
            newsitem1.style.backgroundColor = "9E22A8";
        }
    }
}

let app = new App()
app.runApplication()
