
import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import "./Todos.css";
import { TodoContext } from './store/TodoContextProvider';
const Todos:React.FC = () => {
    const TodoCtx = useContext(TodoContext)
  return (
    <ul className='todos'>
      {TodoCtx.items.map(item => (<TodoItem onRemoveItem={TodoCtx.removeTodo.bind(null,item.id)} text={item.text} />))}
    </ul>
  )
}

export default Todos
