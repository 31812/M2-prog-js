class App {
    runApplication() { 
        console.log("hello world!");
        let canvas = document.getElementById("canvasid");
        let g = canvas.getContext("2d");

        function tekenCirkel(x, y) {
            g.beginPath();
            g.arc(x, y, 20, 0, Math.PI * 2);
            g.fill();
            g.stroke();
            g.closePath();
        }

        g.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < 200; i++) {
            let x = Math.random() * canvas.width; 
            let y = Math.random() * canvas.height; 
            tekenCirkel(x, y);
        }
    }
}

let app = new App();
app.runApplication();
