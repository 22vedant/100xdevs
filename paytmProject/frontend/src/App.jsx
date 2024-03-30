import './App.css'
import { SignUp, Signin, Dashboard, Send } from "../src/index"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/send" element={<Send />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
