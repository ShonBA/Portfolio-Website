class AppConfig {
    // URL'S
    public readonly techStackUrl = "https://raw.githubusercontent.com/ShonBA/Portfolio-Website/master/public/JSON/techStack.json";
    public readonly projectsUrl = "https://raw.githubusercontent.com/ShonBA/Portfolio-Website/master/public/JSON/projects.json";

    // Social URL'S
    public readonly linkDinUrl = "https://www.linkedin.com/in/shonbenayoun/";
    public readonly gitHubUrl = "https://github.com/ShonBA";
    public readonly CvUrl = "https://drive.google.com/file/d/1RWPiDFizusmxvm7KZPK986HwlgciwAYK/view?usp=sharing";
    // Routes
    public readonly HomeRoute: string = "/home";
    public readonly AboutRoute: string = "/about";
    public readonly ProjectsRoute: string = "/projects";
    public readonly ContactRoute: string = "/contact";
}

const appConfig = new AppConfig();
export default appConfig;