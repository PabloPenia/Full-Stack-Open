import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }
  return (
    <div>
      <Header title={course} />
      <Content>
        <Part part={part1} />
        <Part part={part2} />
        <Part part={part3} />
      </Content>
      <Total ex={[part1, part2, part3]} />
    </div>
  )
}
const Header = ({ title }) => <h1>{title}</h1>
const Content = ({ children }) => children
const Part = ({ part }) => <p>{`${part.name} ${part.exercises}`}</p>
const Total = ({ ex }) => {
  const exTotal = ex.map(item => item.exercises).reduce((prev, curr) => prev + curr, 0)
  return <p>Number of exercises {exTotal}</p>
}

// render application
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
