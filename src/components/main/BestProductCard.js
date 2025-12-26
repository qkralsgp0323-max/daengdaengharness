import { Link } from "react-router-dom";
import "./BestProductCard.scss";


const BestProductCard = ({ img, title, hoverImg }) => {
    return (
        <div className="best-product-card">
            <Link >
                <p className="bst-prod-cd-btn">{title}</p>
            </Link>
            <div className="bst-cd-img">
                <img className="imgBe" src={img} alt={`${title} 이미지`} />
                <img className="imgHover" src={hoverImg} alt={`${title} 호버 이미지`} />
            </div>
        </div>
    )
}

export default BestProductCard
