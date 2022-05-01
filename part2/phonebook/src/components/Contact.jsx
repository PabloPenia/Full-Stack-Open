const Contact = ({ data, remove }) => {
  return (
    <p>
      <strong>{data.name}</strong> {data.phone}
      <button onClick={() => remove(data.id)}>Delete</button>
    </p>
  )
}
export default Contact
