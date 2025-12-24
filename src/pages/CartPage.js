import "./CartPage.scss";
import { useEffect, useState } from "react";
import CartItem from "../components/cart/CartItem";
import productData from "../assets/data/products.json";

import {
  cartGet,
  cartCheck,
  checkAll,
  removeChecked,
  cartQty,
  cartOption,
  totalPrice,
  checkedOrder,
} from "../components/cart/cartProduct";

const CartPage = () => {
  // 장바구니 목록 state
  const [cartItem, setCartItem] = useState([]);

  //주문 완료 팝업 표시 state
  const [orderPopup, setOrderPopup] = useState(false);

  //장바구니 페이지 접속 시 현재 장바구니 목록 보여지기
  useEffect(() => {
    setCartItem([...cartGet()]);
  }, []);

  //cartProduct.js에서 장바구니 배열이 바뀐 후 장바구니 페이지를 새로 로드하는 함수 : 동기화
  const cartSync = () => {
    setCartItem([...cartGet()]);
  };

  //전체 선택 계산 함수
  const AllChecked =
    cartItem.length > 0 && cartItem.every((item) => item.checked);

  //전체 선택|해제
  const handleCheckedAll = () => {
    checkAll(!AllChecked); //true : 전체선택, false:전체해제
    cartSync();
  };

  //선택 삭제
  const handleRemove = () => {
    removeChecked();
    cartSync();
  };

  //개별 체크
  const handleItemCheck = (cartKey) => {
    cartCheck(cartKey);
    cartSync();
  };

  //수량변경
  const handleQty = (cartKey, nextQty) => {
    cartQty(cartKey, nextQty);
    cartSync();
  };

  //옵션 변경
  const handleOption = (cartKey, nextSize, nextColor) => {
    cartOption(cartKey, nextSize, nextColor);
    cartSync();
  };

  //선택상품 총합
  const cartTotal = totalPrice();

  //주문하기 버튼 클릭 시 동작 함수
  const handleOrder = () => {
    if (cartTotal <= 0) return;

    //체크된 상품 삭제
    checkedOrder();
    cartSync();

    //팝업창 띄우기
    setOrderPopup(true);
    setTimeout(() => setOrderPopup(false), 1000);
  };

  return (
    <div id="cart-page">
      <p className="cart-h1">장바구니</p>

      <div className="cart-top">
        <p className="user-info">비회원</p>

        <div className="right">
          <p onClick={handleCheckedAll}>
            {AllChecked ? "전체해제" : "전체선택"}
          </p>

          <button type="button" onClick={handleRemove}>
            삭제
          </button>
        </div>
      </div>

      {/* 장바구니 비어있을 때 */}
      {cartItem.length === 0 ? (
        <div className="cart-empty">장바구니가 비어있습니다</div>
      ) : (
        <div className="cart-wrap">
          {cartItem.map((item) => (
            <CartItem
              key={item.cartKey}
              item={item}
              sizeOptions={productData.size}
              colorOptions={productData.color}
              onCheck={handleItemCheck} // 체크 토글
              onQty={handleQty} // 수량 변경
              onOption={handleOption}
            />
          ))}
        </div>
      )}
      {/* 합계 + 주문하기 (선택된 것만 합계) */}
      <div className="cart-bottom">
        <p className="cart-total">총 합계: {cartTotal.toLocaleString()}원</p>

        <button type="button" className="cart-order" onClick={handleOrder}>
          주문하기
        </button>
      </div>

      {/* 주문 완료 팝업 (alert X) */}
      {orderPopup && <div className="cart-popup">주문이 완료되었습니다.</div>}
    </div>
  );
};

export default CartPage;
