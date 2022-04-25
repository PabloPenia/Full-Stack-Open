import { useState } from 'react'
const App = ({ anecdotes }) => {
  const INITIAL = new Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(INITIAL)
  const getQuote = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const voteQuote = () => {
    const newVote = [...vote]
    newVote[selected] += 1
    setVote([...newVote])
  }
  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      <p>
        Has <strong>{vote[selected]}</strong> vote{vote[selected] > 1 && 's'}.
      </p>
      <button onClick={voteQuote}>Vote</button>
      <button onClick={getQuote}>Next Quote</button>
    </div>
  )
}

export default App
