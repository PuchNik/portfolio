import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub.jsx";
import {projects} from "../helpers/projectsList.js";
import img from './../assets/projects/02-big.jpg'




export default function Project() {
    const {id} = useParams()
    const project = projects[id]

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt="" className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>
                    {project.gitHabLink && <BtnGitHub link="https://gitHub.com"/>}
                </div>
            </div>
        </main>
    )
}