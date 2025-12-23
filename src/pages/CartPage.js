import './CartPage.scss'

//cart에서 쓰일 product json 
// product : id, prod_name, origin_price, sale_perc
// size : s, m , l 
// color : black, pink, yellow 
// useState 사용해서 상태 보기 
const CartPage = () => {
    return (
        <div id="cart-page">
            <p className='cart-h1'>장바구니</p>
            <div className="cart-top">
                <p className='user-info'>비회원</p>
                <div className="right">
                    <p>전체 선택</p>
                    <button>삭제</button>
                </div>
            </div>

            <div className="cart-wrap">
                {/* 체크박스 */}
                
                {/* cart-content */}
                <div className="cart-content">
                    <img src="" alt=""/>
                    <div className="cart-option">
                        {/* json에서 정보 가져오기 
                            상품명, 옵션(사이즈, 색상),할인률 
                        */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartPage
