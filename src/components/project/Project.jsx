import './project.css'

// eslint-disable-next-line react/prop-types
export default function Project({title, img}) {
    return (
        <>
            <li className="project">
                <a href="../../Downloads/html-freelance-portfolio/project-page.html">
                    <img src={img} alt={title}
                         className="project__img"/>
                    <h3 className="project__title">{title}</h3>
                </a>
            </li>
        </>
    )
}