import "./App.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { todoData } from "./js/todoData";
import { useState } from "react";
import { Todolist } from "./components/Todolist";
import BtnHandle from "./components/BtnHandle";

function App() {
  // js 더미 데이터를 불러오기 위해 useState로 사용
  const [todolists, setTodolists] = useState(todoData);
  const workingTodo = todolists.filter((item) => !item.set);
  const completeTodo = todolists.filter((item) => item.set);
  const { delBtnHandler, cancleHandler, completeHandler } = BtnHandle(
    todolists,
    setTodolists
  );

  return (
    <div className="App">
      <Header />
      <Form todolists={todolists} setTodolists={setTodolists} />
      <Todolist
        title={"Working.. 🔥"}
        delBtnHandler={delBtnHandler}
        btnToggle={completeHandler}
        typeTodo={workingTodo}
        type={false}
      />
      <Todolist
        title={"Done..! 🎉"}
        delBtnHandler={delBtnHandler}
        btnToggle={cancleHandler}
        typeTodo={completeTodo}
        type={true}
      />
    </div>
  );
}

export default App;

// 컴포넌트 분리 전 코드들
// todolists={workingTodo}
// todolists={completeTodo}

// const delBtnHandler = (id) => {
//   const deleteTodo = todolists.filter((item) => item.id !== id);
//   setTodolists(deleteTodo);
// };

// const cancleHandler = (id) => {
//   const cancleTodo = todolists.map((item) => {
//     if (item.id === id) {
//       return { ...item, set: false };
//     }
//     return item;
//   });
//   setTodolists(cancleTodo);
// };

// const completeHandler = (id) => {
//   const completeTodo = todolists.map((item) => {
//     if (item.id === id) {
//       return { ...item, set: true };
//     }
//     return item;
//   });
//   setTodolists(completeTodo);
// };
