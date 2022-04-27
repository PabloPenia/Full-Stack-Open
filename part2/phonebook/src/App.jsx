import { useState } from 'react'
const DB = [
  { name: 'Arto Hellas', phone: '040-123456' },
  { name: 'Ada Lovelace', phone: '39-44-5323523' },
  { name: 'Dan Abramov', phone: '12-43-234345' },
  { name: 'Mary Poppendieck', phone: '39-23-6423122' },
]
const INITIAL = { name: '', phone: '' }
function App() {
  const [persons, setPersons] = useState(DB)
  const [newContact, setNewContact] = useState(INITIAL)
  const [keyword, setKeyword] = useState('')
  // input handlers
  const addPerson = e => {
    e.preventDefault()
    const exists = persons.some(person => person.name === newContact.name)
    if (exists) return alert(`${newContact.name} is already added to phonebook.`)

    setPersons([...persons, newContact])
    setNewContact(INITIAL)
  }
  const handleName = e => setNewContact({ ...newContact, name: e.target.value })
  const handlePhone = e => setNewContact({ ...newContact, phone: e.target.value })
  const handleKeyword = e => setKeyword(e.target.value)
  // other functions
  const filtered = (arr, key) => arr.filter(person => (key !== '' ? person.name.toLowerCase().includes(key.toLowerCase()) : true))
  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with <input value={keyword} onChange={handleKeyword} />
      </div>
      <h2>Add New</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newContact.name} onChange={handleName} />
        </div>
        <div>
          number: <input value={newContact.phone} onChange={handlePhone} />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      {filtered(persons, keyword).map(person => (
        <p key={person.name}>
          {person.name} {person.phone}
        </p>
      ))}
    </div>
  )
}

export default App
