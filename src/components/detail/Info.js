import React, { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../../assets/data/products.json";
// import { cartAdd } from "../../cart/cartProduct"; 
// 예) cart 폴더가 src/cart/cartProduct.js 라면 위 경로가 맞고,
// 만약 src/components/cart/cartProduct.js 이런 식이면 그에 맞게 바꿔야 해.

const Info = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const { Product: products, size: sizeOptions, color: colorOptions } = productsData;

    /**
     * ✅ productId 기반 상품 선택
     * - 정상 접근: 해당 id 상품
     * - fallback: 그냥 첫 상품
     */
    const product = useMemo(() => {
        const id = Number(productId);
        return products.find((p) => p.id === id) || products[0];
    }, [productId, products]);

    // ✅ 이미지 require 방식(강사님 스타일)
    const getImagePath = (imgPath) => {
        if (!imgPath || !product) return "";
        const fileName = imgPath.split("/").pop();

        // C 타입만 폴더 다름
        if (product.type === "C") {
        return require(`../../assets/images/C-harness/${fileName}`);
        }
        return require(`../../assets/images/Harness/${fileName}`);
    };

    const [mainImg, setMainImg] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [qty, setQty] = useState(1);

    useEffect(() => {
        if (!product) return;
        setMainImg(product.img1);
        setSelectedSize("");
        setSelectedColor("");
        setQty(1);
    }, [product]);

    if (!product) return null;

    const thumbs = [product.img1, product.img2].filter(Boolean);

    const handleMinus = () => setQty((prev) => Math.max(1, prev - 1));
    const handlePlus = () => setQty((prev) => prev + 1);

    const isReady = Boolean(selectedSize && selectedColor);
    const unitPrice = Number(product.origin_price) || 0;
    const totalPrice = unitPrice * qty; // ✅ 할인 미적용(원가 * 수량)

    /**
     * ✅ 장바구니 버튼 클릭 시:
     * 1) 옵션 체크
     * 2) cartAdd() 호출 (카트 담당자 방식)
     * 3) /cart 이동
     */
    const handleAddCart = () => {
        if (!isReady) {
        alert("사이즈와 색상을 선택해주세요!");
        return;
        }

        // ✅ 카트 담당자 함수에 맞춰서 인자 그대로 전달
        // cartAdd({
        // productId: product.id,
        // productName: product.prod_name,
        // salePerc: product.sale_perc,     // 할인 계산 안 해도 값 자체는 전달 가능(표시용)
        // size: selectedSize,
        // color: selectedColor,
        // qty,
        // price: unitPrice,               // 할인 미적용 → origin_price 그대로
        // img: product.img1 || "",        // JSON 경로 문자열 그대로 전달
        // });

        // ✅ 카트 페이지로 이동
        navigate("/cart");
    };

    return (
        <section className="detail-info">
        <div className="detail-info-wrap">
            {/* 이미지 영역 */}
            <div className="detail-info-media">
            <div className="detail-info-mainImg">
                <img src={getImagePath(mainImg)} alt={product.prod_name} />
            </div>

            <div className="detail-info-thumbs">
                {thumbs.map((img) => (
                <button
                    key={img}
                    type="button"
                    className={`detail-info-thumb ${mainImg === img ? "is-active" : ""}`}
                    onClick={() => setMainImg(img)}
                >
                    <img src={getImagePath(img)} alt="thumbnail" />
                </button>
                ))}
            </div>
            </div>

            {/* 구매 영역 */}
            <div className="detail-info-buy">
            <h1 className="detail-info-title">{product.prod_name}</h1>
            <p className="detail-info-sub">멋드러지는 입는형 하네스</p>

            <div className="detail-info-priceRow">
                
                <span>{unitPrice.toLocaleString()}원</span>
            </div>

            <p className="detail-info-couponText">회원가입 시 20% 할인 쿠폰 발급</p>

            {/* 옵션 */}
            <div className="detail-info-option">
                <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                <option value="">(필수) 사이즈 선택</option>
                {sizeOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                ))}
                </select>
            </div>

            <div className="detail-info-option">
                <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                <option value="">(필수) 색상 선택</option>
                {colorOptions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
                </select>
            </div>

            {/* 수량 + 합계 */}
            <div className="detail-info-summary">
                <div className="detail-info-qty">
                <span>(합계) 수량</span>
                <div>
                    <button type="button" onClick={handleMinus}>-</button>
                    <span>{qty}</span>
                    <button type="button" onClick={handlePlus}>+</button>
                </div>
                </div>

                <div className="detail-info-total">
                <strong>{totalPrice.toLocaleString()}원</strong>
                </div>
            </div>

            {/* 장바구니 */}
            <button
                type="button"
                className={`detail-info-cartBtn ${isReady ? "is-active" : ""}`}
                onClick={handleAddCart}
            >
                🛒 장바구니
            </button>
            </div>
        </div>
        </section>
    );
    };

export default Info;
