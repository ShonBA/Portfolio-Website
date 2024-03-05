import { useEffect, useState } from "react";
import dataService from "../../../Service/DataService";
import "./TechStack.scss";


function TechStack(): JSX.Element {
    const [feStack, setFeStack] = useState<string[]>([]);

    useEffect(() => {
        dataService.getAllTechStack()
            .then(beStack => setFeStack(beStack))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="TechStack">
            {feStack.map(i => <span className="stackItem">{i}</span>)}
        </div>
    );
}

export default TechStack;
