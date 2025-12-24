import Option from '../detail/Option';

const CartItem = ({
  item,              // cartProduct.js에서 만든 장바구니 item 1개
  sizeOptions = [],  // ["s","m","l"]
  colorOptions = [], // ["black","yellow","pink"]
  onCheck,           // 체크 토글 함수 (cartKey) => void
  onQty,             // 수량 변경 함수 (cartKey, nextQty) => void
  onOption,          // 옵션 변경 함수 (cartKey, nextSize, nextColor) => void
}) => {

  //체크 토글 
  const handleCheck = () => {
    if(typeof onCheck === 'function') onCheck(item.cartKey);
  };

  //옵션에서 사이즈 변경
  const handleSize = (nextSize) => {
    if (typeof onOption !== "function") return;
    onOption(item.cartKey, nextSize, item.color);
  }
  //옵션에서 색상 변경
  const handleColor =(nextColor) => {
    if(typeof onOption !== 'function') return; 
    onOption(item.cartKey, item.size, nextColor)
  }

  //수량 변경 
  // -1 : 최소 수량 1개 
  const handleMinus = () => {
    if(typeof onQty !== 'function') return;
    const next = Math.max(1, Number(item.qty) - 1);
    onQty(item.cartKey, next);
  };

  //
  const handlePlus = () => {
    if(typeof onQty !== 'function') return;
    const next = Math.max(10, Number(item.qty) + 1);
    onQty(item.cartKey, next)
  }
  

  return (
    <div className="cart-item">
      {/* 개별 체크박스 */}
      <label className="cart-check">
        <input 
          type="checkbox"
          checked = {!!item.checked}
          onChange={handleCheck} />
      </label>

      <div className="cart-img">
        {/* 이미지 없을 시 영역만 보이도록 처리 */}
        {item.img ? (<img src={item.img} alt={item.productName}/>) : 
          (<div className="img-empty"/>)
        }
      </div>

      {/* 상품 정보 */}
      <div className="cart-info">
        <p className="cart-prod-name">{item.productName}</p>

        {/* 옵션 (Option.js 재사용) */}
        <div className="cart-options">
          <Option
            label="사이즈"
            options={sizeOptions}
            value={item.size}
            onChange={handleSize}
          />

          <Option
            label="색상"
            options={colorOptions}
            value={item.color}
            onChange={handleColor}
          />
        </div>

        {/* 수량 */}
        <div className="cart-qty">
          <button type="button" onClick={handleMinus}>-</button>
          <span>{item.qty}</span>
          <button type="button" onClick={handlePlus}>+</button>
        </div>

        {/* 할인 적용 안 함: 텍스트만 */}
        <p className="cart-sale-text">
          회원가입 시 {item.salePerc}% 할인
        </p>
        
        {/* 상품 가격 */}
        <p className="cart-price">
          {Number(item.price).toLocaleString()}원
        </p>

      </div>

    </div>
  )
}

export default CartItem