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
  const mostRated = vote.indexOf(Math.max(...vote))
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        <strong>{anecdotes[selected]}</strong>
      </p>
      <p>
        Has <strong>{vote[selected]}</strong> vote{vote[selected] > 1 && 's'}.
      </p>
      <button onClick={voteQuote}>Vote</button>
      <button onClick={getQuote}>Next Quote</button>
      <h1>Most rated anecdote</h1>
      <p>
        <strong>{anecdotes[mostRated]}</strong>
      </p>
      <p>
        Has <strong>{vote[mostRated]}</strong> vote{vote[mostRated] > 1 && 's'}.
      </p>
    </div>
  )
}

export default App
