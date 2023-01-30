import React , {useContext, useRef} from 'react'
import "./NewTodos.css";
import { TodoContext } from './store/TodoContextProvider';
const NewTodos:React.FC= () => {

    const TodoCtx = useContext(TodoContext) ;

    const inputTextValue = useRef<HTMLInputElement>(null)

    const submitFormHandler = (event:React.FormEvent) =>{
        // prevent default 
        event.preventDefault();

        const enteredValue = inputTextValue.current!.value;

        if(enteredValue.trim().length === 0) return 0 ;

        TodoCtx.addTodo(enteredValue);


    }
  return (
    <form onSubmit={submitFormHandler}>
      <label htmlFor="text">Enter Todo Text</label>
      <input type="text" id="text" autoComplete='off' ref={inputTextValue} />
      <button>Add New Todo</button>
    </form>
  )
}

export default NewTodos
