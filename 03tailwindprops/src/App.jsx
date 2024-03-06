import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    username : "Hiba Saifi",
    age: 1
  }
  
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-md mb-4 relative w-[400px]'>Sharukh khan</h1>
      <Card username="Sharukh khan" btnText="click me"/>
      <Card username="Hiba Saifi" />
    </>
  )
}

export default App
