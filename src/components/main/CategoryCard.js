
import "./CategoryCard.scss";
import productsData from "../../assets/data/products.json";

const imgContext = require.context("../../assets/images", true);

const CategoryCard = () => {

    const products = productsData?.Product ?? [];

    // 원하는 id 4개만 뽑기
    const pickedIds = [1, 11, 21, 31];

    // 4개만 필터링 (여기서 pickedProducts는 길이 4가 됨)
    const pickedProducts = products.filter((item) => pickedIds.includes(item.id));

    /**
     * JSON 경로 "/images/Harness/Htype1-1.png"
     * -> require.context 경로 "./Harness/Htype1-1.png" 로 변환해야 함
     */
    const getImgSrc = (jsonPath) => {
        // "/images/Harness/Htype1-1.png" -> "./Harness/Htype1-1.png"
        const fixedPath = jsonPath.replace("/images/", "./");
        return imgContext(fixedPath);
    };

    const titleById = {
        1: "대형견 추천형",
        11: "기본형",
        21: "목 편한형",
        31: "의류형",
    };

    return (
        <div id="category-card">
            <div className="category-cd-title">
                <p>
                    댕댕하네's <span>베스트 상품</span>
                </p>
            </div>

            {/* ✅ 4개를 가로로 배치하려면 "리스트 래퍼"를 하나 두는 게 편함 */}
            <div className="cate-card-list">
                {pickedProducts.map((item) => (
                    <div className="cate-card" key={item.id}>
                        <div className="category-cd-item">
                            <p className="cd-title">{titleById[item.id]}</p>

                            {/* 이미지: JSON 경로를 getImgSrc로 변환해서 넣기 */}
                            <img className="cd-img" src={getImgSrc(item.img1)} alt={item.prod_name} />

                            <p className="cd-go">보러가기</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryCard;
