import "./popup.css";
import userProfileImg from "./assets/userProfile.png";
import userGuide from "./assets/userGuide.png";
import listFolder from "./assets/folder.png";
import studyBox from "./assets/education.png";

export default function ProfilePopup() {
    return (
        <div className="popup-card">
            <div className="popup-content">
                <div className="popup-header">
                    <div className="user-picture">
                        <img src={userProfileImg} alt="user profile" />
                    </div>
                    <div className="username"><span>Gismet</span></div>
                </div>
                <div className="popup-items">
                    <div className="grid-item">
                        <img src={listFolder} alt="fav folder" />
                        <p>My list</p>
                    </div>
                    <div className="grid-item">
                        <img src={studyBox} alt="study" />
                        <p>Study</p>
                    </div>
                    <div className="grid-item">
                        <img src={userGuide} alt="user guide" />
                        <p>User guide</p>
                    </div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                </div>
            </div>
        </div>
    );
}