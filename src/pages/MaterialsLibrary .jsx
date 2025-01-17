import Materials from "../components/materials/Materials.jsx";


export default function MaterialsLibrary() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Библиотека полезных материалов</h2>
                <Materials title="Информационная безопасность"/>
                <Materials title="Нормативно-правовые акты"/>
            </div>
        </main>
    )
}