import axios from "axios";
import appConfig from "../Utils/AppConfig";
import ProjectModel from "../Models/ProjectModel";

class DataService {
    public async getAllTechStack(): Promise<string[]> {
        const response = await axios.get<string[]>(appConfig.techStackUrl);
        const techStack = response.data;
        return techStack;
    }
    public async getAllProjects(): Promise<ProjectModel[]> {
        const response = await axios.get<ProjectModel[]>(appConfig.projectsUrl);
        const projects = response.data;
        return projects;
    }
}

const dataService = new DataService();
export default dataService;