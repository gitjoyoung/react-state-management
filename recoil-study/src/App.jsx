import "./App.css";
import { TodoItem } from "./component/TodoItem";
import { useRecoilState } from "recoil";
import { todoListState } from "@/recoil/atom";
import TodoItemCreator from "./component/TodoItemCreator";

function App() {
  // 리코일 스테이트
  const todoList = useRecoilState(todoListState);

  return (
    <>
      <p>asdkas</p>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
      {/* <TodoItemCreator /> */}
    </>
  );
}

export default App;
