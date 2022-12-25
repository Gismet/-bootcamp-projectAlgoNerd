import logo from "../components/assets/logo.png"
import userProfile from "./assets/userProfile.png"
import ProfilePopup from "./profilePopup";

export default function Navbar() {

    const handleUserProfile = () => {
        let userProfileCard = document.querySelector(".popup-card");
        userProfileCard.classList.toggle('popup-card_flex');
    }

    const handleDropdown = () => {
        let dropdown = document.querySelector(".dropdown");
        dropdown.classList.toggle("dropdown_block")
    }


    return (
        <>
            <div className="main-topnav">
                <div className="page-nav-bar">
                    <div className="nav-logo">
                        <img src={logo} alt="AlgoNerd logo" />
                    </div>
                    <ul className="nav-bar-links">
                        <li><img src={userProfile} alt="user profile" onClick={handleUserProfile} /></li>
                    </ul>
                    <div className="hamburger-btn" onClick={handleDropdown}>
                        <div className="hamburger-btn-line1"></div>
                        <div className="hamburger-btn-line2"></div>
                        <div className="hamburger-btn-line3"></div>
                    </div>
                </div>
                <ul className="dropdown">
                    <a href="#algorithms"><li>Algorithms</li></a>
                    <a href="#data-structs"><li>Data structurs</li></a>
                    <a href="#problem-solving"><li>Problem solving techniques</li></a>
                </ul>
            </div>
            <ProfilePopup />
        </>
    );
}