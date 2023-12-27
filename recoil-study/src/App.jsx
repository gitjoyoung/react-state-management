import "./App.css";
import { TodoItem } from "./component/TodoItem";
import { useRecoilState } from "recoil";
import { todoListState } from "@/recoil/atom";

function App() {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  let id = 0;
  function getId() {
    return id++;
  }
  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        text: "asd",
        id: getId(),
      },
    ]);
  };
  return (
    <>
      <button onClick={addItem}>add Item</button>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
      {/* <TodoItemCreator /> */}
    </>
  );
}

export default App;
