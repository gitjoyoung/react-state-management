import CounterInner from "./CounterInner";
import "./CounterOuter.style.css";

const CounterOuter = () => {
  return (
    <div className="section">
      <p>CounterOuter.jsx</p>
      <CounterInner />
    </div>
  );
};

export default CounterOuter;
