class App {
    runApplication() {
        console.log("hello world!");
        let uiButton = document.getElementById("myButton");
        let uiButton2 = document.getElementById("myButton2")

        let localeFunction = (e) => {
            const para = document.createElement("p");
            const node = document.createTextNode("this is new.")
            para.appendChild(node)
            document.body.appendChild(para);
        };
        uiButton.addEventListener("click", localeFunction);

        let localeFunction2 = (e) => {
            const para2 = document.createElement("h1");
            const node2 = document.createTextNode("IT's a me")
            para2.appendChild(node2)
            document.body.appendChild(para2);
        };
        uiButton2.addEventListener("click", localeFunction2);

        let localeFunction3 = (e) => {
            const para3 = document.createElement("p");
            const node3 = document.createTextNode("Agamatsu??")
            para3.appendChild(node3)
            document.body.appendChild(para3);
        };
        uiButton2.addEventListener("click", localeFunction3);

        let localeFunction4 = (e) => {
            const para4 = document.createElement("img");
            para4.src = "agamatsu.jpg"
            para4.alt = "fr"
            document.body.appendChild(para4);
        };
        uiButton2.addEventListener("click", localeFunction4);
    }
}

let app = new App();
app.runApplication();
