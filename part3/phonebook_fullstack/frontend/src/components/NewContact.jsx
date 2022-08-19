const NewContact = ({ handler, inputHandler, state }) => {
  return (
    <form onSubmit={handler}>
      <p>
        <strong>name</strong> <input name="name" value={state.name} onChange={inputHandler} />
      </p>
      <p>
        <strong>number</strong> <input name="phone" value={state.phone} onChange={inputHandler} />
      </p>
      <div>
        <button style={{ margin: '1em auto', minWidth: '300px' }}>add</button>
      </div>
    </form>
  )
}
export default NewContact
