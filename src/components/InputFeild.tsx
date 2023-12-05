import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void
}

const InputFeild: React.FC<Props> = ({ todo, setTodo,handleAdd }: Props) => {
  return (
    <div>
      <form className="input" onSubmit={handleAdd}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="input"
          placeholder="Enter a Task"
          className="input_box"
        />
        <button className="input_submit" type="submit">
          {" "}
          Go{" "}
        </button>
      </form>
    </div>
  );
};

export default InputFeild;
