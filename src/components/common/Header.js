import { NavLink } from "react-router-dom";
import logoImg from "../../assets/images/header/logo.png";
const Header = () => {
    return (
        <div className="header">
        <nav className="header-menu">
            <img src={logoImg} alt="로고 이미지" />
            <div className="menu-list">
        <NavLink to="#">의류형</NavLink>
        <NavLink to="#">기본형</NavLink>
        <NavLink to="#">대형견 추천</NavLink>
        <NavLink to="#">목줄 유형</NavLink>
            </div>
            <div className="">

            </div>
    </nav>
        </div>
    )
}

export default Header
