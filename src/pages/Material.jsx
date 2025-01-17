import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub.jsx";
import {materialsIS} from "../helpers/informationSecurityMaterials.js";




export default function Material() {
    const {id} = useParams()
    const materialIS = materialsIS[id]

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{materialIS.title}</h1>

                    <img src={materialIS.imgBig} alt="" className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>{materialIS.skills}</p>
                    </div>
                    {materialIS.gitHabLink && <BtnGitHub link="https://gitHub.com"/>}
                </div>
            </div>
        </main>
    )
}