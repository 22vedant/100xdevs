import { useState } from 'react'
import './App.css'
import CardWrapper from './components/CardWrapper';
import TextWrapper from './components/TextWrapper';
import Todo from './components/Todo'

let count = 4;
function App() {

  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "Damn",
  //     description: "daniel"
  //   },
  //   {
  //     id: 2,
  //     title: "Top",
  //     description: "Text"
  //   },
  //   {
  //     id: 3,
  //     title: "Bottom",
  //     description: "Text"
  //   },
  // ])

  // const addTodos = () => {
  //   setTodos([...todos, {
  //     title: "New Damn Daniel",
  //     description: "New Bottom Text",
  //     id: count++
  //   }])
  // }
  return (
    <>
      <CardWrapper innerComponent={<TextWrapper />} />

    </>
  )
}

export default App

// <>
//   <button onClick={addTodos}>Click Me</button>
//   {
//     todos.map(element =>
//       <Todo key={element.id} title={element.title} description={element.description} />
//     )
//   }
// </>