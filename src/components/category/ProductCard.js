import { useState } from "react";
import likeOn from "../../assets/images/banner/Banner01.png";
import likeOff from "../../assets/images/banner/Banner02.png";


const ProductCard = ({item}) => {
    const [isHover,setIsHover] =useState(false);
    const getImagePath = (imgName)=>{
        let hoverName = imgName;
        if( isHover ){
            hoverName = item.img2;
        }
        return require(`../../assets${hoverName}`);
    }
    return (
        <div className="category-prodtag">
            <div className="card-top"
            onMouseEnter={()=>{setIsHover(true)}}
            onMouseLeave={()=>{setIsHover(false)}}>
                <img src={getImagePath(item.img1)} />
                {/* <img className="Like"
                src={item.like ? likeOn : likeOff}
                alt="like"
                /> */}
                
            </div>
            <div className="card-bottom">
                <p>{item.prod_name}</p>
                <p>￦{item.origin_price}</p>
            </div>
        </div>
    )
}

export default ProductCard
