import {materialsIS} from "../../helpers/informationSecurityMaterials.js";
import Material from "../material/Material.jsx";

// eslint-disable-next-line react/prop-types
export default function Materials({title}) {
    return (
        <>
            <p className="subtitle">{title}</p>
            <ul className="projects">
                {materialsIS.map((materialIS, index) => {
                    return <Material
                        key={materialIS.title}
                        title={materialIS.title}
                        img={materialIS.img}
                        index={index}
                    />
                })}
            </ul>
        </>
    )
}