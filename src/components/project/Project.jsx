import './project.css'
import project01 from "../../assets/projects/01.jpg";


export default function Project() {
    return (
        <>
            <li className="project">
                <a href="../../Downloads/html-freelance-portfolio/project-page.html">
                    <img src={project01} alt="Project img"
                         className="project__img"/>
                    <h3 className="project__title">Gaming streaming portal</h3>
                </a>
            </li>
        </>
    )
}