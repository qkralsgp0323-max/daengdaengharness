import { useState,useEffect } from "react"
import ProductCard from "../components/category/ProductCard";
import Products from "../assets/data/products.json"
import './CategoryPage.scss';

const CategoryPage = () => {
    const [CardList,setCardList] = useState([]);
    const [bestList,setBestList] = useState([]);
    const [soldOut,setSoldOut] = useState([])
//best가 true인 애들만 보이게
    useEffect(()=>{
        const items = Products.Product.filter((item)=>{
            return item.best === true && item.type === 'H';
        });
        const cditem = Products.Product.filter((item)=>{
            return item.type === 'H';
        })
        setBestList(items);
        setCardList(cditem);
    },[])
    return (
        <div id="category-page">
            <div className="category-wrap">
                <div className="category-top">
                    <div>
                        <img/>
                    </div>
                </div>
                <div className="category-best">
                <p>댕댕하네's <span>기본형</span> 베스트 상품</p>
                <div className="cetegory-bestlist">
                {
                    bestList.map((item)=>{
                        return(
                        <ProductCard key={item.id} 
                        item={item} />
                        )
                    })
                }
                </div>
                </div>
                <div className="category-prod">
                {
                    CardList.map((item)=>{
                        return(
                            <ProductCard
                            key={item.id}
                            item={item}
                            />
                        )
                    })
                }
                {
                    CardList.map((item)=>{
                        return(
                            <ProductCard
                            key={item.id}
                            item={item}
                            />
                        )
                    })
                }
                </div>
        <div className="info-text">
            <p>강아지 별로 개인차가 있을수 있습니다</p>
        </div>
        </div>
        </div>

    )
}

export default CategoryPage