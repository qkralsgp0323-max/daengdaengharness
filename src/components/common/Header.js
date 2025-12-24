import { NavLink } from "react-router-dom";
import logoImg from "../../assets/images/header/logo.png";
import cartIcon from "../../assets/images/header/cart-icon.png";
import myIcon from "../../assets/images/header/my-icon.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-menu">
        {/* 로고 */}
        <div className="logo">
          <img src={logoImg} alt="로고" />
        </div>

        {/* 메뉴 */}
        <div className="menu-list">
          <NavLink to="/category">의류형</NavLink>
          <NavLink to="/category">기본형</NavLink>
          <NavLink to="/category">대형견 추천</NavLink>
          <NavLink to="/category">목줄 유형</NavLink>
        </div>
        
        {/* 아이콘 */}
        <div className="icon-group">
          <img src={cartIcon} alt="장바구니" />
          <img src={myIcon} alt="마이페이지" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
