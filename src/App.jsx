import './App.css'

import React, {useState} from "react"

function App() {
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState("Yes")
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    
    function double() {
        setCount(prevCount => prevCount * 2)
    }
    
    function sqrt() {
        setCount(prevCount => prevCount * prevCount)
    }

  function clear() {
        setCount(prevCount => prevCount = 0)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={double}>double</button>
            <button onClick={sqrt}>sqrt</button>
          <button onClick={clear}>clear</button>
        </div>
    )
}

export default App
