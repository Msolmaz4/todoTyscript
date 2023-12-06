import React from 'react'
import './styles.css'
import { Todo } from './model'
import Single from './Single';

interface Props {
    
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Array<Todo>>>;
}


const TodoList:React.FC<Props> = ({todos,setTodos}:Props) => {
  return (
    <div className='container'>
      <div className='todos'>
        <span className='todos_heading'>
          Active Tasks
        </span>
        {
          todos?.map((todo)=>(
            <Single todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>

          ))
        }

      </div>
      <div className='todos remove'>
      <span className='todos_heading'>
          complete Tasks
        </span>
        {
          todos?.map((todo)=>(
            <Single todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>

          ))
        }


      </div>
    </div>
  )
}

export default TodoList