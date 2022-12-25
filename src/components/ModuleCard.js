

export default function ModuleCard(props) {
    return (
        <div className="module-card" id={props.id}>
            <div className="module-card-img"> <img src={props.img} alt="tree2" /></div>
            <div className="module-card-text">{props.title}</div>
        </div>
    );
}