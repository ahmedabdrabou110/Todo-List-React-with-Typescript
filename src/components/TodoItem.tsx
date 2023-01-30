import React from 'react'
import "./TodoItem.css"
const TodoItem:React.FC<{text:string , onRemoveItem:()=>void}> = (props) => {
    
  return (
    <li className='todoItem' onClick={props.onRemoveItem}>
      {props.text}
    </li>
  )
}

export default TodoItem
