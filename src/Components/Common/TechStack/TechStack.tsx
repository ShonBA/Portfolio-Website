import { useState } from "react";
import "./TechStack.scss";
interface StackProps {
    items: string[];
}
function TechStack(props: StackProps): JSX.Element {

    const [stack, setStack] = useState<string[]>(props.items);

    return (
        <div className="TechStack">
            {stack.map(i => <span className="stackItem">{i}</span>)}
        </div>
    );
}

export default TechStack;
