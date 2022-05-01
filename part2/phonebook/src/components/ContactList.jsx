import Contact from './Contact'
const ContactList = ({ list, keyword, remove }) => {
  const filter = (arr, key) => arr.filter(person => (key !== '' ? person.name.toLowerCase().includes(key.toLowerCase()) : true))
  return (
    <div>
      {filter(list, keyword).map(contact => (
        <Contact key={contact.id} data={contact} remove={remove} />
      ))}
    </div>
  )
}
export default ContactList
