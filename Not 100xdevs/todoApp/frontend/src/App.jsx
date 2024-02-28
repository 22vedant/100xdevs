import { useState } from 'react'
import CreateTodo from './components/CreateTodo'
// import './App.css'
import Todo from './components/Todo'
function App() {
  const [todos, setTodos] = useState([])
  // fetch('https://localhost:3200/todos')
  //   .then((res) => res.json())
  //   .then((res) => setTodos(res.todos))
  return (
    <>
      <CreateTodo />
      <Todo todos={todos} />
    </>
  )
}

export default App
