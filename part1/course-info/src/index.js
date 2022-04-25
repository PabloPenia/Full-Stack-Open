import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ]
  return (
    <div>
      <Header title={course} />
      <Content array={parts} />
      <Total ex={parts} />
    </div>
  )
}
const Header = ({ title }) => <h1>{title}</h1>
const Content = ({ array }) => {
  return array.map((item, index) => <Part obj={item} key={index} />)
}
const Part = ({ obj }) => <p>{`${obj.name} ${obj.exercises}`}</p>
const Total = ({ ex }) => {
  const exTotal = ex.map(item => item.exercises).reduce((prev, curr) => prev + curr, 0)
  return <p>Number of exercises {exTotal}</p>
}

// render application
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
