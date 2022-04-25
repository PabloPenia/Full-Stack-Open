import { useState } from 'react'
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handler = setter => setter(prev => prev + 1)
  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <button onClick={() => handler(setGood)}>Good</button>
        <button onClick={() => handler(setNeutral)}>Neutral</button>
        <button onClick={() => handler(setBad)}>Bad</button>
      </div>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  )
}

export default App
