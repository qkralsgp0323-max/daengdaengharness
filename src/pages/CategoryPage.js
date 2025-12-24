import { useState,useEffect } from "react"
import CategoryCard from "../components/main/CategoryCard"
import Products from "../assets/data/products.json"
import './CategoryPage.scss';

const CategoryPage = () => {
    const [CardList,setCardList] = useState([]);
    const [bestList,setBestList] = useState([]);
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
                    </div>
                </div>
                <div className="category-best">
                <p>댕댕하네's <span>기본형</span> 베스트 상품</p>
                {
                    bestList.map((item)=>{
                        return(
                            <CategoryCard 
                                key={item.id}
                                item={item}
                            />
                        )
                    })
                }
                </div>
                <div className="category-prod">
                {
                    CardList.map((item)=>{
                        return(
                            <CategoryCard 
                                key={item.id}
                                item={item}
                            />
                        )
                    })
                }
                </div>
        CategoryPage
        </div>
        </div>

    )
}

export default CategoryPage
