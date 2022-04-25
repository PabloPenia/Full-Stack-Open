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
      <Statistics bad={bad} good={good} neutral={neutral} />
    </div>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  return (
    <div>
      <h1>Statistics</h1>
      {all > 0 ? (
        <>
          <p>Good {good}</p>
          <p>Neutral {neutral}</p>
          <p>Bad {bad}</p>
          <p>All {all}</p>
          <p>Average {(good - bad) / all}</p>
          <p>Positive {(good / all) * 100} %</p>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}
export default App
