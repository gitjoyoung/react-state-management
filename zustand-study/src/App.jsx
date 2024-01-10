import "./App.css";
import { create } from "zustand";
import { useCountStore } from "./store/store";

// Custom Hook을 사용하여 Zustand 스토어 생성
const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

// set/를 사용하여 setState스토어를 업데이트하세요.
// 스토어 업데이트를 수행하려면 항상 set(또는 )을 사용하세요.

function BearCounter() {
  // useStore를 통해 bear 상태를 가져옴
  const bears = useStore((state) => state.bears);
  return <h1>{bears} around here...</h1>;
}

function App() {
  const bear = useStore();

  // 꺼내쓸때 디스트럭처링으로 쓰면 좋음
  // useStore를 통해 상태 및 액션을 가져옴
  const { bears, increasePopulation, removeAllBears } = useStore();
  // 스토어 폴더에 정의한 주스탠드 스토어를 가져옴
  const { count, dispatch } = useCountStore();
  return (
    <>
      {bear.bears}
      <p>App component count : {bears}</p>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>inisial</button>
      <BearCounter />

      <p>store count :{count}</p>
       {/* dispatch를 사용하여 액션 디스패치하는 버튼 전달인자가 객체이기에 객체로 전달 */}
      <button onClick={() => dispatch({ type: "increment", qty: 2 })}>
        two up
      </button>
      <button onClick={() => dispatch({ type: "decrement", qty: 3 })}>
        three down
      </button>
    </>
  );
}

export default App;
