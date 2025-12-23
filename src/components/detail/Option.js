import { useEffect, useRef, useState } from "react";
// import "./Option.scss";

//부모 컴포넌트에서 json을 활용한 props로 정보 전달하기 

/* props 목록 설명
label : 사이즈 / 색상 
option : s,m,l / black, yellow, pink 
value : '사용자가 선택한 값'
onChange : void 

*/

const Option = ({label, options=[], value='',onChange,}) => {

  const [showOption, setShowOption] = useState(false);

  const optionRef = useRef(null);

  const placeholder = `(필수) 옵션을 선택해주세요(${label})`;

  const handleToggle = () => {
    setShowOption((prev) => !prev);
  };

  const handleSelect = (item) => {
    onchange(item);
    setShowOption(false)
  }

  //옵션 탭 바깥 클릭 시 닫힘 동작
  useEffect(() => {
    const handleOutClick = (e) => {
      if(!optionRef.current) return;
      if(!optionRef.current.contains(e.target)){
        setShowOption(false);
      }
    };
    document.addEventListener("mousedown", handleOutClick);
    return () => document.removeEventListener("mousedown", handleOutClick);

  }, []);


  return (
    <div ref={optionRef} className="option-wrap">
      {/* 옵션 선택 버튼 */}
      <button 
      type="button" 
      // 클릭여부, 값 선택 여부로 className 변경 
      className={`option ${showOption ? 'show' : ''} ${value ? 'isvalue' : ''}`}
      onClick={handleToggle}>
        <span className="option-placeholder">
          {value ? value : placeholder}
        </span>
        <span className={`option${showOption ? 'up' : 'down'}`}/>
      </button>
      {
        showOption && (
          <ul className="option-list">
            {
              options.map((item) => {
                <li key={`${label}-${item}`}>
                  <button 
                    type="button"
                    className={`option-item${value === item ? 'isActive':''}`}
                    onClick={() => {handleSelect(item)}}>
                    {item}
                  </button>
                </li>
              })
            }
          </ul>
        )
      }
    </div>
  )
}

export default Option