import "./darkModeToggle.css";

export default function DarkModeToggle(props) {

    return (
        <div className="darkmode-toggle" onClick={props.clicker}>
            <div className="darkmode-left-side">
                <span className="darkmode-slider">on</span>
            </div>
            <div className="darkmode-right-side">
                <div className="darkmode-switcher"></div>
                <span className="darkmode-slider">off</span>
            </div>

        </div>
    );
}