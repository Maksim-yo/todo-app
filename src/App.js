import React from 'react'
import './features/TodoList/TodoList'
import Header from './features/header/Header'
import TodoList from './features/TodoList/TodoList'
import { useSelector } from 'react-redux'

function App() {
  // const todos = useSelector((state) => state.todos)

  return (
    <div className="Todo">
      <div className="container">
        <div className="todo-title">Todo App</div>

        <Header />
        <TodoList />
      </div>
    </div>
  )
}

export default App
