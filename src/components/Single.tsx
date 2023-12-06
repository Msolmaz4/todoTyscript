import React, { useEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { Todo } from "./model";
import "./styles.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const Single = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [edittodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: edittodo } : todo))
    );
    setEdit(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    inputRef.current?.focus()
  },[edit])
  return (
    <div>
      <form
        action=""
        className="todos_single"
        onSubmit={(e) => handleEdit(e, todo.id)}
      >
        {edit ? (
          <input
          ref={inputRef}
            value={edittodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : todo.isDone ? (
          // burda s ihtar etikedig bir sey olabilir arastir
          <s className="todos_single--text">{todo.todo}</s>
        ) : (
          <span className="todos_single--text">{todo.todo}</span>
        )}

        {todo.isDone ? (
          // burda s ihtar etikedig bir sey olabilir arastir
          <s className="todos_single--text">{todo.todo}</s>
        ) : (
          <span className="todos_single--text">{todo.todo}</span>
        )}

        <div>
          <span
            className="icon"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <CiEdit />
          </span>
          <span className="icon" onClick={() => handleDelete(todo.id)}>
            <MdDelete />
          </span>
          <span className="icon" onClick={() => handleDone(todo.id)}>
            <IoMdDoneAll />
          </span>
        </div>
      </form>
    </div>
  );
};

export default Single;
