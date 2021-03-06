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

const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request
}

const update = (id, newData) => {
  const request = axios.put(`${baseUrl}/${id}`, newData)
  return request.then(response => response.data)
}
const contacts = {
  getAll,
  create,
  remove,
  update,
}
export default contacts
