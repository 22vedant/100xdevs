import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <Card title={"Vedant Chinta"} description={"This is a test to check out props injection in react"} interests={["C++", 'vegetables']} />
      <Card title={"Top Text"} description={"Hey Dawg! Want some ice-cream? Only a spoonful!"} />
    </>
  )
}

export default App
