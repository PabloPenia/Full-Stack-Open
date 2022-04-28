import Contact from './Contact'
const ContactList = ({ list, keyword }) => {
  const filter = (arr, key) => arr.filter(person => (key !== '' ? person.name.toLowerCase().includes(key.toLowerCase()) : true))
  return (
    <div>
      {filter(list, keyword).map(contact => (
        <Contact key={contact.id} name={contact.name} phone={contact.phone} />
      ))}
    </div>
  )
}
export default ContactList
