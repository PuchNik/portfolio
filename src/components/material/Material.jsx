import {NavLink} from "react-router-dom";
import './project.css'

// eslint-disable-next-line react/prop-types
export default function Material({title, img, index}) {
    return (
        <NavLink to={`/project/${index}`}>
            <li className="project">
                <img src={img} alt={title} className="project__img"/>
                <h3 className="project__title">{title}</h3>
            </li>
        </NavLink>
    )
}