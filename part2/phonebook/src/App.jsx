import { useState } from 'react'
import ContactList from './components/ContactList'
import NewContact from './components/NewContact'
import Search from './components/Search'
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
  // handlers
  const addPerson = e => {
    e.preventDefault()
    const exists = persons.some(person => person.name === newContact.name)
    if (exists) return alert(`${newContact.name} is already added to phonebook.`)

    setPersons([...persons, newContact])
    setNewContact(INITIAL)
  }
  const handleInputs = e =>
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value,
    })
  const handleKeyword = e => setKeyword(e.target.value)
  return (
    <div>
      <h1>Phonebook</h1>
      <Search filter={keyword} handler={handleKeyword} />
      <h2>Add New</h2>
      <NewContact handler={addPerson} inputHandler={handleInputs} state={newContact} />
      <h2>Contacts</h2>
      <ContactList list={persons} keyword={keyword} />
    </div>
  )
}

export default App
