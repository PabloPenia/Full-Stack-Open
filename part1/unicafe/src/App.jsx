import { useState } from 'react'
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button text="Good" setter={setGood} />
        <Button text="Neutral" setter={setNeutral} />
        <Button text="Bad" setter={setBad} />
      </div>
      <h1>Statistics</h1>
      {all > 0 ? (
        <table>
          <tbody>
            <Statistics text="Good" value={good} />
            <Statistics text="Neutral" value={neutral} />
            <Statistics text="Bad" value={bad} />
            <Statistics text="All" value={all} />
            <Statistics text="Average" value={((good - bad) / all).toFixed(1)} />
            <Statistics text="Positive" value={((good / all) * 100).toFixed(1)} />
          </tbody>
        </table>
      ) : (
        <p>No Feedback Given</p>
      )}
    </div>
  )
}
const Button = ({ text, setter }) => {
  const handler = () => setter(prev => prev + 1)
  return <button onClick={handler}>{text}</button>
}
const Statistics = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value} {text === 'Positive' && '%'}
      </td>
    </tr>
  )
}
export default App
