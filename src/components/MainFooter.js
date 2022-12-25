import gmailIcon from "../components/assets/gmail-logo.png";
import linkedinIcon from "../components/assets/linkedin.png";
import githubIcon from "../components/assets/github.png";

export default function MainFooter() {
    return (
        <div className="footer">

            <div className="flex-copyright">
                <div className="footer-copyright">Copyright &copy; 2022 AlgoNerd, All rights reserved</div>
            </div>
            <div className="contact-icons">
                <a href="mailto: gismetmajidov@gmail.com"><img src={gmailIcon} alt="gamil icon" /></a>
                <a href="https://www.linkedin.com/in/gismet-majidov-61b069253/"><img src={linkedinIcon} alt="linkedin icon" /></a>
                <a href="https://github.com/Gismet"><img src={githubIcon} alt="github icon" /></a>
            </div>

        </div>
    );
}