class App {
    constructor() {
        this.Appnaam = "DemoApp";
        this.versienummer = 0.1;
        this.versiedatum = "Wed 22 Nov 2023";
        this.autheur = "student";
        this.copyright = "Elias Reifen";
        this.distrubuteur = "Angelo Struiken";
        this.darkmode = false;

        // Class variables
        this.classBool = true;
        this.classString = "Class String";
        this.classNumber = 42;
    }

    runApplication() {
        // Local variables
        let localBool = false;
        let localString = "Local String";
        let localNumber = 21;

        console.log("hello world!");
        console.log("Appnaam:", this.Appnaam);
        console.log("Versienummer:", this.versienummer);
        console.log("Versiedatum:", this.versiedatum);
        console.log("Autheur:", this.autheur);
        console.log("Copyright:", this.copyright);
        console.log("Distrubuteur:", this.distrubuteur);
        console.log("Darkmode:", this.darkmode);

        // Logging local variables
        console.log("Local Boolean:", localBool);
        console.log("Local String:", localString);
        console.log("Local Number:", localNumber);

        // Logging class variables
        console.log("Class Boolean:", this.classBool);
        console.log("Class String:", this.classString);
        console.log("Class Number:", this.classNumber);
    }
}

let app = new App();
app.runApplication();

