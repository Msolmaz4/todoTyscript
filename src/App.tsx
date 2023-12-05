import React, { useState } from "react";

import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./components/model";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

   if(todo){
    setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
   }



  };

  return (
    <div className="App">
      <span className="heading"> TASKIFY</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
