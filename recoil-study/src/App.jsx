import "./App.css";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "@/recoil/atom";
import TodoItemCreator from "./component/TodoItemCreator";
import TodoItem from "./component/TodoItem";
import TodoListFilters from "@/component/TodoListFilters/index";
import TodoListStats from "./component/todoListStates";

function App() {
  // 리코일 스테이트
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
      {/* <TodoItemCreator /> */}
    </>
  );
}

export default App;
