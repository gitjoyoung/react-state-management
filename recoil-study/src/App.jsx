import "./App.css";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "@/recoil/atom";
import TodoItemCreator from "./component/TodoItemCreator";
import TodoItem from "./component/TodoItem";
import TodoListFilters from "@/component/TodoListFilters/index";
import TodoListStats from "./component/todoListStates";

function App() {
  // 투두리스트 밸류로 가져와서 보여주기 read only
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default App;
