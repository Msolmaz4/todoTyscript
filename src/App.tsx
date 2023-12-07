import React, { useState } from "react";

//https://docs.dndkit.com/ react drag-drop doc bak bj ayfada biray sadceles

import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [CompletedTodos, setCompletedTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  //console.log(todos);

  const onDragEnd = (result: DropResult) => {
    console.log(result)
    const { destination, source } = result;

    console.log( destination);
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = CompletedTodos;
    // Source Logic
    if (source.droppableId === "derlem") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "derlem") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
   };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading"> TASKIFY</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

        <TodoList
          CompletedTodos={CompletedTodos}
          setCompletedTodos={setCompletedTodos}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
