import axios from 'axios'
import { useEffect, useState } from 'react'
import ContactList from './components/ContactList'
import NewContact from './components/NewContact'
import Search from './components/Search'
const INITIAL = { name: '', phone: '' }
function App() {
  const [persons, setPersons] = useState([])
  const [newContact, setNewContact] = useState(INITIAL)
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
      setLoading(false)
    })
  }, [])
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
      id: persons.length + 1,
    })
  const handleKeyword = e => setKeyword(e.target.value)
  return (
    <div>
      <h1>Phonebook</h1>
      <Search filter={keyword} handler={handleKeyword} />
      <h2>Add New</h2>
      <NewContact handler={addPerson} inputHandler={handleInputs} state={newContact} />
      <h2>Contacts</h2>
      {loading ? <h3>Loading...</h3> : <ContactList list={persons} keyword={keyword} />}
    </div>
  )
}

export default App
