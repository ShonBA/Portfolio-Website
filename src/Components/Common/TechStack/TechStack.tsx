import "./TechStack.scss";

interface TechStackProps {
    stack: string[]
}
function TechStack(props: TechStackProps): JSX.Element {


    return (
        <div className="TechStack">
            {props.stack.map(i => <span key={i} className="stackItem">{i}</span>)}
        </div>
    );
}

export default TechStack;
