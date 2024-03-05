import axios from "axios";
import appConfig from "../Utils/AppConfig";

class DataService {
    public async getAllTechStack(): Promise<string[]> {
        const response = await axios.get(appConfig.techStackUrl);
        const techStack = response.data;
        return techStack;
    }
}

const dataService = new DataService();
export default dataService;