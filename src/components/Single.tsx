import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { Todo } from './model';
import './styles.css'

interface Props {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Array<Todo>>>;
    
}


const Single= ({todo,todos,setTodos}:Props) => {
  return (
    <div>
        <form action="" className='todos_single'>
            <span className='todos_single--text'>
                {todo.todo}
            </span>
            <div>
               <span className='icon'><CiEdit /></span> 
               <span className='icon'><MdDelete /></span> 
               <span className='icon'><IoMdDoneAll /></span> 
            </div>
        </form>
    </div>
  )
}

export default Single