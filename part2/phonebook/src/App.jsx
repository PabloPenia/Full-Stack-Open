import { useEffect, useState } from 'react'
import ContactList from './components/ContactList'
import NewContact from './components/NewContact'
import Search from './components/Search'
import contacts from './services/contacts'
const INITIAL = { name: '', phone: '' }
function App() {
  const [persons, setPersons] = useState([])
  const [newContact, setNewContact] = useState(INITIAL)
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    contacts.getAll().then(response => {
      setPersons(response)
      setLoading(false)
    })
  }, [])
  // handlers
  const addPerson = e => {
    e.preventDefault()
    const exists = persons.filter(person => person.name === newContact.name)
    console.log(exists)
    if (exists.length > 0) {
      if (window.confirm(`${newContact.name} is already added to phonebook, replace the old phone with the new one?`)) {
        contacts.update(exists[0].id, newContact).then(response => setPersons([...persons.filter(person => person.id !== response.id), response]))
        setNewContact(INITIAL)
      } else {
        return
      }
    } else {
      contacts.create(newContact).then(response => {
        setPersons([...persons, response])
        setNewContact(INITIAL)
      })
    }
  }
  const handleInputs = e =>
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value,
      id: persons.length + 1,
    })
  const handleKeyword = e => setKeyword(e.target.value)
  const handleDelete = id => {
    const contact = persons.filter(person => person.id === id)
    if (window.confirm(`Are you sure you want to delete ${contact[0].name} from the phonebook?`)) {
      contacts.remove(id).then(() => {
        const updatedPersons = persons.filter(person => person.id !== id)
        setPersons([...updatedPersons])
      })
    }
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <Search filter={keyword} handler={handleKeyword} />
      <h2>Add New</h2>
      <NewContact handler={addPerson} inputHandler={handleInputs} state={newContact} />
      <h2>Contacts</h2>
      {loading ? <h3>Loading...</h3> : <ContactList list={persons} keyword={keyword} remove={handleDelete} />}
    </div>
  )
}

export default App
