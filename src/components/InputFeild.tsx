import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void
}

const InputFeild: React.FC<Props> = ({ todo, setTodo,handleAdd }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <form className="input" onSubmit={(e)=>{
        handleAdd(e)
        inputRef.current?.blur()

        // blur() fonksiyonu ise, bir HTML elementinin odak (focus) durumunu sonlandırır. Yani, bu fonksiyonu çağırdığınızda, ilgili input elementi odaklı durumdan çıkar ve herhangi bir kullanıcı etkileşimine yanıt vermez.

    }}>
        <input
          ref={inputRef}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="input"
          placeholder="Enter a Task"
          className="input_box"
        />
        <button className="input_submit" type="submit">
         
          Go
        </button>
      </form>
    </div>
  );
};

export default InputFeild;
