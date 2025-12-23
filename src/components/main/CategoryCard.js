
const CategoryCard = () => {
    return (
        <div className="category-card">
            <div className="img-card">
            <img src={require(`../../assets/images/하네스/harness/Htype1-1.jpg.png`)}/>
            </div>
        <h2>기본형 하네스의 장점</h2>
        <p>힘분산/안정감/편안한 착용감</p>
        <h2>기본형 하네스의 단점</h2>
        <p>움직임 제한/통제력약함/번거로움</p>
        </div>
    )
}

export default CategoryCard
