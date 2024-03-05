
import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import './App.css'
import Appbar from './components/Appbar'
// import Dashboard from './components/Dashboard'
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))
// import Landing from './components/Landing'


function App() {

  return (

    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path='/' element={
          <Suspense fallback={"Loading"}>
            <Landing />
          </Suspense>}></Route>
        <Route path='/dashboard' element={
          <Suspense fallback={"Loading"}>
            <Dashboard />
          </Suspense>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
