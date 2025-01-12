import vk from "../../assets/icons/vk.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import gitHub from "../../assets/icons/gitHub.svg";
import linkedIn from "../../assets/icons/linkedIn.svg";

import './style.css'

export default function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2022 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}