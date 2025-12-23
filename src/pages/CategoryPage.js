import { useState } from "react"
import CategoryCard from "../components/main/CategoryCard"

const CategoryPage = () => {
    const [CardList,setCardList] = useState('');
    
    return (
        <div id="category-page">
            <div className="category-top">
                <img src="" />
            </div>
            <div className="category-best">

            </div>
            <div className="category-prod">
            <CategoryCard />

            </div>
        CategoryPage
        </div>
    )
}

export default CategoryPage
