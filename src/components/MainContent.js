import darkMode from "../components/assets/dark-mode.png";
import ModuleCard from "./ModuleCard";
import { Link } from "react-router-dom";
import algorithmImg from "../components/assets/algorithms.png";
import dataStructImg from "../components/assets/dataStructImg.png";
import problemSolvingImg from "../components/assets/problemSolvingimg.png";


export default function MainContent() {

    const handleMainDarkMode = () => {
        let mainContentBody = document.querySelector('.main');
        mainContentBody.classList.toggle('main-darkmode');
    }


    return (
        <div className="main">
            <div className="modes">
                <img className="main-darkmode-icon" src={darkMode} alt="dark mode icon" onClick={handleMainDarkMode} />
            </div>
            <div className="module-cards-container flex">
                <Link className="module-card-link" to="/algorithms"><ModuleCard id="algorithms" title="Algorithms" img={algorithmImg} /></Link>
                <Link className="module-card-link" to="/datastructures"><ModuleCard id="data-structs" title="Data structures" img={dataStructImg} /></Link>
                <Link className="module-card-link" to="/problem-solving-techniques"><ModuleCard id="problem-solving" title="Problem solving techniques" img={problemSolvingImg} /></Link>
            </div>
        </div>
    );
}