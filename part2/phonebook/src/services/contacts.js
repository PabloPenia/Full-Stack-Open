import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newData => {
  const request = axios.post(baseUrl, newData)
  return request.then(response => response.data)
}

// const update = (id, newData) => {
//   const request = axios.put(`${baseUrl}/${id}`, newData)
//   return request.then(response => response.data)
// }
const contacts = {
  getAll,
  create,
}
export default contacts
