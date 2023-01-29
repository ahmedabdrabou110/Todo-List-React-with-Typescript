import React from 'react'
import Todos from './components/Todos'
import Todo from './models/todo'
const App = () => {
    const todos = [
        new Todo("Learn ts"),
        new Todo("Learn Javascript")
    ]
  return (
    <div>
      <Todos items={todos}/>
    </div>
  )
}

export default App





