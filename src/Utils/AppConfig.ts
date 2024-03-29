class AppConfig {
    // URL'S
    public readonly techStackUrl = "https://raw.githubusercontent.com/ShonBA/Portfolio-Website/master/public/JSON/techStack.json";
    public readonly projectsUrl = "https://raw.githubusercontent.com/ShonBA/Portfolio-Website/master/public/JSON/projects.json";

    // Social URL'S
    public readonly linkDinUrl = "https://www.linkedin.com/in/shonbenayoun/";
    public readonly gitHubUrl = "https://github.com/ShonBA";
    public readonly CvUrl = "https://drive.google.com/file/d/1KSdzDcLEtGn_VmN_Roewae4OUWxw6GrQ/view?usp=sharing";
    public readonly phoneUrl = `tel:+972-54-761-1313`;
    public readonly emailUrl = `mailto:shonba98@gmail.com`;
    public readonly whatsappUrl = `https://wa.me/9720547611313?text=היי, אשמח לקבל הצעת מחיר!`;
    // Routes
    public readonly HomeRoute: string = "/home";
    public readonly AboutRoute: string = "/about";
    public readonly ProjectsRoute: string = "/projects";
    public readonly ContactRoute: string = "/contact";
}

const appConfig = new AppConfig();
export default appConfig;