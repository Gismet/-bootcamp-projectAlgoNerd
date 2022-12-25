
function Card(props) {
    return (
        <div className={`card ${props.color}`}>
            <div>{props.title}</div>
        </div>
    );
}

export default Card;