import Option from '../components/detail/Option'
import productData from '../assets/data/products.json';
import './CartPage.scss'
import { useState } from 'react';




//cart에서 쓰일 product json 
// product : id, prod_name, origin_price, sale_perc
// size : s, m , l 
// color : black, pink, yellow 
// useState 사용해서 상태 보기 
const CartPage = () => {


    const [cartSize, setCartSize] = useState("");
    const [cartColor, setCartColor] = useState("");

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
                        <Option
                            label="사이즈"
                            options={productData.size}
                            value={cartSize}
                            onChange={setCartSize}/>
                        <Option
                            label="색상"
                            options={productData.color}
                            value={cartColor}
                            onChange={setCartColor}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartPage
