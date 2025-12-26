import "./BannerSection.scss";
import bannerImg01 from "../../assets/images/banner/Banner01.png"
import bannerImg02 from "../../assets/images/banner/Banner02.png"
import bannerImg03 from "../../assets/images/banner/Banner03.png"

import { useErffct, useState, useRef } from "react"; //자동 슬라이드 클론용
import "./BannerSection.scss";

const BannerSection = () => {
    return (
        <section id="sec-banner">
            <div className="bnr-wrap">
                <div className="bnr-track">
                    <div className="bnr-sec01">
                        <img src={bannerImg01} alt="배너 이미지 01" />
                    </div>
                    <div className="bnr-sec02">
                        <img src={bannerImg02} alt="배너 이미지 02" />
                    </div>
                    <div className="bnr-sec03">
                        <div className="bnr-btn">
                            <a href="#">자세히 보러가기 →</a>
                        </div>
                        <img src={bannerImg03} alt="배너 이미지 03" />
                    </div>
                    <div className="bnr-sec01">
                        <img src={bannerImg01} alt="배너 이미지 01(복제)" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSection
