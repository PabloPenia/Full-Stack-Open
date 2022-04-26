import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')
  const addPerson = e => {
    e.preventDefault()
    const exists = persons.some(person => person.name === newName)
    if (exists) return alert(`${newName} is already added to phonebook.`)

    const newPerson = { name: newName }
    setPersons([...persons, newPerson])
    setNewName('')
  }
  const handleChange = e => setNewName(e.target.value)
  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  )
}

export default App
