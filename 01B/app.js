class App {
    constructor() {
        this.Appnaam = "DemoApp";
        this.versienummer = 0.1;
        this.versiedatum = "Wed 22 Nov 2023";
        this.autheur = "student";
        this.copyright = "Elias Reifen";
        this.distrubuteur = "Angelo Struiken";
        this.darkmode = false;
    }

    runApplication() {
        console.log("hello world!");
        console.log("Appnaam:", this.Appnaam);
        console.log("Versienummer:", this.versienummer);
        console.log("Versiedatum:", this.versiedatum);
        console.log("Autheur:", this.autheur);
        console.log("Copyright:", this.copyright);
        console.log("Distrubuteur:", this.distrubuteur);
        console.log("Darkmode:", this.darkmode);
    }
}

let app = new App();
app.runApplication();
