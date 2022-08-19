import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
	const response = axios.get(baseUrl)
	return response.then((response) => response.data)
}
const create = (newData) => {
	const response = axios.post(baseUrl, newData)
	return response.then((response) => response.data)
}
const remove = (id) => {
	const response = axios.delete(`${baseUrl}/${id}`)
	return response.then((response) => response.data)
}
const update = (id, newData) => {
	const response = axios.put(`${baseUrl}/${id}`, newData)
	return response.then((response) => response.data)
}
const contacts = {
	getAll,
	create,
	remove,
	update,
}
export default contacts
