import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeaderWithButton from './components/HeaderWithButton'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <HeaderWithButton />
      <Header title='Top Text'></Header>
      {/* <Header title='Bottom Text'></Header> */}
    </>
  )
}

export default App
