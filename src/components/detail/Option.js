import { useEffect, useRef, useState } from "react";
import "./Option.scss";

//부모 컴포넌트에서 json을 활용한 props로 정보 전달하기 

/* props 목록 설명
label : 사이즈 / 색상 
option : s,m,l / black, yellow, pink 
value : '사용자가 선택한 값'
onChange : 옵션 선택 시 부모 state 변경용 함수
*/

const Option = ({label, options=[], value='',onChange,}) => {

  // 옵션 리스트 열림/닫힘 상태
  const [showOption, setShowOption] = useState(false);

  //옵션 영역 Ref (바깥 영역 클릭 감지용)
  const optionRef = useRef(null);

  //props로 넘어온 label의 값을 대입해 보여줄 변수 (선택 전 안내문구)
  const placeholder = `(필수) 옵션을 선택해주세요(${label})`;

  //옵션 탭 클릭 동작 함수 -> 열림/ 닫힘
  const handleToggle = () => {
    setShowOption((prev) => !prev);
  };

  //옵션 선택 시 선택값 부모로 전달 후 옵션 리스트 닫기 동작 
  const handleSelect = (item) => { 
    if (typeof onChange === "function") onChange(item); 
    setShowOption(false); };

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
      {/* 옵션 선택 탭 */}
      <button 
      type="button" 
      // 클릭여부, 값 선택 여부로 className 변경 
      className={`option-tab ${showOption ? 'show' : ''} ${value ? 'isvalue' : ''}`}
      onClick={handleToggle}>
        {/* 선택값이 보여지거나 placeholder가 보여지거나 */}
        <span className="option-placeholder">
          {value ? value : placeholder}
        </span>

        {/* 화살표 */}
        <span className={`option ${showOption ? 'up' : 'down'}`}/>
      </button>

        {/* 옵션 리스트 보여지기  */}
      {     
        showOption && (
          <ul className="option-list">
            {
              options.map((item) => (
                <li key={`${label}-${item}`}>
                  <button 
                    type="button"
                    className={`option-item${value === item ? 'isActive':''}`}
                    onClick={() => {handleSelect(item)}}>
                    {item}
                  </button>
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}

export default Option