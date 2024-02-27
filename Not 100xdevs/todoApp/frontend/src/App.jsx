import { useState } from 'react'
import CreateTodo from './components/CreateTodo'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateTodo />
    </>
  )
}

export default App
