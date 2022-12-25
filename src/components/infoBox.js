import "./infoBox.css"

export function InfoBox(props) {
    return (
        <div className="info-box">
            <p>{props.text}</p>
        </div>
    )
}