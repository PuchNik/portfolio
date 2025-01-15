import Project from "../components/project/Project.jsx"
import {projects} from "./../helpers/projectsList.js"


export default function Projects() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((project) => {
                        return <Project key={project.title} title={project.title} img={project.img}/>
                    })}
                </ul>
            </div>
        </main>
    )
}