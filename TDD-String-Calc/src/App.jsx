import { useState } from 'react'
import './App.css'
import { add } from './utils/add'

function App() {
  const [value, setValue] = useState('')
  const [result, setResult] = useState(0)

  function handleClick(){
    setResult(add(value))
  }

  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleClick}>Calculate</button>

      <div>
        {result}
      </div>
    </>
  )
}

export default App
