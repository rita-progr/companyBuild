
import './appHeader.css';
import logo from '../../resources/img/IMG_4845.jpeg';
const AppHeader = () => {
    const handleOnClick = (id) => {
        const el = document.querySelector(id)
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    return (
        <div className = "app-header">
            <div className="app-header__logo">
            <img src={logo} alt="logo"/>
            <p style = {{'fontSize':'36px'}}>KAILASBUILD</p>
            </div>
            <ul className="nav-menu">
                <li className="nav-menu__item"><a onClick = {()=>handleOnClick('#about')}>О нас</a></li>
                <li className="nav-menu__item"><a href = '#'>Главная</a></li>
                <li className="nav-menu__item"><a onClick = {()=>handleOnClick('#contacts')}>Контакты</a></li>
            </ul>
        </div>
    )
}
export default AppHeader;