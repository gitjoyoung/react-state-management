import { useState } from "react";
import { CountContext } from "./context/CountContext";
import CounterOuter from "./components/CounterOuter";

function App() {
  const [count, setCount] = useState(0);

  return (
    // 콘텍스트 프로바이더를 사용
    //  CountContext.Provider를 사용하여 하위 컴포넌트에 값을 넘김
    <CountContext.Provider value={{ count, setCount }}>
      <p>App.jsx</p>
      <h1>시작 페이지</h1>
      <CounterOuter />
      <span>{count}</span>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        초기화
      </button>
    </CountContext.Provider>
  );
}

export default App;
