import { useContext } from "react";
import { CountContext } from "../context/CountContext";
import "./CounterInner.style.css";
const CounterInner = () => {
  // 상위 컴포넌트에서  CountContext.Provider  로 감싸주어
  //  useContext(CountContext) 으로 사용 할 수 있게 됨
  // useContext 함수를 사용하여 상위 provider를 찾아 값을 가져옴
  const { count, setCount } = useContext(CountContext);
  return (
    <div className="section">
      <p>CounterInner.jsx</p>
      <div className="container">
        <div>
          <p>count: {count}</p>
        </div>
        <button onClick={() => setCount((prev) => prev + 1)}> 증가</button>

        <button onClick={() => setCount(0)}> 초기화</button>
      </div>
    </div>
  );
};

export default CounterInner;
