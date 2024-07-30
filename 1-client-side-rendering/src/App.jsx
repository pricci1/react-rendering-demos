import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const random = Math.random()

  return (
    <>
      <h1>React Client Side Rendering</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
      <p>A random number: {random}</p>
    </>
  )
}

export default App
