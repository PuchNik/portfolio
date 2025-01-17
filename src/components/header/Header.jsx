import './style.css'

export default function Header () {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Привет, <em>Nik</em></strong><br/>
                    Рады, что ты присоединился
                </h1>
                <div className="header__text">
                    <p>Данное приложение направлено для изучения и
                        развития навывков специалистов по информационной
                        безопасности в области нормативно правовых актов.
                    </p>
                </div>
                <a href="#!" className="btn">Начать изучение</a>
            </div>
        </header>
    )
}