import {NavLink} from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode.jsx";
import './style.css'



export default function Navbar () {
    const activeLink = 'nav-list__link nav-list__link--active'
    const normalLink = 'nav-list__link'

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">

                    <NavLink to="/" className="logo">
                        <strong>Regulatory assistant</strong>
                    </NavLink>

                    <BtnDarkMode />

                    <ul className="nav-list">

                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Главная
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/archive" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Архив
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/profile" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Профиль
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/support" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Поддержка
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}