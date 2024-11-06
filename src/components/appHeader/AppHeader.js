import './appHeader.css';
import logo from '../../resources/img/IMG_4845.jpeg';
const AppHeader = () => {
    return (
        <div className = "app-header">
            <div className="app-header__logo">
            <img src={logo} alt="logo"/>
            <p style = {{'fontSize':'36px'}}>KAILASBUILD</p>
            </div>
            <ul className="nav-menu">
                <li className="nav-menu__item"><a href="#about">О нас</a></li>
                <li className="nav-menu__item"><a href="#">Главная</a></li>
                <li className="nav-menu__item"><a href="#">Контакты</a></li>
            </ul>
        </div>
    )
}
export default AppHeader;