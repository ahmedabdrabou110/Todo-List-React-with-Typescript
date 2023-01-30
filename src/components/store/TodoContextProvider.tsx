import React, { useState } from 'react';
import Todo from '../../models/todo';

interface TodoContextType {
    items:Todo[] , 
    addTodo:(text:string)=>void , 
    removeTodo:(id:string)=>void
}

export const TodoContext = React.createContext<TodoContextType>({
    items:[] ,
    addTodo:(text:string)=>{} , 
    removeTodo:(id:string)=>{}
}) ;


interface propsType {
    children:React.ReactNode,
}


export const TodoContextProvider = ({children}:propsType) => {
    const [todos , setTodos] = useState<Todo[]>([])

    const addNewTodo = (todoText:string) =>{
        const newTodo = new Todo(todoText) ;
        setTodos(prevState => {
            return prevState.concat(newTodo);
        })
    }

    const removeItem = (id:string) => {
        setTodos(prev => {
            return prev.filter(item => item.id !== id);
        })
    }

    const TodoContextValue:TodoContextType = {
        items:todos ,
        addTodo:addNewTodo ,
        removeTodo:removeItem ,
    }
    return <TodoContext.Provider value={TodoContextValue}>
        {children}
    </TodoContext.Provider>
}