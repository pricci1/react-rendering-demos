import { useState } from 'react'

function App({ randomValueFromServer }) {
  const [count, setCount] = useState(0)

  const random = Math.random()

  return (
    <>
      <h1>React Server Side Rendering (with hydration)</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
      <p>A random number: {random}</p>
      <p>Value from server: {randomValueFromServer}</p>
    </>
  )
}

export default App
