import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import "./DetailImage.scss";

// ✅ 상세페이지 이미지 import (정적 import가 제일 안전)
import detailA from "../../assets/images/Detail/detail-a.png"; // 의류형
import detailB from "../../assets/images/Detail/detail-b.png"; // 기본형
import detailC from "../../assets/images/Detail/detail-c.png"; // 대형견
import detailD from "../../assets/images/Detail/detail-d.png"; // 목편한형

const DetailImage = () => {
    const { productId } = useParams();
    const idNum = Number(productId);

    // ✅ productId → 상세이미지 매핑
    const detailSrc = useMemo(() => {
        const map = {
        31: detailA, // 의류형
        1: detailB,  // 기본형
        21: detailC, // 대형견
        11: detailD, // 목편한형
        };
        return map[idNum] || detailB; // fallback: 기본형
    }, [idNum]);

    return (
        <section className="detail-long-image">
        <img src={detailSrc} alt="상세페이지 이미지" />
        </section>
    );
    };

export default DetailImage;