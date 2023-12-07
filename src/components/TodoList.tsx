import React from "react";
import "./styles.css";
import { Todo } from "./model";
import Single from "./Single";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  CompletedTodos: Array<Todo>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  CompletedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="derlem">
      {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Active Tasks</span>
            {todos?.map((todo, index) => (
              <Single
                index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
             {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
      {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          >
            <span className="todos_heading">complete Tasks</span>
            {CompletedTodos?.map((todo, index) => (
              <Single
                index={index}
                todo={todo}
                todos={CompletedTodos}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
              {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
