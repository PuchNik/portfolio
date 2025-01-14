import project01 from "../../src/assets/projects/01.jpg"
import project02 from "../../src/assets/projects/02.jpg"
import project03 from "../../src/assets/projects/03.jpg"
import project04 from "../../src/assets/projects/04.jpg"
import project05 from "../../src/assets/projects/05.jpg"
import project06 from "../../src/assets/projects/06.jpg"


export default function Projects() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    <li className="project">
                        <a href="../../Downloads/html-freelance-portfolio/project-page.html">
                            <img src={project01} alt="Project img"
                                 className="project__img"/>
                            <h3 className="project__title">Gaming streaming portal</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="../../Downloads/html-freelance-portfolio/project-page.html">
                            <img src={project02} alt="Project img"
                                 className="project__img"/>
                            <h3 className="project__title">Video service</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="../../Downloads/html-freelance-portfolio/project-page.html">
                            <img src={project03} alt="Project img"
                                 className="project__img"/>
                            <h3 className="project__title">Video portal</h3>
                        </a>
                    </li>

                    <li className="project">
                        <img src={project04} alt="Project img"
                             className="project__img"/>
                        <h3 className="project__title">Dating app</h3>
                    </li>
                    <li className="project">
                        <img src={project05} alt="Project img"
                             className="project__img"/>
                        <h3 className="project__title">Landing</h3>
                    </li>
                    <li className="project">
                        <img src={project06} alt="Project img"
                             className="project__img"/>
                        <h3 className="project__title">Gaming community</h3>
                    </li>

                </ul>
            </div>
        </main>
    )
}