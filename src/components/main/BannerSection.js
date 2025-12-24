import "./BannerSection.scss";
import bannerImg01 from "../../assets/images/banner/Banner01.png"
import bannerImg02 from "../../assets/images/banner/Banner02.png"
import bannerImg03 from "../../assets/images/banner/Banner03.png"

import { useErffct, useState, useRef } from "react"; //자동 슬라이드 클론용
import "./BannerSection.scss";

const BannerSection = () => {
    // 원본 3장 + 마지막에 1번을 복제(클론)해서 4장처럼 굴림
    // 0: 1번, 1: 2번, 2: 3번, 3: (복제 1번)
    const [idx, setIdx] = useState(0);

    // 트렌지션을 잠깐 끄는 스위치 (복제 -> 진짜 1번으로 순간이동 할 때만)
    const [animate, setAnimate] = useState(true);
    // setInterval 정리용
    const timeRef = useRef(null);

    // 자동 슬라이드 만들기
    useErffct = (()=>{
        // 자동 슬라이드 시작
        // 클론 방식은 넘어가는 게 자연스러워야해서 % 사용하지 않음
        timeRef.current = setInterval(()=>{  //setInterval( 함수, 시간 ) : 시간마다 함수를 반복 실행해주는 자바스크립트 
            setIdx((prev) => prev + 1);
        }, 3000);
    })
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
