import { useState } from 'react' // It is hook which is import from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState always return two values in array form.
  // counter variable, setcounter is function
  let [counter, srkCounter] = useState(15) // we can do anything inside useState.
  // let counter = 15

  const addValue = () => {
    if (counter < 20){
      srkCounter(prevCounter => prevCounter + 1)
      srkCounter(prevCounter => prevCounter + 1)
      srkCounter(prevCounter => prevCounter + 1)
      srkCounter(prevCounter => prevCounter + 1)
      
    }else{
      alert("This is maximum adding limit")
      console.log("This is maximum value")
    }
    // console.log("Before clicked", counter);
    // counter  = counter +1
    // console.log("After clicked",counter)
    // srkCounter(counter + 1)
    // counter =counter+1

  }

  const removeValue = () => {
    if (counter > 0) {
      srkCounter(counter - 1);
    } else {
      // Optionally, you can handle the case where the counter is already 0
      // For example, you could display a message or prevent further decrement
      console.log("Counter is already at 0");
      alert("The value at 0 we cannot go in negative")
    }
    // srkCounter(counter -1)
  }

  return (
    <>
      <h1>Chair aur ract</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
