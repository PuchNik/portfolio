import img from './../assets/projects/02-big.jpg'
import BtnGitHub from "../components/btnGitHub/BtnGitHub.jsx";

export default function Project() {
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">Video service</h1>

                    <img src={img} alt="" className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>Skills: React, Node.js, MongoDB</p>
                    </div>
                    <BtnGitHub link="https://gitHub.com"/>
                </div>
            </div>
        </main>
    )
}