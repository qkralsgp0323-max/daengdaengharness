import logoImg from "../../assets/images/footer/logo.png";
import Naver from "../../assets/images/footer/naver.png";
import insta from "../../assets/images/footer/instagram.png";
import ex from "../../assets/images/footer/ex.PNG";
import "./Footer.scss";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-ment">
            <div className="footer-logo">
                <img src={logoImg} alt="로고" />
            </div>
            <p>대표자 : 김댕댕</p>
            <p>사업장 주소 : 서울특별시 마포구 월드컵북로 402, 3층</p>
            <p>이메일 : dangdangharness@ddhane.co.kr</p>
            </div>
            <div className="footer-brands">
            <img src={Naver} alt="네이버" />
            <img src={insta} alt="인스타그램" />
            </div>
            <img src={ex} alt="임시 사진" className="footer-ex" />
        </div>
    )
}

export default Footer
