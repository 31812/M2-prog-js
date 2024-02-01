class App {
    runApplication() {
        console.log("hello world!");
        let uiButton = document.getElementById("myButton");

        let localeFunction = (e) => {
            console.log("click!");
        };
        uiButton.addEventListener("click", localeFunction);
    }
}

let app = new App();
app.runApplication();
