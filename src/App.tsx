import React from 'react'
import Todos from './components/Todos'
import NewTodos from './components/NewTodos'
import { TodoContextProvider } from './components/store/TodoContextProvider';
const App = () => {
    

  return (
    <TodoContextProvider>
        <NewTodos />
      <Todos />
    </TodoContextProvider>
  )
}

export default App





