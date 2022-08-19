const express = require('express')
const morgan = require('morgan') //? 3.7
//* App config
const PORT = 3001
const app = express()
app.use(express.json())
//? 3.8
morgan.token('body', (request, response) => JSON.stringify(request.body))
app.use(
	morgan(':method :url :status :res[content-length] - :response-time ms :body')
)
//* Data
let data = [
	{
		id: 1,
		name: 'Arto Hellas',
		number: '040-123456',
	},
	{
		id: 2,
		name: 'Ada Lovelace',
		number: '39-44-5323523',
	},
	{
		id: 3,
		name: 'Dan Abramov',
		number: '12-43-234345',
	},
	{
		id: 4,
		name: 'Mary Poppendieck',
		number: '39-23-6423122',
	},
]

//* Routes
//? ex 3.1
app.get('/api/persons', (request, response) => {
	response.json(data)
})
//? ex 3.2
app.get('/api/info', (request, response) => {
	const fecha = new Date()
	response.send(
		`<p>Phonebook has info for ${data.length} people.</p><p>${fecha}</p>`
	)
})
//? ex 3.3
app.get('/api/persons/:id', (request, response) => {
	const id = +request.params.id
	const person = data.find((person) => person.id === id)

	if (person) {
		response.json(person)
	} else {
		response.status(404).end()
	}
})
//? ex 3.4
app.delete('/api/persons/:id', (request, response) => {
	const id = +request.params.id
	data = data.filter((person) => person.id !== id)
	console.log(data)
	response.status(204).end()
})
//? ex 3.5
const genId = () => new Date().getTime() * Math.random() * 100000

app.post('/api/persons', (request, response) => {
	const { name, number } = request.body
	if (!name || !number) {
		return response.status(400).json({
			error: 'Name and number are required.',
		})
	}
	//? ex 3.6
	const exists = data.filter((person) => person.name === name)

	if (exists) {
		return response.status(400).json({
			error: 'Name must be unique.',
		})
	}

	const person = {
		name,
		number,
		id: genId(),
	}

	data = [...data, person]
	response.json(person)
})
//* Start server
app.listen(PORT)
console.log(`server running on port ${PORT}. http://localhost:${PORT}`)
