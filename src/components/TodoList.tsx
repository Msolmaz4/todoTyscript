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
    <div className='todos'>TodoList
     {todos?.map(todo => (
       <Single
        todo= {todo}
        key={todo.id}
        todos={todos}
        setTodos= {setTodos}
        />
      ))}
    </div>
  )
}

export default TodoList