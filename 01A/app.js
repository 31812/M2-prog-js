class App
{
    runApplication()
    {
        console.log("hello world!")
        let Appnaam = "DemoApp"
        let versienummer = 0.1
        let versiedatum = "Wed 22 Nov 2023"
        let autheur = "student"
        let copyright = "Elias Reifen"
        let distrubuteur = "Angelo Struiken"
        let darkmode = "false"
        console.log("Appnaam:", Appnaam)
        console.log("Versienummer:", versienummer)
        console.log("Versiedatum:", versiedatum)
        console.log("Autheur:", autheur)
        console.log("Copyright:", copyright)
        console.log("Distrubuteur:", distrubuteur)
        console.log("Darkmode:", darkmode)
    }
}

let app = new App()
app.runApplication()