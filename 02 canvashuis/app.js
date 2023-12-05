class App
{

    runApplication()
    { 
        console.log("hello world!")
        let canvas = document.getElementById("canvasid")
        let g = canvas.getContext("2d");
        g.fillStyle = "#33FF56";
        g.fillRect(0,0,canvas.width,canvas.height);
        g.fillStyle = "#6A33FF";
        g.fillRect(0,0,10,10);
        console.log(canvas)
    }
}

let app = new App();
app.runApplication();

