class App
{

    runApplication()
    { 
        console.log("hello world!")
        let canvas = document.getElementById("canvasid")
        let g = canvas.getContext("2d");
        g.fillStyle = "#FF0000";
        g.beginPath()
        g.moveTo(800, 300);
        g.lineTo(700,200);
        g.lineTo(600, 400); 
        g.closePath();
        g.stroke(); 
        g.fill()
        g.fillStyle = "#FF0000";
        g.beginPath()
        g.moveTo(700, 200);
        g.lineTo(300,100);
        g.lineTo(200, 300);
        g.lineTo(600, 400);
        g.closePath();
        g.stroke(); 
        g.fill()
        g.fillStyle = "#FFFFFF";
        g.beginPath()
        g.moveTo(600, 400);
        g.lineTo(600, 600);
        g.lineTo(800, 500);
        g.lineTo(800, 300);
        g.closePath();
        g.stroke(); 
        g.fill()
        g.fillStyle = "#FFFFFF";
        g.beginPath()
        g.moveTo(200, 300);
        g.lineTo(200,500);
        g.lineTo(600, 600);
        g.lineTo(600, 400);
        g.closePath();
        g.stroke(); 
        g.fill()
        console.log(canvas)
    }
}

let app = new App();
app.runApplication();

