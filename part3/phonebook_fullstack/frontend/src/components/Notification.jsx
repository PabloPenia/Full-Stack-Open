const Notification = ({ message }) => {
  if (message === null) return null
  let type
  if (message.includes('SUCCESS')) {
    type = ' success'
  } else if (message.includes('ERROR')) {
    type = ' error'
  } else {
    type = null
  }
  return <div className={`notification${type}`}>{message}</div>
}
export default Notification
