import { useState } from 'react'
const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const getQuote = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      <button onClick={getQuote}>Next Quote</button>
    </div>
  )
}

export default App
