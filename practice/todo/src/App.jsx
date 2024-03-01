import { useState, useEffect, useMemo } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'



function App() {
  // const [todos, setTodos] = useState([])
  // const [count, setCount] = useState(1);
  // const getId = (e) => {
  //   setCount(e.currentTarget.id);
  //   // console.log(e.currentTarget.id);
  // };

  const [count, setCount] = useState(0)
  const [inputs, setInputs] = useState(0)
  const counter = () => {
    setCount((prev) => prev + 1)
  }
  let sum = useMemo(() => {
    let final = 0;
    for (let i = 1; i <= inputs; i++) {
      final += i
    }
    return final
  }, [inputs])


  const SUM = (e) => {
    setInputs(e.target.value)
    // console.log(input);(n * (n + 1)) / 2

  }
  return (
    <>
      {/* <button id='1' onClick={getId}>1</button>
      <button id='2' onClick={getId}>2</button>
      <button id='3' onClick={getId}>3</button>
      <button id='4' onClick={getId}>4</button>
      <Todo id={count} /> */}
      <input type="text" onChange={SUM} />
      <div>Sum is {sum}</div>
      <button onClick={counter}>
        Counter {count}
      </button>
    </>
  )
}

export default App
